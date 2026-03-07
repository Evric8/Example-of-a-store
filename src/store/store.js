import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Slice/CountInBasketSlice";
import { ProductsApi } from "../features/FakeStoreApi/ProductsApi";
import { CartsApi } from "../features/FakeStoreApi/CartsApi";
import { UsersApi } from "../features/FakeStoreApi/UsersApi";
import { AuthApi } from "../features/FakeStoreApi/AuthApi";
import { NovaPoshtaApi } from "../features/NovaPoshtaApi/NovaPoshtaApi";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    [ProductsApi.reducerPath]: ProductsApi.reducer,
    [CartsApi.reducerPath]: CartsApi.reducer,
    [UsersApi.reducerPath]: UsersApi.reducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
    [NovaPoshtaApi.reducerPath]: NovaPoshtaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(ProductsApi.middleware, CartsApi.middleware)
      .concat(UsersApi.middleware)
      .concat(AuthApi.middleware)
      .concat(NovaPoshtaApi.middleware),
});

export default store;
