import { ActionTypes } from "../contants/action-types";

// This function sets the products in the Redux store by returning an object with type and payload properties.
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

// This function selects a product and stores it in the Redux store by returning an object with type and payload properties.
export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

// This function removes the selected product from the Redux store by returning an object with only the type property.
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
}; 

// This code defines three actions creators that are used to create actions to update the Redux store.

// The setProducts function takes in an array of products and returns an action with a type of SET_PRODUCTS and a payload of products.

// The selectedProduct function takes in a single product and returns an action with a type of SELECTED_PRODUCT and a payload of the selected product.

// The removeSelectedProduct function takes no arguments and returns an action with a type of REMOVE_SELECTED_PRODUCT. This action is used to remove the currently selected product from the Redux store.
