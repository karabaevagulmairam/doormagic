import {Link, useLocation, useNavigate} from "react-router-dom"
//media
import Logo from "../../../../assets/Logo.svg"
import {BsSearch} from "react-icons/bs"
import {RiUserHeartLine} from "react-icons/ri"
import {BiBookHeart} from "react-icons/bi"
import {LiaOpencart} from   "react-icons/lia"
import {useState, useEffect} from "react";
import {useGetProductsQuery} from "../../../../redux/api/api.js";
import {useDispatch, useSelector} from "react-redux";
import {logOutAcc} from "../../../../redux/reducers/user.js";


const HeaderCenter = () => {

    const { user } = useSelector((store) => store.user);
    const location = useLocation();
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearchResultsOpen, setIsSearchResultsOpen] = useState(false);
    const [debouncedQuery, setDebouncedQuery] = useState("");
    const { data, isLoading } = useGetProductsQuery({ title_like: debouncedQuery });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const debounceTimeout = setTimeout(() => {
            setDebouncedQuery(searchQuery);
        }, 300); // Adjust the debounce delay as needed (e.g., 300 milliseconds).

        return () => {
            clearTimeout(debounceTimeout);
        };
    }, [searchQuery]);

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
                    location.pathname === '/room' ? <span onClick={() => {
                        dispatch(logOutAcc())
                        localStorage.removeItem('user')
                    }} className="header__center-log">Выйти</span> : <Link to={user.email?.length ? '/room' : '/login'} className="header__center-icon">
                        <RiUserHeartLine/>
                    </Link>
                }

            </div>
        </nav>
    );
};

export default HeaderCenter;