import React, { useState, useEffect } from 'react';
import MealList from './components/MealList';
import './index.css';

const App = () => {
  const [meals, setMeals] = useState([]);

  const fetchRandomMeals = async () => {
    try {
      const mealData = [];
      for (let i = 0; i < 4; i++) {  // Fetch 4 random meals for the homepage
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        const data = await response.json();
        mealData.push(data.meals[0]);
      }
      setMeals(mealData);
    } catch (error) {
      console.error("Error fetching random meals:", error);
    }
  };

  useEffect(() => {
    fetchRandomMeals();
  }, []);

  return (
    <div className="app">
      <h1>Explore Meals</h1>
      <MealList meals={meals} />
    </div>
  );
};

export default App;

