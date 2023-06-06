import 'reflect-metadata';

// TODO: revisar para qué está?
export const renderCellMetadataKey = Symbol('renderCell');
export function renderCell(renderFn: Function) {
    return Reflect.metadata(renderCellMetadataKey, renderFn);
}
