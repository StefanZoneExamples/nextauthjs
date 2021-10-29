import classNames from 'classnames/bind';
import { signIn, signOut, useSession } from 'next-auth/client';

import Button from 'components/button';
import User from 'components/user';

import styles from './header.module.css';

export default function Header() {
    const [session, isLoading] = useSession();

    // Die Nutzung von "bind" ermöglicht die Verwendung der classNames Bibliothek
    // in Kombination mit Next.js CSS Modulen. Die Funktionalität der Verwendung
    // von gehashten CSS Klassennamen innerhalb des DOM bleibt dadurch erhalten.
    const cx = classNames.bind(styles);

    // Konditionale Animation des Headers.
    const header = cx({
        header: true,

        // Erforderlich für konditionale Animation des Headers.
        loading: isLoading,
        loaded: !isLoading
    });

    // Nutzer ist nicht angemeldet.
    if (!session) {
        return (
            <div className={header}>
                <span>You are not signed in</span>
                <Button
                    href="/api/auth/signin"
                    onClick={(event) => {
                        event.preventDefault();
                        signIn();
                    }}
                >
                    Sign in
                </Button>
            </div>
        );
    }

    // Nutzer ist angemeldet.
    return (
        <>
            <div className={header}>
                <User {...session.user} />
                <Button
                    href="/api/auth/signout"
                    onClick={(event) => {
                        event.preventDefault();
                        signOut();
                    }}
                >
                    Sign out
                </Button>
            </div>
        </>
    );
}
