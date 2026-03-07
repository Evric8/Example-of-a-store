import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UtilsProductsApi } from "../../utils/utils";

export const ProductsApi = createApi({
  reducerPath: "ProductsApi",
  baseQuery: fetchBaseQuery({ baseUrl: UtilsProductsApi }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
    }),
    getProductId: builder.query({
      query: (id) => `products/${id}`,
    }),
    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: "products",
        method: "POST",
        body: newProduct,
      }),
    }),
    updateProduct: builder.mutation({
      query: ({id, ...updateProduct}) => ({
        url: `products/${id}`,
        method: "PUT",
        body: updateProduct,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductIdQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = ProductsApi;


// Ось приклад, як можна реалізувати базовий CRUD за допомогою RTK Query. Для цього використовуємо createApi і визначаємо запити для створення, отримання, оновлення та видалення ресурсів.