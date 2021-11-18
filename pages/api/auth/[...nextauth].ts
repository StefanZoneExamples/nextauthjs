import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import getConfig from 'next/config';

export default NextAuth({
    providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            scope: [
                'https://www.googleapis.com/auth/userinfo.profile',
                'https://www.googleapis.com/auth/userinfo.email'
            ].join(' ')
        })
    ],

    // Eine zufällige Zeichenfolge, die zum Hashing von Token, Signieren von Cookies und Generieren von kryptografischen Schlüsseln verwendet wird.
    secret: process.env.SECRET,

    // Aktivierung von Debug Meldungen in der Konsole.
    debug: false,

    // Rückruffunktionen, die bei bestimmten Ereignissen aufgerufen werden.
    callbacks: {
        async signIn(user, account, profile) {
            // Die Werte der serverRuntimeConfig sind nur serverseitig zugänglich.
            // Sie werden aus der next.config.js Datei ausgelesen.
            const { serverRuntimeConfig } = getConfig();

            // Nur Nutzer, deren E-Mail Adressen in dieser Liste enthalten sind,
            // erhalten Zugriff auf den Dienst und dürfen sich anmelden.
            const { authorizedUsers } = serverRuntimeConfig as { authorizedUsers: Array<string> };

            // Alle anmeldenden Nutzer erhalten Zugriff auf den Dienst, da keine Einschränkungen
            // bezüglich der authorisierten E-Mail Adressen getroffen wurden. Dies kann jedoch über
            // den authorizedUsers Eintrag in der next.config.js geändert werden.
            if (Array.isArray(authorizedUsers) && !authorizedUsers.length) {
                return true;
            }

            // Die E-Mail Adresse des sich anmeldenden Nutzers.
            const { email } = profile;

            // Test, ob für den anmeldenden Nutzer vom Authorisierungsserver eine
            // E-Mail Adresse übermittelt wurde. Ist dies nicht der Fall, so wird
            // der Anmeldevorgang abgebrochen.
            if (!email) return false;

            // Ist ein Nutzer in der Liste authorisierter Nutzer enthalten, erhält er Zugriff auf den Dienst.
            // Ansonsten nicht.
            return authorizedUsers.includes(email);
        }
    }
});
