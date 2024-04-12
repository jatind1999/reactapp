import Card from "./Card";
import { useEffect, useState } from "react";
import ShimmerUiCard from "./ShimmerUiCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = (props) => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const isUserOnline = useOnlineStatus();
    console.log(isUserOnline);

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
        setRestaurants(
            json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
        );
        setFilteredRestaurants(
            json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
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
            <div className="filter-container">
                <div className="search-bar">
                    <input
                        type="text"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    ></input>
                </div>
                <button className="btn" onClick={filterRestaurants}>
                    Search
                </button>
            </div>
            {filteredRestaurants.length > 0 ? (
                <div className="main-body">
                    {filteredRestaurants.map((restraunt) => {
                        const {
                            name,
                            avgRating,
                            cuisines,
                            sla,
                            cloudinaryImageId,
                            id,
                        } = restraunt.info;
                        return (
                            <Link to={`/restaurants/${id}`} key={id}>
                                <Card
                                    key={id}
                                    name={name}
                                    rating={avgRating}
                                    cuisines={cuisines}
                                    deliverySla={sla.slaString}
                                    imageId={cloudinaryImageId}
                                />
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
