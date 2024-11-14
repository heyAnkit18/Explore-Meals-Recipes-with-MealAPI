

import React from 'react';

const MealList = ({ meals }) => (
  <div className="meal-list">
    {meals.map((meal) => (
      <div key={meal.idMeal} className="meal-card">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <h3>{meal.strMeal}</h3>
      </div>
    ))}
  </div>
);

export default MealList;
