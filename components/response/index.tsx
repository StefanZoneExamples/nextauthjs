import { UseQueryResult } from 'react-query';

import Pre from 'components/pre';

const Response = <Data,>(queryResult: UseQueryResult<Data>) => {
    const { data, isError, isLoading } = queryResult;
    const { error } = queryResult as { error: Error };

    if (isError) return <Pre>{error.message}</Pre>;
    if (isLoading) return <Pre>Loading...</Pre>;

    return <Pre>{prettyPrint(data)}</Pre>;
};

/**
 * Formatiert ein Datenobjekt.
 *
 * @param object Ein Objekt.
 * @return string Formatiertes Datenobjekt.
 */
const prettyPrint = (object: any) => {
    return JSON.stringify(object, null, 2);
};

export default Response;
