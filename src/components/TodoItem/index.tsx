import { ItemType } from '@/types';
import { Checkbox } from '@/components/Checkbox';
import styles from './styles.module.scss';

type ItemProps = {
    item: ItemType;
    delItem: (id: string) => void;
    setCompletedItem: (id: string) => void;
    setEditedItem: (item: ItemType) => void;
};

export const TodoItem = (props: ItemProps) => {
    const { item, delItem, setCompletedItem, setEditedItem } = props;

    return (
        <li
            className={styles.li}
            data-testid={`item${item.id}`}
            id={item.id}
            title='item'
        >
            <Checkbox item={item} setCompletedItem={setCompletedItem} />
            <div className={styles.textRow}>
                <strong className={styles.title}>{item.title}</strong>
                <div className={styles.text}>{item.text}</div>
            </div>

            <button
                type='button'
                onClick={() => {
                    setEditedItem(item);
                }}
                title='Edit'
                data-testid={`editItem${item.id}`}
            >
                🖉
            </button>
            <button
                type='button'
                onClick={() => delItem(item.id)}
                title='Delete'
                data-testid={`deleteItem${item.id}`}
            >
                🗑
            </button>
        </li>
    );
};
