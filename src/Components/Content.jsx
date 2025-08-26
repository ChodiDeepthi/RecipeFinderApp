import { Fragment } from "react";
import ContentHeading from "./ContentHeading"
import styles from "./Content.module.css";
import Items from "./Items";
function Content(){


    return (<Fragment>
        <div className={styles.body}>
            <ContentHeading/>

            </div>
        <Items/>

    </Fragment>)
}
export default Content;