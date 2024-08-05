const OBJECT_PREFIX = 'object:';

export const LOCAL_STORAGE_KEYS = {
    LOCALE: 'locale',
} as const;

export type T_LOCAL_STORAGE_KEYS =
    (typeof LOCAL_STORAGE_KEYS)[keyof typeof LOCAL_STORAGE_KEYS];

export function getLocalStorageItem<T>(key: T_LOCAL_STORAGE_KEYS): T | null {
    const item = localStorage.getItem(key);
    if (!item) {
        return null;
    }

    if (item.startsWith(OBJECT_PREFIX)) {
        return JSON.parse(item.slice(OBJECT_PREFIX.length));
    }

    return item as T;
}

export function setLocalStorageItem<T>(
    key: T_LOCAL_STORAGE_KEYS,
    value: T
): void {
    if (value === null || value === undefined) {
        removeLocalStorageItem(key);
    } else if (typeof value === 'object') {
        localStorage.setItem(key, OBJECT_PREFIX + JSON.stringify(value));
    } else {
        localStorage.setItem(key, value as unknown as string);
    }
}

export function removeLocalStorageItem(key: T_LOCAL_STORAGE_KEYS): void {
    localStorage.removeItem(key);
}
