import React from "react";

export const getLocalStorage = (key = "basket") => {
  try {
    const store = localStorage.getItem(key);
    return store ? JSON.parse(store) : [];
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const saveLocalStorage = (key = "basket", items) => {
  try {
    const data = JSON.stringify(items);
    localStorage.setItem(key, data);
  } catch (e) {
    console.error(e);
  }
};

export const clearLocalStorage = (key = "basket") => {
  try {
    localStorage.setItem(key, JSON.stringify([]));
  } catch (e) {
    console.error(e);
  }
};

// export default localStorage
