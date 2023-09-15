import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import instance from "../../config/api/api.js"


const user = JSON.parse(localStorage.getItem('user'))


const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            id: localStorage.getItem("user") !== null ? JSON.parse(localStorage.getItem("user")).id : "",
            email: localStorage.getItem("user") !== null ? JSON.parse(localStorage.getItem("user")).email : "",
            name: localStorage.getItem("user") !== null ? JSON.parse(localStorage.getItem("user")).name : "",
            surname: localStorage.getItem("user") !== null ? JSON.parse(localStorage.getItem("user")).surname : "",
            phone: localStorage.getItem("user") !== null ? JSON.parse(localStorage.getItem("user")).phone : "",
            carts: localStorage.getItem("user") !== null ? JSON.parse(localStorage.getItem("user")).carts : [],
            orders: localStorage.getItem("user") !== null ? JSON.parse(localStorage.getItem("user")).orders : [],
            favorites: localStorage.getItem("user") !== null ? JSON.parse(localStorage.getItem("user")).favorites : [],
            home: localStorage.getItem("user") !== null ? JSON.parse(localStorage.getItem("user")).home : "",
            city: localStorage.getItem("user") !== null ? JSON.parse(localStorage.getItem("user")).city : "",
            street: localStorage.getItem("user") !== null ? JSON.parse(localStorage.getItem("user")).street : "",
            point: localStorage.getItem("user") !== null ? JSON.parse(localStorage.getItem("user")).point : "",
        },
    },
    reducers: {
        loginAcc: (state,{payload}) => {
            state.user = payload
        },
        logOutAcc: (state, {payload}) => {
            state.user = {
                id: "",
                email: "",
                name:  "",
                surname: "",
                phone: "",
                carts: [],
                orders:  [],
                favorites:  [],
                home:  "",
                city:  "",
                street:  "",
                point: "",
            }
        },
        addCart: (state,{payload}) => {
            state.user.carts.find(item => item.id === payload.id) ?
                state.user.carts =  state.user.carts.map(item => item.id === payload.id ? {...payload,count:item.count + 1} : item)
                : state.user.carts = [... state.user.carts,{...payload,count:1}]
            localStorage.setItem("user",JSON.stringify({
                ...state.user
            }))
        },
        deleteCard: (state,{payload}) => {
            state.user.carts = state.user.carts.filter(item => item.id !== payload.id);
            localStorage.setItem("user", JSON.stringify({ ...state.user }));
        },
        addCount:(state,{payload}) => {
            state.user.carts = state.user.carts.map(item => item.id === payload.id ? {...payload,count:item.count + 1} : item)

            localStorage.setItem("user", JSON.stringify({ ...state.user }));
        },
        deleteCount:(state,{payload}) => {
            state.user.carts = state.user.carts.map(item => item.id === payload.id ? {...payload,count:item.count !==  1 ? item.count - 1 : 1 } : item)
            localStorage.setItem("user", JSON.stringify({ ...state.user }));
        },
        addFavorites: (state, {payload}) => {
            const existingItem = state.user.favorites.find(item => item.id === payload.id);

            if (existingItem) {
                state.user.favorites = state.user.favorites.filter(item => item.id !== payload.id);
            } else {
                state.user.favorites = [...state.user.favorites, payload];
            }

            localStorage.setItem("user", JSON.stringify({ ...state.user }));
        }
    }
})



export const {loginAcc,logOutAcc, addCart, deleteCard, addCount, deleteCount, addFavorites} = userSlice.actions
export default userSlice.reducer