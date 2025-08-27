import React from "react";
import { motion } from "framer-motion";
import styles from "./Item.module.css";

const Item = ({ item }) => {
  return (
    <motion.div
      className={styles.card}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.imageWrapper}>
        <img
          src={item.image}
          alt={item.title}
          className={styles.image}
          loading="lazy"
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{item.title}</h3>
      </div>
    </motion.div>
  );
};

export default Item;
