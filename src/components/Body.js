import Card, { generatePromotedCard, openRestaurantCard } from "./Card";
import { useEffect, useState } from "react";
import ShimmerUiCard from "./ShimmerUiCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { openRestaurantCard } from "./Card";

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const isUserOnline = useOnlineStatus();

    // generate promoted restaurant card component.
    const OpenRestaurantCard = openRestaurantCard(Card);

    const filterRestaurants = () => {
        setFilteredRestaurants(
            restaurants.filter((res) => {
                return res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
            })
        );
    };
    const fetchData = async () => {
        const data = await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8504593&lng=75.76277019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        const restaurants = json.data.cards.filter((card) => {
            return card.card.card.id === "restaurant_grid_listing";
        });

        console.log(restaurants[0]);

        setRestaurants(
            restaurants[0].card.card.gridElements.infoWithStyle.restaurants
        );
        setFilteredRestaurants(
            restaurants[0].card.card.gridElements.infoWithStyle.restaurants
        );
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (!isUserOnline)
        return (
            <h1>
                Looks like you are offline! Please check your internet
                connection.
            </h1>
        );

    return (
        <>
            <div className="filter-container flex py-4">
                <div className="search-bar">
                    <input
                        type="text"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="m-2 p-2 border-2 rounded-md border-gray-400"
                    ></input>
                </div>
                <button
                    className="btn my-2 px-4 rounded-md shadow-[0_0_2px_1px_rgba(0,0,0,0.1)] hover:bg-slate-900 hover:text-gray-100"
                    onClick={filterRestaurants}
                >
                    Search
                </button>
            </div>
            {filteredRestaurants?.length > 0 ? (
                <div className="main-body flex flex-wrap">
                    {filteredRestaurants.map((restaurant) => {
                        const {
                            name,
                            avgRating,
                            cuisines,
                            sla,
                            cloudinaryImageId,
                            id,
                        } = restaurant.info;
                        return (
                            <Link to={`/restaurants/${id}`} key={id}>
                                {restaurant.info.isOpen ? (
                                    <OpenRestaurantCard
                                        key={id}
                                        name={name}
                                        rating={avgRating}
                                        cuisines={cuisines}
                                        deliverySla={sla.slaString}
                                        imageId={cloudinaryImageId}
                                    />
                                ) : (
                                    <Card
                                        key={id}
                                        name={name}
                                        rating={avgRating}
                                        cuisines={cuisines}
                                        deliverySla={sla.slaString}
                                        imageId={cloudinaryImageId}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>
            ) : (
                <ShimmerUiCard />
            )}
        </>
    );
};

export default Body;
