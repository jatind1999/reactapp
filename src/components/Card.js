import { CDN_URL } from "../utils/constants";
const Card = (props) => {
    const { name, rating, cuisines, deliverySla, imageId } = props;
    return (
        <div className="card flex flex-col w-60 shadow-[0_0_2px_1px_rgba(0,0,0,0.1)] rounded-xl p-4 h-[450px] m-2 bg-slate-900 text-slate-100">
            <div className="card-img w-[100%] h-96">
                <img
                    src={`${CDN_URL}/${imageId}`}
                    className="rounded-xl w-[100%] h-[50%]"
                ></img>
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
