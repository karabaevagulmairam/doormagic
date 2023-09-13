import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {instance} from "../../config/api/api";
import {buildUrl} from "../../config/common";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: instance}),
    tagTypes: ["Product"],
    endpoints: (builder) => ({
        getProduct: builder.query({
            query: ({ id }) => `/products/${id}`,
            providesTags: ["Product"],
        }),
        getProducts: builder.query({
            query: (params) => buildUrl("/products", params),
            providesTags: ["Products"],
        }),
        getAuthor: builder.query({
            query: ({ id }) => `/author/${id}`,
            providesTags: ["Author"],
        }),
        getAuthors: builder.query({
            query: (params) => buildUrl("/authors", params),
            providesTags: ["Authors"],
        }),
    }),
})

export const {useGetProductQuery, useGetProductsQuery,useGetAuthorQuery,useGetAuthorsQuery} = apiSlice