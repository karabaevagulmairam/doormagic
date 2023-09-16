import {configureStore} from "@reduxjs/toolkit";
import books from "./reducers/books"
import book from "./reducers/oneBook"
import authors from "./reducers/authors.js";
import author from "./reducers/oneAuthor.js";
import sale from "./reducers/oneSale.js";
import sales from "./reducers/sale.js";
import user from "./reducers/user.js";
import {apiSlice} from "./api/api";

export const store = configureStore({
    reducer: {
        books,
        book,
        authors,
        author,
        sale,
        sales,
        user,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});