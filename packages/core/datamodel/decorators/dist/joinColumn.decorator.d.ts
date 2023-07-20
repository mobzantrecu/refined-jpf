import 'reflect-metadata';
export declare const joinColumnMetadataKey: unique symbol;
export declare const joinColumnKey = "render";
declare function JoinColumn(resource: string, identification: string, fieldToShow: string, multiple?: boolean): {
    (target: Function): void;
    (target: Object, propertyKey: string | symbol): void;
};
export { JoinColumn };
//# sourceMappingURL=joinColumn.decorator.d.ts.map