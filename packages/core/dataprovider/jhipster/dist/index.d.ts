import { AxiosInstance } from 'axios';
import { DataProvider, CrudFilters, CrudSorting } from '@refinedev/core';
export declare const generateSort: (sort?: CrudSorting) => {
    _sort: string[];
    _order: string[];
};
export declare const generateFilter: (filters?: CrudFilters) => {
    [key: string]: string;
};
declare const JHipsterServer: (apiUrl: string, httpClient?: AxiosInstance) => Omit<Required<DataProvider>, 'createMany' | 'updateMany' | 'deleteMany'>;
export default JHipsterServer;
//# sourceMappingURL=index.d.ts.map