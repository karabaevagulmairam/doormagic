import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {instance} from "../../config/api/api";


export const getOneSale = createAsyncThunk(
    "oneSale/getOneSale",
    async (id,thunkAPI) => {
        try {
            const res = await axios(`${instance}saleCard/${id}`)
            console.log(res.data)
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const saleSlice = createSlice({
    name: "oneSale",
    initialState: {
        sale : []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getOneSale.pending, (state) => {
                state.isLoding = 'true'
            })
            .addCase(getOneSale.fulfilled, (state, {payload}) => {
                state.isLoding = 'done'
                state.sale = payload
            })
            .addCase(getOneSale.rejected, (state, {payload}) => {
                state.isLoding = 'false'
                state.error = payload
            })

    }

})

export default saleSlice.reducer