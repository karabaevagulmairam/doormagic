import {Link, useLocation, useNavigate} from "react-router-dom"
//media
import Logo from "../../../../assets/Logo.svg"
import {BsSearch} from "react-icons/bs"
import {RiUserHeartLine} from "react-icons/ri"
import {BiBookHeart} from "react-icons/bi"
import {LiaOpencart} from   "react-icons/lia"
import {useContext, useEffect, useState} from "react";
import {CustomContext} from "../../../../config/context/context";
import api from "../../../../config/api/api";
import {useGetProductsQuery} from "../../../../redux/api/api.js";


const HeaderCenter = () => {

    const {user, logOutUser} = useContext(CustomContext);

    const location = useLocation();
    // const [result, setResult] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    // const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(search);

    const [isSearchResultsOpen, setIsSearchResultsOpen] = useState(false);


    const {data, isLoading} = useGetProductsQuery({title_like: searchQuery})


    const navigate = useNavigate()

    // useEffect(() => {
    //     const delaySearch = setTimeout(() => {
    //         setDebouncedSearchQuery(searchQuery);
    //     }, 500);
    //
    //     return () => clearTimeout(delaySearch);
    // }, [searchQuery]);

    // useEffect(() => {
    //     if (debouncedSearchQuery) {
    //         setIsLoading(true);
    //         api(`products?title_like=${debouncedSearchQuery}`)
    //             .json()
    //             .then((res) => {
    //                 setSearch(debouncedSearchQuery);
    //                 setResult(res);
    //                 setIsLoading(false);
    //             })
    //             .catch((error) => {
    //                 console.error("Ошибка при выполнении поиска:", error);
    //                 setIsLoading(false);
    //             });
    //     } else {
    //         setResult([]);
    //     }
    // }, [debouncedSearchQuery]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
        setIsSearchResultsOpen(value.length > 0);
    };

    return (
        <nav className="header__center">
            <Link to={'/'}>
                <img src={Logo} width={250} alt=""/>
            </Link>

            <div className="header__center-search">
                <span className="header__center-glass">
                    <BsSearch/>
                </span>
                <input
                    value={searchQuery}
                    type="search"
                    className="header__center-field"
                    placeholder="Поиск"
                    onChange={handleInputChange}
                />
                {isLoading && <div className="loading-indicator">Идет поиск...</div>}
                {isSearchResultsOpen && data.length > 0 && (
                    <ul className="header__center-results">
                        {data.map((item) => (
                            <li key={item.id}>
                                <p onClick={() => {
                                    navigate(`/product/${item.id}`);
                                    setIsSearchResultsOpen(false);
                                    setSearchQuery('')
                                }}>{item.title}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="header__center-icons">
                <Link to={'/favorites'} className="header__center-icon">
                    <BiBookHeart/>
                </Link>
                <Link to={user.email?.length ? '/cart' : '/login'} className="header__center-icon">
                    <LiaOpencart/>
                </Link>
                {
                    location.pathname === '/room' ? <span onClick={logOutUser} className="header__center-log">Выйти</span> : <Link to={user.email?.length ? '/room' : '/login'} className="header__center-icon">
                        <RiUserHeartLine/>
                    </Link>
                }

            </div>
        </nav>
    );
};

export default HeaderCenter;