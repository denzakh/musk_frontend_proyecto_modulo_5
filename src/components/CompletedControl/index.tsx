import styles from './styles.module.scss';
import classNames from 'classnames';

type CompletedControlProps = {
    setCompletedPage: (a: boolean) => void;
    isCompletedPage: boolean;
};

export const CompletedControl = ({
    setCompletedPage,
    isCompletedPage,
}: CompletedControlProps) => {
    return (
        <div className={styles.nav}>
            <a
                onClick={() => {
                    setCompletedPage(false);
                }}
                className={classNames({
                    [styles.active]: !isCompletedPage,
                })}
            >
                Tareas
            </a>
            <a
                onClick={() => {
                    setCompletedPage(true);
                }}
                className={classNames({
                    [styles.active]: isCompletedPage,
                })}
            >
                Tareas completadas
            </a>
        </div>
    );
};
