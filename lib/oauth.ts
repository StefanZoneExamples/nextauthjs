import { Forbidden } from 'http-json-errors';
import { NextApiRequest } from 'next';
import { getToken, JWT } from 'next-auth/jwt';

/**
 * Eine OAuth Verbindung.
 *
 * @author Stefan Kühnel, git@stefankuehnel.com
 * @version last modified 2021-10-25
 */
export default class OAuth {
    /**
     * Rückgabe des JWT.
     *
     * @param req Ein Next Api Request.
     * @return Promise JWT.
     */
    static async getJWT(req: NextApiRequest): Promise<JWT | null> {
        const secret = process.env.SECRET;

        return await getToken({ req, secret });
    }

    /**
     * Rückgabe des Access Token.
     *
     * @param req Ein Next Api Request.
     * @return Promise Access Token.
     */
    static async getAccessToken(req: NextApiRequest): Promise<JWT['accessToken'] | null> {
        // Der aktuelle JWT.
        const jwt = await OAuth.getJWT(req);

        // Der Access Token.
        const { accessToken } = { ...jwt };

        // Der Access Token konnte nicht gefunden werden.
        // Ein Grund hierfür könnte sein, dass der Nutzer nicht angemeldet ist.
        if (!accessToken) throw new Forbidden('Missing required access token.');

        return accessToken;
    }
}
