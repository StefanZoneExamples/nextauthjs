import Link from 'next/link';

import styles from './footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <hr />
            <ul className={styles.items}>
                <li className={styles.item}>
                    <Link href="/copyright">
                        <a>Copyright</a>
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link href="/privacy">
                        <a>Privacy Policy</a>
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link href="/faq">
                        <a>FAQ</a>
                    </Link>
                </li>
                <li className={styles.item}>
                    <p>
                        &copy; {new Date().getFullYear()} Stefan K&uuml;hnel, All rights reserved.
                    </p>
                </li>
            </ul>
        </footer>
    );
}
