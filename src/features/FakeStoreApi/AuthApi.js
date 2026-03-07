import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UtilsProductsApi } from "../../utils/utils";

export const AuthApi = createApi({
  reducerPath: "AuthApi",
  baseQuery: fetchBaseQuery({
    baseUrl: UtilsProductsApi,
  }),
  endpoints: (builder) => ({
    addAuthLogin: builder.mutation({
      query: (login, credentials) => ({
        // url: `auth/${login}`,
        url: `auth/login`,
        method: "POST",
        body: JSON.stringify(credentials),
      }),
    }),
  }),
});

//credentials = реквізити для входу

export const { useAddAuthLoginMutation } = AuthApi;
