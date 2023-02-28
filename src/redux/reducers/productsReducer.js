import { Action } from "@remix-run/router";
import { ActionTypes } from "../contants/action-types";

// Defining the initial state for the products
const intialState = {
  products: [],
};

// Defining a reducer function for the products
export const productsReducer = (state = intialState, action) => {
  // Extracting type and payload from the action
  const { type, payload } = action;

  // Switch case to handle different types of actions
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

// Defining a reducer function for the selected products
export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);

  // Switch case to handle different types of actions
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

// This code defines two reducer functions for the Redux store.

// The productsReducer function is used to update the state of the products in the Redux store. The initial state of products is an empty array. The reducer function handles the SET_PRODUCTS action type by returning a new state with the updated list of products.

// The selectedProductsReducer function is used to update the state of the selected product in the Redux store. The initial state is an empty object. The reducer function handles the SELECTED_PRODUCT and REMOVE_SELECTED_PRODUCT action types by returning the updated state with the selected product or an empty object respectively. The console.log statement logs the type of action being dispatched.


