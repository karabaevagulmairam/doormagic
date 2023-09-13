import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {instance} from "../../config/api/api";


export const getOneBook = createAsyncThunk(
    "oneBook/getOneBook",
    async (id,thunkAPI) => {
        try {
            const res = await axios(`${instance}products/${id}`)
            console.log(res.data)
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const bookSlice = createSlice({
    name: "oneBook",
    initialState: {
        product: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getOneBook.pending, (state) => {
                state.isLoding = 'true'
            })
            .addCase(getOneBook.fulfilled, (state, {payload}) => {
                state.isLoding = 'done'
                state.product = payload
            })
            .addCase(getOneBook.rejected, (state, {payload}) => {
                state.isLoding = 'false'
                state.error = payload
            })

    }

})

export default bookSlice.reducer