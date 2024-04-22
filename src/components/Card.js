import { CDN_URL } from "../utils/constants";
const Card = (props) => {
    const { name, rating, cuisines, deliverySla, imageId } = props;
    return (
        <div className="card flex flex-col w-60 shadow-[0_0_2px_1px_rgba(0,0,0,0.1)] rounded-xl p-4 h-[450px] m-2 bg-slate-900 text-slate-100">
            <div className="card-img w-[100%] h-[50%]">
                <img
                    src={`${CDN_URL}/${imageId}`}
                    className="rounded-xl w-[100%] h-[100%]"
                ></img>
            </div>
            <div className="card-content h-[50%] mt-3">
                <h4 className="restraunt-title font-bold m-2">{name}</h4>
                <h3 className="restraunt-tags ml-2">{cuisines.join(", ")}</h3>
                <h3 className="restraunt-rating ml-2">{rating}</h3>
                <h3 className="restraunt-eta ml-2">{deliverySla}</h3>
            </div>
        </div>
    );
};

export const openRestaurantCard = (Card) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-[rgba(0,0,0,0.6)] text-slate-100 p-2 rounded-md font-light text-xs shadow-md ml-2">
                    Restaurant Open
                </label>
                <Card {...props} />
            </div>
        );
    };
};

export default Card;
