import React from "react";
import { useSelector } from "react-redux";
import styles from "./ResultItem.module.css";

const ResultItem = () => {
  const { selectedRecipe, loading, error } = useSelector((state) => state.recipes);

  if (loading) return <p>Loading recipe details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!selectedRecipe) return <p>No recipe data available</p>;

  return (
    <div className={styles.recipecard}>
      <h1 className={styles.recipename}>{selectedRecipe.title}</h1>
      <img className={styles.recipeimage} src={selectedRecipe.image} alt={selectedRecipe.title} />

      <div className={styles.recipedetails}>
        <span><strong>⏱ {selectedRecipe.readyInMinutes} Minutes</strong></span>
        <span><strong>Serves: {selectedRecipe.servings}</strong></span>
        <span><strong>{selectedRecipe.vegetarian ? "Vegetarian 🥦" : "Non-veg 🍖"}</strong></span>
        {selectedRecipe.vegan && <span><strong>Vegan 🌱</strong></span>}
        <span><strong>💲 {selectedRecipe.pricePerServing / 100} per serving</strong></span>
      </div>

      {/* Instructions */}
      <h2>Instructions</h2>
      <div className={styles.recipeinstructions}>
        {selectedRecipe.analyzedInstructions?.length > 0 ? (
          <ol>
            {selectedRecipe.analyzedInstructions[0].steps.map((step, i) => (
              <li key={i}>{step.step}</li>
            ))}
          </ol>
        ) : (
          <p>No instructions available.</p>
        )}
      </div>

      {/* Ingredients */}
      <h2>Ingredients</h2>
      <div className={styles.ingredients}>
        {selectedRecipe.extendedIngredients?.map((item, i) => (
          <div key={i}>
            <h3>{item.name}</h3>
            <p>Amount: {item.amount} {item.unit}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultItem;
