import React, {Fragment, useContext, useEffect, useState} from 'react';
import {CustomContext} from "../../config/context/context";
import Card from "../../components/Card/Card";
import {Pagination} from "antd"
import {useGetProductsQuery} from "../../redux/api/api.js";
import {useDispatch, useSelector} from "react-redux";
import {getAllBooks} from "../../redux/reducers/books.js";


const Cataloge = () => {


    // const {catalog, getCatalog} = useContext(CustomContext);

    const dispatch = useDispatch()
    const [category, setCategory] = useState('all');
    const [page, setPage] = useState(1);

    const { data } = useSelector(store => store.books);

    useEffect(() => {
       dispatch(getAllBooks())
    }, []);


    const categories = [...data.map((item) => item.category)];

    const uniqueCategories = [...new Set(categories)];

    const showCount = data
        .filter(item => category === "all" ? item : item.category === category)
        .filter((item, idx) => idx + 1 <= page * 10 && idx >= page * 10 - 10).length;

    const showCountLength = data
        .filter(item => category === "all" ? item : item.category === category).length;


    return (
        <div className="catalog">
            <div className="container">

                <ul className='catalog__filter'>
                    <li>
                        <select onChange={(e) => setCategory(e.target.value)} className="catalog__filter-select">
                            <option value="all" selected>{category === 'all' ? "Все" : "По умолчанию"}</option>
                            {
                                uniqueCategories.map((item, idx) => (
                                    <option value={item} key={idx}>{item}</option>
                                ))
                            }
                        </select>
                    </li>
                </ul>

                <div className="catalog__row">
                    {
                        data.filter(item => category === 'all' ? item : item.category === category)
                            .filter((item, idx) => idx + 1 <= page * 10 && idx >= page * 10 - 10)
                            .map((item, idx) => (
                            <Fragment key={item.id || idx}>
                                <Card item={item}/>
                            </Fragment>
                        ))
                    }
                </div>
                <p className="catalog__row-text">Показано {showCount} из {showCountLength} товаров</p>
                <Pagination
                    simple
                    onChange={setPage}
                    current={page}
                    total={showCountLength}
                    pageSize={10}
                />
            </div>
        </div>
    );
};

export default Cataloge;