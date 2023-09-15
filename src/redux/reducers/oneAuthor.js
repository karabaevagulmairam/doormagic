import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {instance} from "../../config/api/api";


export const getOneAuthor = createAsyncThunk(
    "oneAuthor/getOneAuthor",
    async (id,thunkAPI) => {
        try {
            const res = await axios(`${instance}authors/${id}`)
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)


export const updateAuthorRating = createAsyncThunk(
    "oneAuthor/updateAuthorRating",
    // Ваша логика обновления рейтинга здесь
    async ({ id, ratingData }, thunkAPI) => {
        try {
            const res = await axios.patch(`${instance}authors/${id}`, {
                ratingView: ratingData, //[]
            });
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const authorSlice = createSlice({
    name: "oneAuthor",
    initialState: {
        author: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getOneAuthor.pending, (state) => {
                state.isLoding = 'true'
            })
            .addCase(getOneAuthor.fulfilled, (state, {payload}) => {
                state.isLoding = 'done'
                state.author = payload
            })
            .addCase(getOneAuthor.rejected, (state, {payload}) => {
                state.isLoding = 'false'
                state.error = payload
            })
            .addCase(updateAuthorRating.fulfilled, (state, { payload }) => {
                // Обновите состояние автора с новым рейтингом
                state.author = payload;
            });

    }

})

export default authorSlice.reducer