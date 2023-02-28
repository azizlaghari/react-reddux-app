// Import necessary dependencies
import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productAction";

const ProductDetails = () => {
  // Extract the productId from the URL using useParams hook
  const { productId } = useParams();

  // Get the product data from the Redux store using useSelector hook
  let product = useSelector((state) => state.product);

  // Destructure the product data
  const { image, title, price, category, description } = product;

  // Get the dispatch function using useDispatch hook
  const dispatch = useDispatch();

  // Function to fetch the product details from the API
  const fetchProductDetail = async (id) => {
    // Send a GET request to the API to get the product details
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    // Dispatch an action to update the product data in the Redux store
    dispatch(selectedProduct(response.data));
  };

  // useEffect hook to fetch the product details when the component mounts
  useEffect(() => {
    // Call the fetchProductDetail function only if the productId exists
    if (productId && productId !== "") fetchProductDetail(productId);
    // Function to clean up when the component unmounts
    return () => {
      // Dispatch an action to remove the selected product from the Redux store
      dispatch(removeSelectedProduct());
    };
  }, [productId]); // Run this effect only when the productId changes

  // Render the product details
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        // Show a loading message if the product data is not yet available
        <div>...Loading</div>
      ) : (
        // Render the product details if the data is available
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Export the component as default
export default ProductDetails;
