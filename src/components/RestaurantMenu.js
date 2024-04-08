import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
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

  return menuCategories.length > 0 ? (
    <>
      <h1 style={{ textAlign: "center" }}>{restaurantName}</h1>
      <div className="menu-container">
        {menuCategories.map((category) => {
          if (category.card.card.title !== undefined) {
            const categoryItems = category.card.card.itemCards;
            return (
              <div className="category-box">
                <h3 className="category-title">{category.card.card.title}</h3>
                <div className="category-items">
                  <ul>
                    {categoryItems.map((item) => {
                      return (
                        <li className="item">
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
