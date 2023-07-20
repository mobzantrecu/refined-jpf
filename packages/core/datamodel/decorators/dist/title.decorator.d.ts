import 'reflect-metadata';
export declare const titleMetadataKey: unique symbol;
export declare const titleKey = "title";
export declare function title(name: string): {
    (target: Function): void;
    (target: Object, propertyKey: string | symbol): void;
};
//# sourceMappingURL=title.decorator.d.ts.map