import { GoogleAuthOptions } from 'google-auth-library';
import { google } from 'googleapis';

/**
 * Eine Berechtigung.
 *
 * @author Stefan Kühnel, git@stefankuehnel.com
 * @version last modified 2021-11-18
 */
export default class Auth {
    /**
     * Rückgabe eines Google Service Accounts.
     *
     * @param scopes Liste mit Berechtigungen.
     * @return GoogleAuth Google Service Account.
     */
    static getServiceAccount(scopes: GoogleAuthOptions['scopes']) {
        return new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
            },
            scopes: scopes
        });
    }
}
