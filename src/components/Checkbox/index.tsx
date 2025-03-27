import { ItemType } from '@/types';
import styles from './styles.module.scss';

type CheckboxProps = {
    item: ItemType;
    setCompletedItem: (id: string) => void;
};

export const Checkbox = ({ item, setCompletedItem }: CheckboxProps) => {
    return (
        <input
            className={styles.input}
            type='checkbox'
            checked={item.completed}
            onChange={() => setCompletedItem(item.id)}
            data-testid={`checkboxItem${item.id}`}
        />
    );
};
