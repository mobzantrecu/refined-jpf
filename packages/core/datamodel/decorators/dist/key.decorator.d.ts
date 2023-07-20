import 'reflect-metadata';
export declare const keyMetadataKey: unique symbol;
export declare const keyKey = "key";
export declare function key(key: string): {
    (target: Function): void;
    (target: Object, propertyKey: string | symbol): void;
};
//# sourceMappingURL=key.decorator.d.ts.map