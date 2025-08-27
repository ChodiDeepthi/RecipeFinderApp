import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomRecipes } from "../store/searchSlice";
import ContentHeading from "./ContentHeading";
import styles from "./Content.module.css";
import Items from "./Items";

function Content() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.recipes);

  useEffect(() => {
    // Fetch only if items are empty (first load)
    if (items.length === 0) {
      dispatch(fetchRandomRecipes());
    }
  }, [dispatch, items.length]);

  return (
    <Fragment>
      <div className={styles.body}>
        <ContentHeading />
      </div>
      <Items />
    </Fragment>
  );
}

export default Content;
