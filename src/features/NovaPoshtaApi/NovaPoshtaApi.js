import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const keyApi = "https://api.novaposhta.ua/v2.0/json/";
// VITE_URL_API = "https://api.novaposhta.ua/v2.0/json/"

export const NovaPoshtaApi = createApi({
  reducerPath: "NovaPoshtaApi",
  baseQuery: fetchBaseQuery({ baseUrl: keyApi }),
  endpoints: (builder) => ({
    //only cities without (settlment = village)
    getCities: builder.query({
      query: () => ({
        method: "POST",
        body: {
          apiKey: import.meta.env.VITE_NP_API_KEY_MOBILE,
          modelName: "AddressGeneral",
          calledMethod: "getCities",
          methodProperties: {
            // Ref: "00000000-0000-0000-0000-000000000000",
            // Page: "1",
            // FindByString: "Київ",
            // Limit: "20",
          },
        },
      }),
      //якщо без transformResponse то повертає все що є в data
      transformResponse: (response) => {
        return response.data
          .filter(
            (city) =>
              city.SettlementTypeDescription === "місто" &&
              city.IsBranch === "1"
          )
          .map((city) => ({
            ref: city.Ref,
            name: city.Description,
            city: city.SettlementTypeDescription,
          }));
      },
      keepUnusedDataFor: 86400, //one hours = 3600 cash, 86400 = one day cash
    }),

    //all cities
    getCitiesAll: builder.query({
      query: () => ({
        method: "POST",
        body: {
          apiKey: import.meta.env.VITE_NP_API_KEY_MOBILE,
          modelName: "AddressGeneral",
          calledMethod: "getCities",
          methodProperties: {},
        },
      }),
      transformResponse: (response) => {
        return response.data.map((city) => ({
          id: city.CityID,
          description: city.Description,
          city: city.SettlementTypeDescription,
        }));
      },
      keepUnusedDataFor: 86400,
    }),

    // all відділення Харкова
    getWarehouses: builder.query({
      query: (cityRef) => ({
        method: "POST",
        body: {
          // apiKey: import.meta.evn.VITE_NP_API_KEY_MOBILE,
          apiKey: import.meta.env.VITE_NP_API_KEY_BUSINESS_OFFICE,
          modelName: "Address",
          calledMethod: "getWarehouses",
          methodProperties: {
            CityRef: cityRef,
          },
        },
      }),
      // transformResponse: (response) =>
      //   response.data.map((warehouse) => ({
      //     CityID: warehouse.CityID,
      //     ref: warehouse.Ref,
      //     name: warehouse.Description,
      //     number: warehouse.Number,
      //   })),

      transformResponse: (responce) =>
        responce.data.map((w) => ({
          // w,

          latitude: w.Latitude,
          longitude: w.Longitude,
          ref: w.Ref,
          description: w.Description,
          descriptionRu: w.DescriptionRu,
          number: w.Number,
          address: w.ShortAddress,
          addressRu: w.ShortAddressRu,

          // postalCodeUA: w.PostalCodeUA,
          // siteKey: w.SiteKey,
        })),
      keepUnusedDataFor: 86400,
    }),

    // only one city by name
    getCityByName: builder.query({
      query: (cityName) => ({
        method: "POST",
        body: {
          apiKey: import.meta.env.VITE_NP_API_KEY_MOBILE,
          modelName: "Address",
          calledMethod: "getCities",
          methodProperties: {
            FindByString: cityName,
          },
        },
      }),
      transformResponse: (response) => response.data[0], // повертає тільки перший збіг
    }),

    // all by  Ref
    getCityRef: builder.query({
      query: (cityRef) => ({
        method: "POST",
        body: {
          apiKey: import.meta.env.VITE_NP_API_KEY_MOBILE,
          modelName: "Address",
          calledMethod: "getCities",
          methodProperties: {
            Ref: cityRef,
          },
        },
      }),
      // поверне тільки місто
      transformResponse: (response) => response.data[0],
    }),

    // після введення 3 символів бо є useEffect through lazy
    getCitiesBySearch: builder.query({
      query: (search) => ({
        method: "POST",
        body: {
          apiKey: import.meta.env.VITE_NP_API_KEY_MOBILE,
          modelName: "Address",
          calledMethod: "getCities",
          methodProperties: {
            FindByString: search,
          },
        },
      }),
      transformResponse: (response) => {
        return response.data.map((city) => ({
          ref: city.Ref,
          description: city.Description,
          //+
          descriptionRu: city.DescriptionRu,
          descriptionEn: city.DescriptionTranslit,
          //-
          city: city.SettlementTypeDescription,
          cityRu: city.SettlementTypeDescriptionRu,
        }));
      },
      // transformResponse:(response)=> response.data.map(city => city)
    }),
  }),
});

export const {
  useGetCitiesQuery,
  useGetCitiesAllQuery,
  useGetWarehousesQuery,
  useGetCityByNameQuery,
  useGetCityRefQuery,
  useLazyGetCitiesBySearchQuery,
} = NovaPoshtaApi;
