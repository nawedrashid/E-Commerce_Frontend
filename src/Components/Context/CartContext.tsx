import React, {
  createContext,
  useReducer,
} from "react";
import { UserProviderProps } from "../../Types/PropsList";
import { Products } from "../../Types/Types";

export interface InitialcartContextInterface {
  items: Products[];
  totalAmount: number;
  addItem: (item: Products) => void;
  removeItem: (id: number) => void;
  clearCart: () => null;
}

const InitialCartContext = {
  items: [
    {
      id: 0,
      name: "",
      child: <></>,
      mPrice: 0,
      dPrice: 0,
      rating: 0,
      category: "",
    },
  ],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
} as InitialcartContextInterface;

export const CartContext = createContext(InitialCartContext);

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state:any, action:any) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item:Products) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item:Products) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item:Products) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if(action.type === 'CLEAR') {
    return defaultCartState;
  }

  return defaultCartState;
};

const CartProvider = (props:UserProviderProps) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item:Products) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemfromCartHandler = (id:number) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const clearCartHandler = (id:number) => {
    dispatchCartAction({ type: "CLEAR"});
  };


  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemfromCartHandler,
    clearCart: clearCartHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const cartContext = createContext(InitialCartContext);
