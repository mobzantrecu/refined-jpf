import 'reflect-metadata';
import React, { FunctionComponent } from 'react';
import { BaseKey, BaseRecord, useOne, useMany } from '@refinedev/core';

export const joinColumnMetadataKey = Symbol('JoinColumn');
export const joinColumnKey = 'render';

function JoinColumn(
    resource: string,
    identification: string,
    fieldToShow: string,
    multiple?: boolean
) {
    const element = multiple ? JoinColumnMultipleFetch : JoinColumnFetch;
    const returnElement = (item: any) => {
        const hasIdentificationProperty = !!item[identification];
        const isAnArrayOfIds = !!item.length;

        const id =
            isAnArrayOfIds && !hasIdentificationProperty
                ? item
                : item[identification];
        return React.createElement(element, {
            resource,
            id,
            fieldToShow,
        }) as unknown as FunctionComponent<any>;
    };

    return Reflect.metadata(joinColumnMetadataKey, returnElement);
}

/**
 * @internal
 **/
function JoinColumnMultipleFetch<T extends BaseRecord>({
    resource,
    id,
    fieldToShow,
}: {
    resource: string;
    id: BaseKey[];
    fieldToShow: string;
}): JSX.Element {
    const { data: response, isLoading } = useMany<T>({
        resource: resource,
        ids: id,
    });

    const data = response?.data;

    const filteredData = data?.map((x) => x[fieldToShow]);

    return isLoading ? <>{'loading...'}</> : <>{filteredData?.join(', ')}</>;
}

/**
 * @internal
 **/
function JoinColumnFetch<T extends BaseRecord>({
    resource,
    id,
    fieldToShow,
}: any): JSX.Element {
    const { data: response, isLoading } = useOne<T>({
        resource,
        id,
    });

    const data = response?.data as any;

    return isLoading ? <>{'loading...'}</> : <>{data[fieldToShow]}</>;
}

export { JoinColumn }; //ManyToOne, OneToOne
