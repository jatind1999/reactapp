import React, { useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Grocery = lazy(() => import("./components/Grocery"));

const AppContainer = () => {
    return (
        <div className="app-container text-gray-950">
            <Header />
            <Outlet />
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppContainer />,
        children: [
            {
                path: "",
                element: <Body />,
            },

            {
                path: "about",
                element: <About />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "restaurants/:restaurantId",
                element: <RestaurantMenu />,
            },

            {
                path: "grocery",
                element: (
                    <Suspense fallback={<h1>Loading Grocery page.....</h1>}>
                        <Grocery />
                    </Suspense>
                ),
            },
        ],
        errorElement: <Error />,
    },
]);

// declaring root.
const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering the root with heading.
root.render(<RouterProvider router={router} />);
