import {createSlice} from "@reduxjs/toolkit";

const magicSlice = createSlice({
    name: 'magic',
    initialState: {
        data: []
    },
    reducers: {
        addDoor: (state, action) => {

        }
    }
});


export const {addDoor} = magicSlice.actions;
export default magicSlice.reducer;

