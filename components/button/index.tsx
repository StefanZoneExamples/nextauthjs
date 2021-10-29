import styles from './button.module.css';

export default function Button(props: JSX.IntrinsicElements['a']) {
    return <a className={styles.button} {...props} />;
}
