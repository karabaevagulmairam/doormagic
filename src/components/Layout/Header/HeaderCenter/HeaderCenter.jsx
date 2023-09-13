import {Link, useLocation} from "react-router-dom"
//media
import Logo from "../../../../assets/Logo.svg"
import {BsSearch} from "react-icons/bs"
import {RiUserHeartLine} from "react-icons/ri"
import {BiBookHeart} from "react-icons/bi"
import {LiaOpencart} from   "react-icons/lia"
import {useContext, useEffect, useState} from "react";
import {CustomContext} from "../../../../config/context/context";
import api from "../../../../config/api/api";


const HeaderCenter = () => {

    const {user, logOutUser, search, setSearch} = useContext(CustomContext);

    const location = useLocation();
    const [result, setResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState(search);
    const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(search);

    useEffect(() => {
        const delaySearch = setTimeout(() => {
            setDebouncedSearchQuery(searchQuery);
        }, 500);

        return () => clearTimeout(delaySearch);
    }, [searchQuery]);

    useEffect(() => {
        if (debouncedSearchQuery) {
            setIsLoading(true);
            api(`products?title_like=${debouncedSearchQuery}`)
                .json()
                .then((res) => {
                    setSearch(debouncedSearchQuery);
                    setResult(res);
                    setIsLoading(false);
                })
                .catch((error) => {
                    console.error("Ошибка при выполнении поиска:", error);
                    setIsLoading(false);
                });
        } else {
            setResult([]);
        }
    }, [debouncedSearchQuery]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
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
                {result.length > 0 && (

                        <ul className="header__center-results">
                            {result.map((item) => (
                                <li key={item.id}>
                                    <Link to={`/product/${item.id}`}>{item.title}</Link>
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