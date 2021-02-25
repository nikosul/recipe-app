import React from 'react';

const Recipe = ({ title, healthLabels, calories, image, ingredients }) => {
  
  return (
    <article className='recipe'>
      {/* <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol> */}
      {/* <p>{calories}</p> */}
      <img className='recipe-image' src={image} alt='' />
      <div className='recipe-content'>
        <h1 className='recipe-title'>{title}</h1>
        
        <ol>{healthLabels.filter(v => v.includes('Veg')).map(filteredHealthLabel => (
          <p>{filteredHealthLabel}</p>
        ))}
        </ol>

      </div>
    </article>
  );
};

export default Recipe;