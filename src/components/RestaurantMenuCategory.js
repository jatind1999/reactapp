import RestaurantCategoryItems from "./RestaurantCategoryItems";
import { useState } from "react";

const RestaurantMenuCategory = (props) => {
    const { category } = props;
    const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        setShowItems(!showItems);
    };

    const categoryItems = category.card.card.itemCards;
    return (
        <div
            className="category-box border-[1px] rounded-md shadow-sm border-slate-200 p-2 m-2 cursor-pointer"
            onClick={handleClick}
        >
            <div className="flex justify-between ">
                <h3 className="category-title font-bold">
                    {category.card.card.title}
                </h3>
                <span>{showItems ? "⬇️" : "⬆️"}</span>
            </div>
            {showItems && (
                <RestaurantCategoryItems categoryItems={categoryItems} />
            )}
        </div>
    );
};

export default RestaurantMenuCategory;
