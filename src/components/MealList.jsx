import React, { useState } from 'react';

const MealList = ({ meals }) => {
  const [selectedMeal, setSelectedMeal] = useState(null);

  const handleShowRecipe = (meal) => {
    setSelectedMeal(meal); 
  };

  const handleBackToHome = () => {
    setSelectedMeal(null); 
  };

  return (
    <div>
      {selectedMeal ? (
        <div className="meal-details">
          <div className="meal-card meal-details-card">
            <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} className="meal-image" />
            <h3>{selectedMeal.strMeal}</h3>
            <p><strong>Category:</strong> {selectedMeal.strCategory}</p>
            <p><strong>Instructions:</strong> {selectedMeal.strInstructions}</p>
            <p><strong>Ingredients:</strong></p>
            <ul>
              {Array.from({ length: 20 }, (_, index) => {
                const ingredient = selectedMeal[`strIngredient${index + 1}`];
                const measure = selectedMeal[`strMeasure${index + 1}`];
                return ingredient && (
                  <li key={index}>{ingredient} - {measure}</li>
                );
              })}
            </ul>
          </div>
          <button className="back-home-button" onClick={handleBackToHome}>
            Back to Home
          </button>
        </div>
      ) : (
        <div className="meal-list">
          {meals.map((meal) => (
            <div key={meal.idMeal} className="meal-card">
              <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-image" />
              <h3 className="meal-title">{meal.strMeal}</h3>
              <p className="meal-category">{meal.strCategory}</p>
              <button className="show-recipe-button" onClick={() => handleShowRecipe(meal)}>
                Show Recipe
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MealList;

