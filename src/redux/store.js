import {configureStore} from "@reduxjs/toolkit"
import magicSlice from "./reducers/magicSlice"

const store = configureStore({
    reducer : {
        magicSlice
    }
});




export default store;