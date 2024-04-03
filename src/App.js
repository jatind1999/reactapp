import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppContainer = () => {
  return (
    <div className="app-container">
      <Header />
      <Body />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppContainer />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

// declaring root.
const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering the root with heading.
root.render(<RouterProvider router={router} />);
