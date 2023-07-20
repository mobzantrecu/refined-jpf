/// <reference types="react" />
import 'reflect-metadata';
export declare const renderMetadataKey: unique symbol;
export declare const renderKey = "renderTag";
export declare function render(component: React.ComponentType): {
    (target: Function): void;
    (target: Object, propertyKey: string | symbol): void;
};
//# sourceMappingURL=render.decorator.d.ts.map