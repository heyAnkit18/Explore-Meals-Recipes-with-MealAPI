import React from 'react';

const MealDetails = ({ meal }) => (
  <div className="meal-details">
    <h2>{meal.strMeal}</h2>
    <img src={meal.strMealThumb} alt={meal.strMeal} />
    <p>{meal.strInstructions}</p>
  </div>
);

export default MealDetails;
