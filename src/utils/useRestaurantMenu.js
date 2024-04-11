import { useEffect, useState } from "react";
import { RESTAURANT_MENU_URL } from "../utils/constants";

const useRestaurantMenu = (restaurantId) => {
    const [restaurantName, setRestaurantName] = useState("");
    const [menuCategories, setMenuCategories] = useState([]);

    const fetchRestaurantMenu = async (restaurantId) => {
        const data = await fetch(`${RESTAURANT_MENU_URL}${restaurantId}`);
        const json = await data.json();
        setRestaurantName(json.data.cards[0].card.card.text);
        setMenuCategories(
            json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards
        );
    };
    useEffect(() => {
        fetchRestaurantMenu(restaurantId);
    }, []);

    return { restaurantName, menuCategories };
};

export default useRestaurantMenu;
