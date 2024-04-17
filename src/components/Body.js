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
            {filteredRestaurants.length > 0 ? (
                <div className="main-body flex flex-wrap">
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
