import {createContext, useEffect, useState} from "react";
import api from "../api/api";
import {useNavigate} from "react-router-dom"

export const CustomContext = createContext();

export const Context = (props) => {

    const [user, setUser] = useState({email: ''});
    const [favorites, setFavorites] = useState([]);
    const [hit, setHit] =useState([]);
    const [catalog, setCatalog] =useState([]);
    const [authorCatalog, setAuthorCatalog] =useState([]);
    const [search, setSearch] = useState('');
    const [authorSlide, setAuthorSlide] =useState([]);
    const [author, setAuthor] =useState([]);
    const [isLoading, setIsLoading] = useState('true');
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('user') !== null) {
            setUser(JSON.parse(localStorage.getItem('user')))
        }

        if (localStorage.getItem('favorites') !== null) {
            setFavorites(JSON.parse(localStorage.getItem('favorites')))
        }
    }, []);


    //start userContent

    const logOutUser = () => {
        setUser({email: ''});
        localStorage.removeItem('user');
        navigate('/')
    };

    //end userContent

    //start hit

    const getHit = () =>{
        api('products?_sort=rating&_order=desc&_limit=12').json()
            .then((res)=> {
                setHit(res);
                setIsLoading(false)
            })
    };


    //end hit

    //start favorites

    const favoritesHandler = (product) => {
        let findProduct = favorites.some(item => item.id === product.id);

        if (findProduct) {
            setFavorites(prev => prev.filter(item => item.id !== product.id))
        } else {
            setFavorites(prev => [...prev, product])
        }
    };

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites]);


    const getAuthorSlide = () =>{ api('authors').json().then((res)=>setAuthorSlide(res))};

    const getCatalog = () =>{ api(`products`).json().then((res)=> setCatalog(res))};
    const getAuthorCatalog = (author) =>{ api(`products?author=${author}`).json().then((res)=>setAuthorCatalog(res))};

    //end favorites
    const getAuthor = () =>{ api('authors').json().then((res)=>setAuthor(res))};

    //start countCarts

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

    const addCartsCountPlus = (id) => {
        api.patch(`users/${user.id}`, {
            headers: {
                'content-type': 'application/json'
            },
            json: {
                carts: user.carts.map(item => {
                    if (item.id === id) {
                        return {...item, count: item.count + 1}
                    }
                    return item
                })
            }
        }).json().then((res) => {
            setUser(res);
            localStorage.setItem('user', JSON.stringify(res))
        })
    };

    const removeCartsCountMinus = (id) => {
        api.patch(`users/${user.id}`, {
            headers: {
                'content-type': 'application/json'
            },
            json: {
                carts: user.carts.find(item => item.id === id).count > 1 ? user.carts.map(item => {
                    if (item.id === id) {
                        return {...item, count: item.count - 1}
                    }
                    return item
                }) : user.carts.filter((item) => item.id !== id)
            }
        }).json().then((res) => {
            setUser(res);
            localStorage.setItem('user', JSON.stringify(res))
        })
    };

    const addOrder = (order,setPopup, redirect) => {
        api.patch(`users/${user.id}`, {
            headers: {
                'content-type': 'application/json'
            },
            json: {
                orders: [...user.orders, order],
                carts: []
            }
        }).json().then((res) => {
            setUser(res);
            localStorage.setItem('user', JSON.stringify(res));
            setPopup(true);
            redirect()
        })
    };

    //end countCarts

    //author functions

    const getOneAuthor = (id) => {
        api(`authors/${id}`).json()
            .then((res) => setAuthor(res))
    }




    let value = {
        user, setUser, logOutUser, getHit, hit, addCarts,
        addCartsCountPlus, removeCartsCountMinus, favoritesHandler, favorites,
        search, setSearch , getCatalog ,catalog , getAuthorSlide , authorSlide, author, getAuthor, addOrder,

        setIsLoading, isLoading, getOneAuthor, setAuthorCatalog, authorCatalog, getAuthorCatalog

    };

    return <CustomContext.Provider value={value}>
        {
            props.children
        }
    </CustomContext.Provider>
};



