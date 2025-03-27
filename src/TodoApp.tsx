import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ItemType, ItemTypeNullable } from '@/types';
import { Form } from '@/components/Form';
import { emptyItem, mockList } from '@/mocs';
import { CompletedControl } from '@/components/CompletedControl';
import styles from './app.module.scss';
import { TodoList } from '@/components/TodoList';

function TodoApp({ startList = mockList }) {
    const [list, setList] = useState<ItemType[]>(startList);
    const [editedItem, setEditedItem] = useState<ItemTypeNullable>(null);
    const [isCompletedPage, setCompletedPage] = useState<boolean>(false);

    const delItem = (id: string) => {
        setList(list.filter((item) => item.id !== id));
    };

    const closeForm = () => {
        setEditedItem(null);
    };

    const saveForm = () => {
        if (editedItem) {
            if (editedItem.id) {
                const index = list.findIndex(
                    (item) => item.id === editedItem.id
                );

                if (index !== -1) {
                    list[index] = {
                        ...list[index],
                        ...editedItem,
                    };
                }
            } else {
                list.push({ ...editedItem, id: uuidv4() });
            }

            setList(list);
        }
        closeForm();
    };

    const setCompletedItem = (id: string) => {
        setList(
            list.map((item) => {
                if (item.id === id) {
                    item.completed = !item.completed;
                }
                return item;
            })
        );
    };

    const getHeader = (isRoot = false) => (
        <div className={styles.header}>
            <h1>ToDo</h1>
            <CompletedControl
                setCompletedPage={setCompletedPage}
                isCompletedPage={isCompletedPage}
            />
            <div className={styles.addBtnBox}>
                {isRoot && (
                    <button
                        type='button'
                        onClick={() => {
                            setEditedItem(emptyItem);
                        }}
                        title='New'
                        data-testid='new'
                    >
                        +
                    </button>
                )}
            </div>
        </div>
    );

    if (isCompletedPage) {
        return (
            <div className={styles.box}>
                {getHeader()}
                <TodoList
                    list={list}
                    delItem={delItem}
                    setCompletedItem={setCompletedItem}
                    setEditedItem={setEditedItem}
                    isCompleted
                />
            </div>
        );
    }

    return (
        <div className={styles.box}>
            {getHeader(true)}
            <TodoList
                list={list}
                delItem={delItem}
                setCompletedItem={setCompletedItem}
                setEditedItem={setEditedItem}
            />
            <Form
                item={editedItem}
                setEditedItem={setEditedItem}
                closeForm={closeForm}
                saveForm={saveForm}
            />
        </div>
    );
}

export default TodoApp;
