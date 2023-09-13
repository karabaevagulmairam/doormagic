import {configureStore} from "@reduxjs/toolkit";
import books from "./reducers/books"
import book from "./reducers/oneBook"
import authors from "./reducers/authors.js";
import {apiSlice} from "./api/api";

export const store = configureStore({
    reducer: {
        books,
        book,
        authors,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})