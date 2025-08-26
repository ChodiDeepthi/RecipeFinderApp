import { Fragment } from "react";
import styles from "./ContentHeading.module.css"

function ContentHeading(){




    return <Fragment>
        <div className={styles.heading}>Delicious Recipies Made Easy</div>
        <div className={styles.description}>Find your favorite meals, try new ones, end enjoy cooking like never before.</div>
    </Fragment>
}
export default ContentHeading;