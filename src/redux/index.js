import {configureStore} from "@reduxjs/toolkit";
import books from "./reducers/books"
import book from "./reducers/oneBook"
import authors from "./reducers/authors.js";
import author from "./reducers/oneAuthor.js";
import sale from "./reducers/oneSale.js";
import sales from "./reducers/sale.js";
import user from "./reducers/user.js";
import {apiSlice} from "./api/api.js";
import auth from './reducers/auth.js'
import {rememberReducer, rememberEnhancer} from "redux-remember";

const rememberedKeys = ['auth'];

export const store = configureStore({
    reducer: rememberReducer({
        books,
        book,
        authors,
        author,
        sale,
        sales,
        user,
        auth,
        [apiSlice.reducerPath]: apiSlice.reducer
    }),
    enhancers:[rememberEnhancer(window.localStorage, rememberedKeys, {persistWholeStore: true})],
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store