import { NextApiRequest, NextApiResponse } from 'next';
import Json from 'utils/json';

import Sheet from 'lib/provider/google/sheet';

export default async function json(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Die Spreadsheet ID und der auszulesende Zellbereich.
        const id = '1NTuZ200WEsEmMsbZtUspLiAzJxB6V_eMfhJlUGQAzag';
        const range = 'Sheet1'; // Komplettes Blatt der Tabelle.

        // Ein neues Google SpreadSheet.
        const sheet = new Sheet(id);

        // Die Werte der Tabelle.
        const values = (await sheet.getValues(range)) || [];

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
