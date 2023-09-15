import {Link, useLocation} from 'react-router-dom'

const ACard = ({item}) => {

    const location = useLocation();

    const ratingCount = item?.ratingView?.length;
    const ratingPoints = item?.ratingView?.reduce((acc, rec) => (acc += rec.point), 0)

    console.log(ratingCount)
    console.log(ratingPoints)

    const ratingTotal = ratingPoints / ratingCount

    return (
        <div className="authors__aCard">
            <Link to={`/author/${item.id}`}>
                <img src={location.pathname === '/' ? item.image : `${item.image}`} alt="" className="authors__aCard-img"/>
            </Link>

            <div className="authors__aCard-info">
                <h3 className="authors__aCard-title">{item.name}</h3>
                <p className="authors__aCard-book">{Math.round(ratingTotal)} книг</p>
            </div>
        </div>
    );
};

export default ACard;