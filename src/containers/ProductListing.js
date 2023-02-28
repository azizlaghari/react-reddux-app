import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productAction";

const ProductPage = () => {
  // Get products from the Redux store
  const products = useSelector((state) => state.allProducts.products);
  // Dispatch function from Redux
  const dispatch = useDispatch();

  // Fetch products from API and dispatch to Redux store
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  // Call fetchProducts on page load
  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);

    // Render the ProductComponent and pass the products to it as props
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductPage;
