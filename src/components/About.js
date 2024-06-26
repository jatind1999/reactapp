import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        console.log("Parent Constructor.");
    }

    componentDidMount() {
        console.log("Parent ComponentDidMount");
    }

    componentDidUpdate() {
        console.log("Parent Component Updated.");
    }

    componentWillUnmount() {
        console.log("Parent Component Unmounted.");
    }

    render() {
        console.log("Parent Render.");
        return (
            <>
                <span>Count: {this.state.count}</span>
                <button
                    onClick={() =>
                        this.setState({ count: this.state.count + 1 })
                    }
                >
                    Increase Parent Count
                </button>
                <UserClass name="first" />
                <UserClass name="second" />
            </>
        );
    }
}

export default About;
