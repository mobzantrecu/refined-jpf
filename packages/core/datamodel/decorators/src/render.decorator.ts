import 'reflect-metadata';

export const renderMetadataKey = Symbol('renderTag');
export const renderKey = 'renderTag';

export function render(component: React.ComponentType) {
    return Reflect.metadata(renderMetadataKey, component);
}
