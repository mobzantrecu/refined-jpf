import 'reflect-metadata';
export declare const renderCellMetadataKey: unique symbol;
export declare function renderCell(renderFn: Function): {
    (target: Function): void;
    (target: Object, propertyKey: string | symbol): void;
};
//# sourceMappingURL=renderCell.decorator.d.ts.map