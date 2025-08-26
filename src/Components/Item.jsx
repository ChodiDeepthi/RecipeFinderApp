import React, { Fragment } from "react";
import styles from "./Item.module.css";

function Item({ item }) {
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.imagecontainer}>
          <img src={item.image} className={styles.modrenimage} alt={item.title} />
        </div>
        <div className={styles.modrencontent}>
          <p className={styles.itemname}>{item.title}</p>
        </div>
        <div className={styles.buttoncontainer}>
          {/* Example if you want button inside item card */}
          {/* <button className={styles.button}>More →</button> */}
        </div>
      </div>
    </Fragment>
  );
}

export default Item;
