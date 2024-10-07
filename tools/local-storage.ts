export const writeToLocalStorage = (key: string, value: string) =>
	typeof window !== 'undefined' && localStorage?.setItem(key, value);

export const readFromLocalStorage = (key: string) =>
	typeof window !== 'undefined' && localStorage?.getItem(key);
export const deleteFromLocalStorage = (key: string) =>
	typeof window !== 'undefined' && localStorage?.removeItem(key);
