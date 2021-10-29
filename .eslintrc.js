module.exports = {
    extends: ['next', 'prettier'],
    rules: {
        // ToDo: Regel entfernen, bis der Fehler "False positive for no-document-import-in-page" durch ein Update behoben wurde.
        // Referenz: https://github.com/vercel/next.js/issues/28596
        '@next/next/no-document-import-in-page': 'off'
    }
};
