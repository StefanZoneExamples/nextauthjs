import Link from 'next/link';

import Logo from 'components/logo';

import styles from './navigation.module.css';

export default function Navigation() {
    return (
        <nav className={styles.navigation}>
            <Logo />
            <ul className={styles.items}>
                <li className={styles.item}>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link href="/docs">
                        <a>Docs</a>
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link href="/try">
                        <a>Try</a>
                    </Link>
                </li>
                <li className={styles.item}>
                    <a href="/github" target="_blank" rel="noreferrer noopener">
                        GitHub
                    </a>
                </li>
            </ul>
        </nav>
    );
}
