import { ItemTypeNullable } from '@/types';
import styles from './styles.module.scss';
import { useState } from 'react';
import classNames from 'classnames';

type FormProps = {
    item: ItemTypeNullable;
    saveForm: () => void;
    closeForm: () => void;
    setEditedItem: (item: ItemTypeNullable) => void;
};

export const Form = ({
    setEditedItem,
    item,
    saveForm,
    closeForm,
}: FormProps) => {
    const [isDirty, setDirty] = useState<boolean>(false);

    if (item) {
        return (
            <div className={styles.wrap}>
                <div className={styles.box} data-testid='formBox'>
                    <div className={styles.stack}>
                        <input
                            type='text'
                            name='title'
                            value={item.title}
                            onChange={(e) => {
                                setEditedItem({
                                    ...item,
                                    title: e.target.value,
                                });
                            }}
                            placeholder='Title'
                            className={classNames(styles.input, {
                                [styles.error]: isDirty && !item.title,
                            })}
                            data-testid='formTitle'
                        />
                        <textarea
                            name='text'
                            value={item.text}
                            onChange={(e) => {
                                setEditedItem({
                                    ...item,
                                    text: e.target.value,
                                });
                            }}
                            placeholder='Text'
                            className={classNames(styles.textarea, {
                                [styles.error]: isDirty && !item.text,
                            })}
                            data-testid='formText'
                        />
                        <div
                            className={styles.btnRow}
                            onMouseEnter={() => setDirty(true)}
                        >
                            <button
                                type='button'
                                onClick={() => saveForm()}
                                disabled={item.title === '' || item.text === ''}
                                data-testid='formSubmit'
                            >
                                Save
                            </button>
                            <button
                                type='button'
                                onClick={() => closeForm()}
                                data-testid='formClose'
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return null;
};
