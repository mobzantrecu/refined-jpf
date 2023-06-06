import 'reflect-metadata';

export const keyMetadataKey = Symbol('key');
export const keyKey = 'key';

export function key(key: string) {
    return Reflect.metadata(keyMetadataKey, key);
}
