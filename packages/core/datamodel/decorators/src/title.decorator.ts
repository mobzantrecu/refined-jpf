import 'reflect-metadata';

export const titleMetadataKey = Symbol('title');
export const titleKey = 'title';

export function title(name: string) {
    return Reflect.metadata(titleMetadataKey, name);
}
