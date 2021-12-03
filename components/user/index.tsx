import { DefaultSession } from 'next-auth';
import Image from 'next/image';

import styles from './user.module.css';

export default function User(user: DefaultSession['user'] = {}) {
    // Die Daten des aktuell eingeloggten Benutzers.
    const { name, email, image } = user;

    return (
        <>
            <div className={styles.user}>
                <div className={styles.avatar}>
                    <Image
                        src={`${image}`}
                        width={50}
                        height={50}
                        className={styles.avatar}
                        alt="Avatar"
                    />
                </div>
                <div className={styles.text}>
                    <small>Signed in as</small>
                    <br />
                    <strong>{name || email}</strong>
                </div>
            </div>
        </>
    );
}
