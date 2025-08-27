import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';  // ✅ animations
import Item from './Item.jsx';
import styles from './Items.module.css';
import { fetchRecipeDetails } from '../store/searchSlice.js';

const Items = () => {
  const { items, loading, error } = useSelector((state) => state.recipes);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (loading) return <p>Loading recipes...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.itemsgrid}>
      {items.map((recipe, i) => (
        <motion.div
          key={recipe.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          whileHover={{ scale: 1.05, boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}
          style={{
            border: "1px solid #ddd",
            borderRadius: "40px",
            overflow: "hidden",
            background: "black",
          }}
        >
          <Item item={recipe} itemid={recipe.id} />
          <div style={{ padding: "10px", textAlign: "center" }}>
            <button
              onClick={() => {
                dispatch(fetchRecipeDetails(recipe.id)).then(() => {
                  navigate(`/item/${recipe.id}`);
                });
              }}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "10px 15px",
                borderRadius: "10px",
                cursor: "pointer",
                transition: "background 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.background = "#d12828ff")}
              onMouseOut={(e) => (e.target.style.background = "red")}
            >
              More
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Items;
