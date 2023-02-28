// Importing React and necessary components from react-router-dom
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing necessary containers and components
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import ProductDetails from "./containers/ProductDetails";

// Importing App.css
import "./App.css";

function App() {
  // Returns the JSX for the App component
  return (
    <div className="App">
      {/* Setting up router and routes */}
      <Router>
        {/* Rendering the Header component */}
        <Header />
        {/* Setting up routes */}
        <Routes>
          {/* Setting up the route for the ProductListing component */}
          <Route path="/" element={<ProductListing />} />
          {/* Setting up the route for the ProductDetails component */}
          <Route path="/product/:productId" element={<ProductDetails />} />
          {/* Setting up the route for the 404 Not Found error */}
          <Route path="*" element={<h1>404 Not Found!!! </h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// This code sets up the main App component for the React application.

// The App component returns JSX that renders the Header and sets up the routes for the ProductListing and ProductDetails components.

// The BrowserRouter component from react-router-dom is used to enable routing for the application.

// The Routes component is used to set up the routes and their corresponding components.

// The Route components are used to define the paths and elements to be rendered for each route.

// Finally, the App component is exported as the default component.
