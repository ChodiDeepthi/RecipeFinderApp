import { Fragment ,useEffect} from "react";
import { useDispatch } from "react-redux";
import { fetchRandomRecipes } from "../store/searchSlice"
import ContentHeading from "./ContentHeading"
import styles from "./Content.module.css";
import Items from "./Items";
function Content(){
    const dispatch = useDispatch(); 
    useEffect(() => {
        dispatch(fetchRandomRecipes());
                }, [dispatch]);
    return (<Fragment>
        <div className={styles.body}>
            <ContentHeading/>

            </div>
        <Items/>

    </Fragment>)
}
export default Content;