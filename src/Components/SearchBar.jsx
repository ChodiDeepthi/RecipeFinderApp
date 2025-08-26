import React, { Fragment, useState } from "react";
import styles from "./SearchBar.module.css";
import { fetchRecipes } from "../store/searchSlice";
import { useDispatch } from "react-redux";

function SearchBar() {
  const [item, setitem] = useState("pizza");
 
  const dispatch = useDispatch();
 
  const handleSearch = () => {
     
    if (item.trim() !== "") {
        console.log(item)
      dispatch(fetchRecipes(item)); // latest value

    }
  };
   console.log()
  return (
    <Fragment>
      <input
        type="text"
        placeholder="🔍 Search recipes..."
        className={styles.search}
        value={item}
        onChange={(e) => setitem(e.target.value)} // update only state
      />
      
      <button onClick={handleSearch}>Search</button>
    </Fragment>
  );
}

export default SearchBar;
