import { CDN_URL } from "../utils/constants";
const RestaurantCategoryItems = (props) => {
    const { categoryItems } = props;
    return (
        <div className="category-items">
            <ul>
                {categoryItems.map((item) => {
                    return (
                        <li className="item" key={item.card.info.id}>
                            <div className="flex mb-6 border-b-[1px] border-slate-200 p-4">
                                <div className="flex flex-col w-9/12">
                                    <h3>{item.card.info.name}</h3>
                                    <span>
                                        Price:{" Rs - "}
                                        {item.card.info.price
                                            ? item.card.info.price / 100
                                            : item.card.info.defaultPrice / 100}
                                    </span>
                                </div>
                                <div className="flex w-3/12 relative">
                                    <img
                                        src={`${CDN_URL}/${item.card.info.imageId}`}
                                        className="rounded-lg mb-2"
                                    ></img>
                                    <button className=" absolute px-6 py-4 rounded-lg shadow-xl bg-[rgba(0,0,0,0.7)] text-white translate-x-[75%] translate-y-[150%] hover:bg-[rgba(0,0,0,0.9)]">
                                        Add +
                                    </button>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
export default RestaurantCategoryItems;
