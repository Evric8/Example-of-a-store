import { createSlice } from "@reduxjs/toolkit";
import {
  clearLocalStorage,
  getLocalStorage,
  saveLocalStorage,
} from "../../utils/localStorage";

export const CounterInBasketSlice = createSlice({
  name: "counter",
  initialState: {
    basket: getLocalStorage("basket") || [],
  },
  reducers: {
    addBasket: (state, action) => {
      const existingItem = state.basket.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.basket.push({ ...action.payload, count: 1, checked: true });
        // console.log(action.payload);
      }
      saveLocalStorage("basket", state.basket);
    },
    removeBasket: (state, action) => {
      state.basket = state.basket.filter((b) => b.id !== action.payload);
      saveLocalStorage("basket", state.basket);
    },
    clearBasket: (state) => {
      state.basket = [];
      clearLocalStorage("basket");
    },
    incrementBasketId: (state, action) => {
      const item = state.basket.find((item) => item.id === action.payload);
      if (item) {
        item.count += 1;
      }
      saveLocalStorage("basket", state.basket);
    },
    decrementBasketId: (state, action) => {
      const item = state.basket.find((item) => item.id === action.payload);
      if (item && item.count > 1) item.count -= 1;
      saveLocalStorage("basket", state.basket);
    },
    checkedBaskedId: (state, action) => {
      const item = state.basket.find((i) => i.id === action.payload);
      if (item) item.checked = !item.checked;
      saveLocalStorage("basket", state.basket);
    },
  },
});

// екшени. reducers тільки змінюють дані
export const {
  addBasket,
  removeBasket,
  clearBasket,
  incrementBasketId,
  decrementBasketId,
  checkedBaskedId,
  existingItemCount,
} = CounterInBasketSlice.actions;

// селектори. selectors витягують потрібне значення (basket, item або count)
export const selectBasket = (state) => state.counter.basket;

export const selectItemById = (state, id) =>
  state.counter.basket.find((i) => i.id === id);

export const selectItemCount = (state, id) => {
  const item = state.counter.basket.find((i) => i.id === id);
  return item ? item.count || 0 : 0;
  // return item ? item.count : null;
};

export default CounterInBasketSlice.reducer;
