
export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
};

export const getLocalStorage = (key) => {
    return localStorage.getItem(key);
};

export const getLocalStorageObject = (key) => {
     return JSON.parse(localStorage.getItem(key));
};