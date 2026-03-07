import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UtilsProductsApi } from "../../utils/utils";

export const UsersApi = createApi({
  reducerPath: "UsersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: UtilsProductsApi,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "users",
    }),
    getUserSingle: builder.query({
      query: (id) => `users/${id}`,
    }),
    addUser: builder.mutation({
      query: (newUser) => ({
        url: "users",
        method: "POST",
        body: JSON.stringify(newUser),
      }),
    }),
    updateUser: builder.mutation({
      query: ({id, ...updataUser}) => ({
        url: `users/${id}`,
        method: "PUT",
        body: updataUser,
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserSingleQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = UsersApi;
