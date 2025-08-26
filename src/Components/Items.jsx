import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Item from './Item.jsx';

const Items = () => {
  const { items, loading, error } = useSelector((state) => state.recipes);

  if (loading) return <p>Loading recipes...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px', padding: '20px' }}>
      {items.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid #ddd', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <Item item={recipe} itemid={recipe.id} />
          <div style={{ padding: '10px', textAlign: 'center' }}>
            <Link to={`/item/${recipe.title}`} state={{ recipe: recipe }}>
              <button style={{ background: '#29bb89', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '5px', cursor: 'pointer' }}>
                More →
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
