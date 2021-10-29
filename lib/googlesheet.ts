import { google } from 'googleapis';
import { JWT } from 'next-auth/jwt';

/**
 * Eine Google Tabelle.
 *
 * @author Stefan Kühnel, git@stefankuehnel.com
 * @version last modified 2021-10-25
 */
export default class GoogleSheet {
    /**
     * OAuth 2.0 Access Token.
     */
    private readonly accessToken: JWT['accessToken'];

    /**
     * Initialisiert eine neue Google Tabelle.
     *
     * @param accessToken Ein OAuth 2.0 Access Token.
     */
    constructor(accessToken: GoogleSheet['accessToken']) {
        this.accessToken = accessToken;
    }

    /**
     * Gibt Werte aus einer Google Tabelle zurück.
     *
     * @param spreadsheet Eine Spreadsheet Id.
     * @param range Ein Zellbereich.
     *
     * @return Promise Werte der Google Tabelle.
     */
    async getValues(spreadsheet: string, range: string) {
        const googleSheets = google.sheets('v4');

        // Abfrage der Daten von der Google Sheets API.
        const response = await googleSheets.spreadsheets.values.get({
            spreadsheetId: spreadsheet,
            range: range,
            oauth_token: this.accessToken
        });

        // Einträge der Tabelle.
        const { values } = response.data;

        return values;
    }
}
