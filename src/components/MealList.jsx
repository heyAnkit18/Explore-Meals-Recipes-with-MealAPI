import React from 'react';

const MealList = ({ meals }) => (
  <div className="meal-list">
    {meals.map((meal) => (
      <div key={meal.idMeal} className="meal-card">
        <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-image" />
        <h3 className="meal-title">{meal.strMeal}</h3>
        <p className="meal-category">{meal.strCategory}</p>
      </div>
    ))}
  </div>
);

export default MealList;

