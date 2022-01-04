import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

// uses reducer switch statement from reducer to use actions to check and update state to update the page without refresh
const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: ''
  });
  
  // log to display state data
  console.log(state);
  return <Provider value={[state, dispatch]} {...props} />;
};



const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };