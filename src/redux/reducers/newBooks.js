import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {instance} from "../../config/api/api";

export const getAllNewBooks = createAsyncThunk(
    "newBooks/getAllNewBooks",
    async (filter, thunkAPI) => {
        try {
            const res = await axios(`${instance}products`);
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);

const newBooksSlice = createSlice({
    name: "newBooks",
    initialState: {
        data: [],
        filter: {
            limit: 12
        }
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllNewBooks.pending, (state) => {
                state.isLoding = 'true'
            })
            .addCase(getAllNewBooks.fulfilled, (state, {payload}) => {
                state.isLoding = 'done';
                state.data = payload
            })
            .addCase(getAllNewBooks.rejected, (state, {payload}) => {
                state.isLoding = 'false';
                state.error = payload
            })

    }

});


export default newBooksSlice.reducer