import React, {Fragment, useContext, useEffect, useState} from 'react';
import {CustomContext} from "../../config/context/context";
import Card from "../../components/Card/Card";
import {Pagination} from "antd"


const Cataloge = () => {
    const {catalog, getCatalog} = useContext(CustomContext);
    const [category, setCategory] = useState('all');
    const [page, setPage] = useState(1);

    useEffect(() => {
        getCatalog()
    }, []);

    console.log(catalog);

    const categories = [...catalog.map((item) => item.category)];

    const uniqueCategories = [...new Set(categories)];

    const showCount = catalog
        .filter(item => category === "all" ? item : item.category === category)
        .filter((item, idx) => idx + 1 <= page * 10 && idx >= page * 10 - 10).length;

    const showCountLength = catalog
        .filter(item => category === "all" ? item : item.category === category).length;


    console.log(category);

    return (
        <div className="catalog">
            <div className="container">

                <ul className='catalog__filter'>
                    <li>
                        <select onChange={(e) => console.log(setCategory(e.target.value))} className="catalog__filter-select">
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
                        catalog.filter(item => category === 'all' ? item : item.category === category)
                            .filter((item, idx) => idx + 1 <= page * 10 && idx >= page * 10 - 10)
                            .map((item, idx) => (
                            <Fragment key={item.id || idx}>
                                <Card item={item}/>
                            </Fragment>
                        ))
                    }
                </div>
                <p className="catalog__row-text">Показано {showCount} из {showCountLength} товаров</p>
                {
                    showCountLength > 10 ?
                        <Pagination
                            simple
                            onChange={setPage}
                            current={page}
                            total={
                                catalog
                                    .filter(item => category === "all" ? item : item.category === category).length
                            }
                            pageSize={10}
                        /> : ''
                }
            </div>
        </div>
    );
};

export default Cataloge;