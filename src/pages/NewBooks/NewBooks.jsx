import React, {Fragment} from 'react';
import Card from "../../components/Card/Card";
import {Pagination} from "antd";
import {useDispatch, useSelector} from "react-redux";

const NewBooks = () => {

    const dispatch = useDispatch();

    const {data, isLoading} = useSelector(store => store.books);

    return (
        <div className="newBooks">
            <div className="container">
                <div className="catalog__row">
                    {
                        data.filter((item) => item.year === '2023').filter((itm, idx) => idx <= 12).map((item, idx)=>(
                            <Fragment key={item.id || idx}>
                                <Card item={item}/>
                            </Fragment>
                        ))
                    }
                </div>
                {/*<p className="catalog__row-text">Показано {showCount} из {showCountLength} товаров</p>*/}
                {/*<Pagination*/}
                {/*    simple*/}
                {/*    onChange={setPage}*/}
                {/*    current={page}*/}
                {/*    total={showCountLength}*/}
                {/*    pageSize={10}*/}
                {/*/>*/}
            </div>
        </div>

    );
};

export default NewBooks;