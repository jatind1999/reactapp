import Card from "./Card";

const Body = (props) => {
    const restrauntsData = props.data.gridElements.infoWithStyle.restaurants;
    return (
        <div className="main-body">
            {restrauntsData.map((restraunt) => {
                const {
                    name,
                    avgRating,
                    cuisines,
                    sla,
                    cloudinaryImageId,
                    id,
                } = restraunt.info;
                return (
                    <Card
                        key={id}
                        name={name}
                        rating={avgRating}
                        cuisines={cuisines}
                        deliverySla={sla.slaString}
                        imageId={cloudinaryImageId}
                    />
                );
            })}
        </div>
    );
};

export default Body;
