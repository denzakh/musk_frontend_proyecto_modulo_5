import { TodoItem } from '@/components/TodoItem';
import styles from './styles.module.scss';
import { ItemType } from '@/types';

type ListProps = {
    list: ItemType[];
    delItem: (id: string) => void;
    setCompletedItem: (id: string) => void;
    setEditedItem: (item: ItemType) => void;
    isCompleted?: boolean;
};

export const TodoList = (props: ListProps) => {
    const {
        list,
        delItem,
        setCompletedItem,
        setEditedItem,
        isCompleted = false,
    } = props;
    return (
        <ul className={styles.list}>
            {list
                ?.filter((item) => {
                    return item.completed === isCompleted;
                })
                .map((item) => (
                    <TodoItem
                        item={item}
                        key={item.id}
                        delItem={delItem}
                        setCompletedItem={setCompletedItem}
                        setEditedItem={setEditedItem}
                    />
                ))}
        </ul>
    );
};
