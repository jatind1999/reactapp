import { useState } from "react";

const User = (props) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);
    const { name, location, contact } = props;
    return (
        <div className="user-card">
            <h1 className="user-name">{name}</h1>
            <h4 className="user-contact">{contact}</h4>
            <h4 className="useer-location">{location}</h4>
            <span>{`Count1: ${count}`}</span>
            <span>{`Count2: ${count2}`}</span>
        </div>
    );
};

export default User;
