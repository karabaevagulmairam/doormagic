import {createContext, useEffect, useState} from "react";
import api from "../api/api";
import {useNavigate} from "react-router-dom"

export const CustomContext = createContext();

export const Context = (props) => {

    const [user, setUser] = useState({email: ''});

    const [favorites, setFavorites] = useState([]);

    const [hit, setHit] =useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('user') !== null) {
            setUser(JSON.parse(localStorage.getItem('user')))
        }
    }, []);

    const registerUser = (user) => {
        api.post('register', {
            headers: {
                'content-type': 'application/json'
            },
            json: {
                ...user,
                point: 0,
                orders: [],
                carts: [],
                city: '',
                home: '',
                street: ''
            }
        }).json().then((res) => {
            setUser(res.user);
            navigate('/');
            localStorage.setItem('user', JSON.stringify(res.user))
        })
    };

    const loginUser = (user) => {
        api.post('login', {
            headers: {
                'content-type': 'application/json'
            },
            json: {
                ...user
            }
        }).json().then((res) => {
            setUser(res.user);
            navigate('/');
            localStorage.setItem('user', JSON.stringify(res.user))
        })
    };

    const logOutUser = () => {
        setUser({email: ''});
        localStorage.removeItem('user');
        navigate('/')
    };

    const getHit = () =>{
        api('products?_sort=rating&_order=desc&_limit=12').json()
            .then((res)=>setHit(res))
    };

    const addCarts = (product) => {
        api.patch(`users/${user.id}`, {
            headers: {
                'content-type': 'application/json'
            },
            json: {
                carts: [...user.carts, {...product, count: 1}]
            }
        }).json().then((res) => {
            setUser(res);
            localStorage.setItem('user', JSON.stringify(res))
        })
    };


    let value = {
        user, setUser, registerUser, loginUser, logOutUser, getHit, hit, addCarts
    };

    return <CustomContext.Provider value={value}>
        {
            props.children
        }
    </CustomContext.Provider>
};



