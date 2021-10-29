import { TokenSet } from 'next-auth';

// Erweiterung der Typen für einen JWT.
declare module 'next-auth/jwt' {
    interface JWT {
        accessToken: TokenSet['accessToken'];
        refreshToken: TokenSet['refreshToken'];
    }
}
