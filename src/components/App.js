import React, { useReducer } from "react";
import AppContext from "../contexts/search";
import Products from "./Products";
import SearchBar from './SearchBar'
import searchReducer from '../reducers'


function App() {
  const [state, dispatch] = useReducer(searchReducer, { searchTerm: "" });

  return (
    <div className="container">
      <AppContext.Provider value={{state, dispatch}}>
        <SearchBar  />
        <Products />
      </AppContext.Provider>
    </div>
  );
}

export default App;
