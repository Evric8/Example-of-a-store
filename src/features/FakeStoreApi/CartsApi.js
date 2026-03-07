import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UtilsProductsApi } from "../../utils/utils";

export const CartsApi = createApi({
  reducerPath: "CartsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: UtilsProductsApi,
  }),
  endpoints: (builder) => ({
    getCarts: builder.query({
      query: () => "carts",
    }),
    getCartId: builder.query({
      query: (id) => `carts/${id}`,
    }),
    addCart: builder.mutation({
      query: (newCart) => ({
        url: "carts",
        method: "POST",
        // headers: { "Content-Type": `application/json` },
        body: JSON.stringify(newCart),
      }),
    }),
    updateCart: builder.mutation({
      query: ({id, ...newValueCart}) => ({
        url: `carts/${id}`,
        method: "PUT",
        // headers: { "Content-Type": `application/json` },
        body: JSON.stringify(newValueCart),
      }),
    }),
    deleteCart: builder.mutation({
      query: (id) => ({
        url: `carts/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetCartsQuery,
  useGetCartIdQuery,
  useAddCartMutation,
  useUpdateCartMutation,
  useDeleteCartMutation,
} = CartsApi;
