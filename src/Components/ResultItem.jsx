import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ResultItem = () => {
  const location = useLocation();
  const { id } = location.state || {};
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiKey = "d6a89bdf0d614d17921328c1310096ad"; 

  useEffect(() => {
    if (id) {
      fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`)
        .then(res => res.json())
        .then(data => {
          setRecipe(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [id]);

  if (loading) return <p>Loading recipe...</p>;
  if (!recipe) return <p>No recipe found</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} style={{ width: '400px', borderRadius: '10px' }} />
      <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
      <h3>Ingredients</h3>
      <ul>
        {recipe.extendedIngredients?.map((ing) => (
          <li key={ing.id}>{ing.original}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <div dangerouslySetInnerHTML={{ __html: recipe.instructions }}></div>
    </div>
  );
};

export default ResultItem;
