import { google } from 'googleapis';

import Auth from 'lib/auth';

/**
 * Ein Google SpreadSheet.
 *
 * @author Stefan Kühnel, git@stefankuehnel.com
 * @version last modified 2021-11-18
 */
export default class Sheet {
    /**
     * Eine Google SpreadSheet Id.
     */
    private readonly id: string;

    /**
     * Ein SpreadSheet Client.
     */
    private readonly client;

    /**
     * Initialisiert ein Google SpreadSheet.
     *
     * @param id Eine Google SpreadSheet Id.
     */
    constructor(id: string) {
        this.id = id;

        this.client = google.sheets({
            auth: Auth.getServiceAccount([
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'
            ]),
            version: 'v4'
        });
    }

    /**
     * Rückgabe aller Einträge.
     *
     * @param range Ein Zellbereich.
     * @return Array Einträge.
     */
    async getValues(range: string) {
        const { id, client } = this;

        // Abfrage der Daten.
        const response = await client.spreadsheets.values.get({
            spreadsheetId: id,
            range: range
        });

        // Auslesen der Einträge.
        const { values } = response.data;

        return values;
    }
}
