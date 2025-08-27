import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Item from './Item.jsx';
import styles from './Items.module.css'
import { fetchRecipeDetails } from '../store/searchSlice.js';
import { useNavigate } from 'react-router-dom';
const Items = () => {
  const { items, loading, error } = useSelector((state) => state.recipes);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (loading) return <p>Loading recipes...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.itemsgrid}>
      {items.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid #ddd', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <Item item={recipe} itemid={recipe.id} />
          <div style={{ padding: '10px', textAlign: 'center' }}>
           
              <button onClick={() => {
                            dispatch(fetchRecipeDetails(recipe.id)).then(() => {
                              navigate(`/item/${recipe.id}`);
                                               });
                                      }
                               }
   style={{ background: '#29bb89', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '5px', cursor: 'pointer' }}>
                More →
              </button>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
