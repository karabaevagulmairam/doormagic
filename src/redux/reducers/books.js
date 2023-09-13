import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {instance} from "../../config/api/api";


export const getAllBooks = createAsyncThunk(
    "books/getAllBooks",
    async (filter,thunkAPI) => {
        try {
           const res = await axios(`${instance}products`)
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const booksSlice = createSlice({
    name: "books",
    initialState: {
        data: [],
        filter: {
            limit: 12
        }
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllBooks.pending, (state) => {
                state.isLoding = 'true'
            })
            .addCase(getAllBooks.fulfilled, (state, {payload}) => {
                state.isLoding = 'done'
                state.data = payload
            })
            .addCase(getAllBooks.rejected, (state, {payload}) => {
                state.isLoding = 'false'
                state.error = payload
            })

    }

})

export default booksSlice.reducer