import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import apiData from "./utils/mockData";

const AppContainer = () => {
    return (
        <div className="app-container">
            <Header />
            <Body data={apiData} />
        </div>
    );
};

// declaring root.
const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering the root with heading.
root.render(<AppContainer />);
