import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import instance from "../../config/api/api.js"


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
        addCart: (state,{payload}) => {
            state.user.cart.find(item => item.id === payload.id) ?
                state.user.cart =  state.user.cart.map(item => item.id === payload.id ? {...payload,count:item.count + 1} : item)
                : state.user.cart = [... state.user.cart,{...payload,count:1}]
            localStorage.setItem("cart",JSON.stringify({
                ...state.user.cart
            }))
        },
        deleteCard: (state,{payload}) => {
            state.user.cart = state.user.cart.filter(item => item.id !== payload.id)
        },
        addCount:(state,{payload}) => {
            state.user.cart = state.user.cart.map(item => item.id === payload.id ? {...payload,count:item.count + 1} : item)
        },
        deleteCount:(state,{payload}) => {

            state.user.cart = state.user.cart.map(item => item.id === payload.id ? {...payload,count:item.count !==  1 ? item.count - 1 : 1 } : item)
        }
    }
})


export default userSlice.reducer