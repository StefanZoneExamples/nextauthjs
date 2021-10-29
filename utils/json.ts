import { GaxiosError } from 'gaxios';
import { createError, HttpError } from 'http-json-errors';

/**
 * JSON Utilityklasse.
 *
 * @author Stefan Kühnel, git@stefankuehnel.com
 * @version last modified 2021-10-26
 */
export default class Json {
    /**
     * Erstellt einen einheitlich formatierten Fehler.
     *
     * @param error Ein Error.
     * @return HttpError HttpError.
     */
    static createError(error: Error) {
        // Unbekannte Fehler werden immer als InternalServerError definiert.
        let statusCode: number = 500;

        // Es ist ein bekannter Fehler innerhalb der Applikation aufgetreten.
        if (error instanceof HttpError) {
            statusCode = error.statusCode;
        }

        // Es ist ein bekannter Google API Client Fehler aufgetreten.
        if (error instanceof GaxiosError) {
            if (error.response) {
                statusCode = error.response.status;
            }
        }

        // Erstellung eines einheitlichen Fehlers.
        const httpError = createError(statusCode, error.message);

        // Die Eigenschaft, dass es sich um einen HttpError handelt,
        // ist irrelevant und wird entfernt.
        Reflect.deleteProperty(httpError, 'isHttpError');

        return httpError;
    }

    /**
     * Generiert aus einem gegebenen JavaScript Objekt eine formatierte
     * JSON Zeichenkette.
     *
     * @param object Ein JavaScript Objekt.
     * @return JSON JSON-Zeichenkette, die den angegebenen Wert darstellt,
     *              oder undefiniert.
     */
    static prettyPrint(object: Object) {
        const spaces = 2;
        const replacer = null;

        return JSON.stringify(object, replacer, spaces);
    }
}
