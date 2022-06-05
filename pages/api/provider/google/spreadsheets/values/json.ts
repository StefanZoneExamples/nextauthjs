import { Unauthorized } from 'http-json-errors';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import Json from 'utils/json';

import Sheet from 'lib/provider/google/sheet';

export default async function json(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Abfrage der aktuellen Session.
        // Ist diese nicht vorhanden, so ist der Nutzer nicht angemeldet.
        const session = await getSession({ req });

        // Für den Zugriff ist eine Anmeldung erforderlich.
        if (!session) {
            throw new Unauthorized('Authentication required to access the protected resource.');
        }

        // Die Spreadsheet ID und der auszulesende Zellbereich.
        const id = '1NTuZ200WEsEmMsbZtUspLiAzJxB6V_eMfhJlUGQAzag';
        const range = 'Sheet1'; // Komplettes Blatt der Tabelle.

        // Ein neues Google SpreadSheet.
        const sheet = new Sheet(id);

        // Die Werte der Tabelle.
        const values = (await sheet.getValues(range)) || [];

        return res.status(200).json({ values });
    } catch (error) {
        // Einheitlich formatierter Fehler.
        const httpError = Json.createError(error as Error);

        return res.status(httpError.statusCode).json({ error: httpError });
    }
}
