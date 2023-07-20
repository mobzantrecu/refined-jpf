import { ColumnType } from 'antd/es/table/interface';
import 'reflect-metadata';
import { ComponentType } from 'react';
type Classable<T> = new (...args: any) => T;
type ShowComponentProps = {
    value: any;
    record: any;
    index?: number;
};
interface AntdColumn<T> extends ColumnType<T> {
    /**
     * The Component to render when loading the Show view
     *
     * @privateRemarks
     * TODO: check if this should change to a function that returns a ComponentType like refine's rendercell?
     **/
    renderTag?: ComponentType;
}
type AntdTableColumns<T> = Record<string | symbol, AntdColumn<T>>;
interface AntdEntityOptions {
    showComponent?: ComponentType<ShowComponentProps>;
}
/**
 * Marks the class as usable for Antd's components: Table's {@link '@antd/es/table/ColumnsType' | ColumnsType}, etc.
 * @decorators key, dataIndex, title, sorter, render
 **/
export declare function AntdEntity(options?: AntdEntityOptions): ClassDecorator;
export declare function antdEntityTableColumns<T>(clazz: Classable<T>): ColumnType<T>[];
/**
 * Converts previously processed metadata into AntdTable type.
 **/
export declare function antdEntityGetColumns<T>(clazz: Classable<T>): AntdTableColumns<T>;
export declare function antdEntityTableColumnsFromObj<T>(obj: AntdColumn<T>): ColumnType<T>[];
/**
 *
 * @param entityClass - The decorated class with the data properties to use
 * @param dataObject - The JSON comming from the dataprovider which should be an instance of entityClass or an extension of it
 **/
export declare function antdEntityGetShowFields<T extends Object>(entityClass: Classable<T>, dataObject?: T): ShowFieldsType<T>;
export interface ShowFields<RecordType> {
    value: any;
    render: (value?: any, record?: RecordType, index?: number) => React.ReactNode | React.ReactNode;
    metadata?: Record<any, any>;
}
export type ShowFieldsType<RecordType extends object = any> = Record<string | symbol, ShowFields<RecordType>>;
export {};
//# sourceMappingURL=Entity.d.ts.map