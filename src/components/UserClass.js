import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        console.log(`${this.props.name} Child Constructor.`);
    }

    componentDidMount() {
        console.log(`${this.props.name} Child ComponentDidMount`);
    }

    componentDidUpdate() {
        console.log(`${this.props.name} Child Component Updated.`);
    }

    componentWillUnmount() {
        console.log(`${this.props.name} Child Component Unmounted.`);
    }

    render() {
        const { name, contact, location } = this.props;
        console.log(`${this.props.name} Child Render.`);
        return (
            <div className="user-card">
                <h1 className="user-name">{name} (User Class)</h1>
                <h4 className="user-contact">{contact} </h4>
                <h4 className="useer-location">{location}</h4>
                <span>Count: {this.state.count}</span>
                <button
                    onClick={() =>
                        this.setState({ count: this.state.count + 1 })
                    }
                >
                    Increase Child Count {name}
                </button>
            </div>
        );
    }
}

export default UserClass;
