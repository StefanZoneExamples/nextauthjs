import axios from 'axios';

/**
 * Handler für Axios Fehler.
 *
 * @param error Ein Fehler.
 */
export const errorHandler = (error: any) => {
    // Referenz: https://axios-http.com/docs/handling_errors
    if (axios.isAxiosError(error)) {
        const { response, request } = error;

        if (response) {
            const { error } = response.data;

            // Die Anfrage wurde gestellt und der Server hat mit einem Statuscode
            // geantwortet, der nicht in den Bereich von 2xx fällt.
            throw new Error(error.message);
        } else if (request) {
            // Die Anfrage wurde gestellt, aber es wurde keine Antwort empfangen.
            // `error.request` ist eine Instanz von XMLHttpRequest im Browser und
            // eine Instanz von http.ClientRequest in node.js.
            throw new Error('No response was received.');
        }
    } else {
        // Ein unbekannter Fehler ist aufgetreten.
        throw new Error('An unknown error has occurred.');
    }
};
