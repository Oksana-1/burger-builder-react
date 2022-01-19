export const getLocalStorageItem = (name) => {
	return window.localStorage.getItem(name);
};
export const setLocalStorageItem = (name, value) => {
	window.localStorage.setItem(name, value);
};