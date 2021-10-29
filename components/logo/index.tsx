import Image from 'next/image';

import styles from './logo.module.css';

export default function Logo() {
    return (
        <Image
            className={styles.logo}
            src="/logo.svg"
            width={37}
            height={37}
            alt="NextAuth.js Example Logo"
        />
    );
}
