namespace NodeJS {
    interface ProcessEnv extends NodeJS.ProcessEnv {
        GOOGLE_ID: string;
        GOOGLE_SECRET: string;
        GOOGLE_CLIENT_EMAIL: string;
        GOOGLE_PRIVATE_KEY: string;
        SECRET: string;
    }
}
