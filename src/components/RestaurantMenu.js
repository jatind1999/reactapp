import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
    const { restaurantId } = useParams();
    const { restaurantName, menuCategories } = useRestaurantMenu(restaurantId);

    return menuCategories.length > 0 ? (
        <>
            <h1 style={{ textAlign: "center" }}>{restaurantName}</h1>
            <div className="menu-container">
                {menuCategories.map((category, index) => {
                    if (
                        category.card.card.title !== undefined &&
                        category.card.card.itemCards !== undefined
                    ) {
                        const categoryItems = category.card.card.itemCards;
                        return (
                            <div className="category-box" key={index}>
                                <h3 className="category-title">
                                    {category.card.card.title}
                                </h3>
                                <div className="category-items">
                                    <ul>
                                        {categoryItems.map((item) => {
                                            return (
                                                <li
                                                    className="item"
                                                    key={item.card.info.id}
                                                >
                                                    {item.card.info.name} - Rs.{" "}
                                                    {item.card.info.price / 100}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
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
