import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {instance} from "../../config/api/api";



export const getAllSales = createAsyncThunk(
    "sales/getAllSales",
    async (filter,thunkAPI) => {
        try {
            const res = await axios(`${instance}saleCard`)
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const salesSlice = createSlice({
    name: "sales",
    initialState: {
        data: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllSales.pending, (state) => {
                state.isLoding = 'true'
            })
            .addCase(getAllSales.fulfilled, (state, {payload}) => {
                state.isLoding = 'done'
                state.data = payload
            })
            .addCase(getAllSales.rejected, (state, {payload}) => {
                state.isLoding = 'false'
                state.error = payload
            })

    }

})

export default salesSlice.reducer