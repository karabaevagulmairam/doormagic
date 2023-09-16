import React, {Fragment, useEffect, useState} from 'react';
import Card from "../../components/Card/Card";
import {useDispatch, useSelector} from "react-redux";
import {getAllBooks} from "../../redux/reducers/books";
import {Pagination} from "antd";
import CardSkeleton from "../../components/CardSkeleton/CardSkeleton";

const NewBooks = () => {

    const dispatch = useDispatch();
    const {data, isLoading} = useSelector(store => store.books);
    const [page, setPage] = useState(1);

    console.log(data.filter((item) => item.year === '2023').filter((itm, idx) => idx <= 12))

    useEffect(() => {
        dispatch(getAllBooks())
    }, []);


    const showCount = data
        .filter(item => '2023' === "all" ? item : item.year === '2023')
        .filter((item, idx) => idx + 1 <= page * 10 && idx >= page * 10 - 10).length;

    const showCountLength = data
        .filter(item => '2023' === "all" ? item : item.year === '2023').length;

    return (
        <div className="newBooks">
            <div className="container">

                <div className="catalog__row">
                    {
                        isLoading ? <CardSkeleton cards={12}/> :
                            data.filter((item) => item.year === '2023').filter((itm, idx) => idx <= 12).map((item, idx)=>(
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

export default NewBooks;