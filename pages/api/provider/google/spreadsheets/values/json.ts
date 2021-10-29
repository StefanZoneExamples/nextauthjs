import { NextApiRequest, NextApiResponse } from 'next';
import Json from 'utils/json';

import GoogleSheet from 'lib/googlesheet';
import OAuth from 'lib/oauth';

export default async function json(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Initialisierung der Google Tabelle mit Hilfe des OAuth 2.0 Access Tokens.
        const accessToken = await OAuth.getAccessToken(req);
        const sheet = new GoogleSheet(`${accessToken}`);

        // Die Spreadsheet ID und der auszulesende Zellbereich.
        const spreadsheet = '1NTuZ200WEsEmMsbZtUspLiAzJxB6V_eMfhJlUGQAzag';
        const range = 'Sheet1'; // Komplettes Blatt der Tabelle.

        // Die Werte der Tabelle.
        const values = (await sheet.getValues(spreadsheet, range)) || [];

        // Verbesserung der Lesbarkeit.
        const response = Json.prettyPrint({ values });

        return res.status(200).json(response);
    } catch (error) {
        // Einheitlich formatierter Fehler.
        const httpError = Json.createError(error as Error);

        // Verbesserung der Lesbarkeit.
        const response = Json.prettyPrint({ error: httpError });

        return res.status(httpError.statusCode).json(response);
    }
}
