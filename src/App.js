import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import MealList from './components/MealList';
import './index.css';

const App = () => {
  const [meals, setMeals] = useState([]);
  const [query, setQuery] = useState('');

  const fetchMeals = async (searchQuery = '') => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`);
      const data = await response.json();
      setMeals(data.meals || []);
    } catch (error) {
      console.error("Error fetching meals:", error);
    }
  };

  useEffect(() => {
    fetchMeals(query); 
  }, [query]);  

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  return (
    <div className="app">
      <h1>Explore Meals</h1>
      <SearchBar onSearch={handleSearch} />
      <MealList meals={meals} />
    </div>
  );
};

export default App;
