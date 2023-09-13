import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {instance} from "../../config/api/api";


export const getAllAuthors = createAsyncThunk(
    "authors/getAllAuthors",
    async (filter,thunkAPI) => {
        try {
            const res = await axios(`${instance}authors`)
            return res.guls
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const authorsSlice = createSlice({
    name: "authors",
    initialState: {
        guls: [],
        filter: {
            limit: 6
        }
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllAuthors.pending, (state) => {
                state.isLoding = 'true'
            })
            .addCase(getAllAuthors.fulfilled, (state, {payload}) => {
                state.isLoding = 'done'
                state.guls = payload
            })
            .addCase(getAllAuthors.rejected, (state, {payload}) => {
                state.isLoding = 'false'
                state.error = payload
            })

    }

})

export default authorsSlice.reducer