import styles from './pre.module.css';

export default function Button(props: JSX.IntrinsicElements['pre']) {
    return <pre className={styles.pre} {...props} />;
}
