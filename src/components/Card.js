import { CDN_URL } from "../utils/constants";
const Card = (props) => {
    const { name, rating, cuisines, deliverySla, imageId } = props;
    return (
        <div className="card">
            <div className="card-img">
                <img src={`${CDN_URL}/${imageId}`}></img>
            </div>
            <div className="card-content">
                <h4 className="restraunt-title">{name}</h4>
                <h3 className="restraunt-tags">{cuisines.join(", ")}</h3>
                <h3 className="restraunt-rating">{rating}</h3>
                <h3 className="restraunt-eta">{deliverySla}</h3>
            </div>
        </div>
    );
};

export default Card;
