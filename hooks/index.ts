import { sheets_v4 } from 'googleapis';
import { useQuery } from 'react-query';

export const useSpreadSheet = () => {
    type Data = sheets_v4.Schema$ValueRange;

    return useQuery<Data>(`/api/provider/google/spreadsheets/values/json`);
};
