import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import MealList from './components/MealList';
import MealDetails from './components/MealDetails';
import './index.css';

const App = () => {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const fetchRandomMeals = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = await response.json();
      setMeals([data.meals[0]]);
    } catch (error) {
      console.error("Error fetching random meals:", error);
    }
  };

  useEffect(() => {
    fetchRandomMeals();
  }, []);

  return (
    <div className="app">
      <h1>Food Recipe Project</h1>
      <SearchBar onSearch={() => {}} />
      {selectedMeal ? <MealDetails meal={selectedMeal} /> : <MealList meals={meals} />}
    </div>
  );
};

export default App;

