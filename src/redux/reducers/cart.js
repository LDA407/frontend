import {
  GET_ITEMS,
  ADD_ITEM,
  GET_TOTAL,
  GET_TOTAL_ITEMS,
  UPDATE_ITEM,
  REMOVE_ITEM,
  EMPTY_CART,
  SYNCH_CART,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAIL,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAIL,
  GET_TOTAL_SUCCESS,
  GET_TOTAL_FAIL,
  GET_TOTAL_ITEMS_SUCCESS,
  GET_TOTAL_ITEMS_FAIL,
  UPDATE_ITEM_SUCCESS,
  UPDATE_ITEM_FAIL,
  REMOVE_ITEM_SUCCESS,
  REMOVE_ITEM_FAIL,
  EMPTY_CART_SUCCESS,
  EMPTY_CART_FAIL,
  SYNCH_CART_SUCCESS,
  SYNCH_CART_FAIL,
} from "../actions/types";

const initialState = {
  items: null,
  amount: 0.0,
  amount_with_discount: 0.0,
  total_items: 0,
};

// reductor
export default function Cart(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        items: payload.cart,
      };
    case ADD_ITEM_FAIL:
      return {
        ...state,
        items: null,
      };
    case ADD_ITEM:
      localStorage.setItem("cart", JSON.stringify(payload))
      return {
        ...state,
        items: JSON.parse(localStorage.getItem("cart")),
      };
    case GET_ITEMS_SUCCESS:
      console.log('payload get items');
      console.log(payload);
      return {
        ...state,
        items: payload,
      };
    case GET_ITEMS_FAIL:
      return {
        ...state,
        items: null,
      };
    case GET_ITEMS:
      return {
        ...state,
        items: JSON.parse(localStorage.getItem("cart")),
      };
    case GET_TOTAL_SUCCESS:
      return {
        ...state,
        amount: payload.costo_total,
        amount_with_discount: payload.total_con_descuento,
      };
    case GET_TOTAL_FAIL:
      return {
        ...state,
        amount: 0.0,
        amount_with_discount: 0.0,
      };
    case GET_TOTAL:
      return {
        ...state,
        amount: payload[0],
        amount_with_discount: payload[1],
      };
    case GET_TOTAL_ITEMS_SUCCESS:
      return {
        ...state,
        total_items: payload.total_items,
      };
    case GET_TOTAL_ITEMS_FAIL:
      return {
        ...state,
        total_items: 0,
      };
    case GET_TOTAL_ITEMS:
      return {
        ...state,
        total_items: payload,
      };
    case UPDATE_ITEM_SUCCESS:
      return {
        ...state,
        items: payload.cart,
      };
    case UPDATE_ITEM_FAIL:
      return {
        ...state,
      };
    case UPDATE_ITEM:
      localStorage.setItem("cart", JSON.stringify(payload));
      return {
        ...state,
        items: JSON.parse(localStorage.getItem("cart")),
      };
    case REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        items: payload.cart,
      };
    case REMOVE_ITEM_FAIL:
      return {
        ...state,
      };
    case REMOVE_ITEM:
      localStorage.setItem("cart", JSON.stringify(payload));
      return {
        ...state,
        items: JSON.parse(localStorage.getItem("cart")),
      };
    case EMPTY_CART_SUCCESS:
    case EMPTY_CART_FAIL:
      return {
        ...state,
        items: null,
        amount: 0.0,
        amount_with_discount: 0.0,
        total_items: 0,
      };
    case EMPTY_CART:
	    localStorage.getItem("cart");
      return {
        ...state,
        items: null,
        amount: 0.0,
        amount_with_discount: 0.0,
        total_items: 0,
      };
    case SYNCH_CART_SUCCESS:
    case SYNCH_CART_FAIL:
      localStorage.getItem("cart");
      return {
        ...state
      }
      default:
        return state;
  }
}
