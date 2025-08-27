import React, { Fragment, useState } from "react";
import styles from "./SearchBar.module.css";
import { fetchRecipes } from "../store/searchSlice";
import { useDispatch } from "react-redux";

function SearchBar() {
  const [item, setitem] = useState("");
 
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
      <div className={styles.container1}>
        <div className={styles.Searchbar}>
            <input
                type="text"
                placeholder="🔍 Search recipes..."
                value={item}
                onChange={(e) => setitem(e.target.value)} 
            />
        </div>
      
      <div className={styles.Searchbutton}>
         <button onClick={handleSearch}>Search</button>
      </div>
    </div>
    </Fragment>
  );
}

export default SearchBar;
