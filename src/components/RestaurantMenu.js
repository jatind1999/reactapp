import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuCategory from "./RestaurantMenuCategory";
const RestaurantMenu = () => {
    const { restaurantId } = useParams();
    const { restaurantName, menuCategories } = useRestaurantMenu(restaurantId);

    return menuCategories.length > 0 ? (
        <>
            <h1 className="text-center text-2xl mt-2 mb-4 font-bold">
                {restaurantName}
            </h1>
            <div className="menu-container w-[70%] m-auto border-2 p-4 rounded-md shadow-2xl border-none">
                {menuCategories.map((category, index) => {
                    if (
                        category.card.card.title !== undefined &&
                        category.card.card.itemCards !== undefined
                    ) {
                        return (
                            <RestaurantMenuCategory
                                category={category}
                                key={index}
                            />
                        );
                    }
                })}
            </div>
        </>
    ) : (
        <h1>Loading....</h1>
    );
};

export default RestaurantMenu;
