import React, { useEffect, useState } from 'react'
import Recipe from './Recipe';
import './App.css'
require('dotenv').config();

//TODO: Router, ingredients, meal-planner

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('pasta')

  useEffect( () => {
    getRecipes()
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}=&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className='App'>
      <header className='header'>
        <h1 className='header-title'>Recipe App</h1>
      </header>
    <div className='main-container'>
      <form onSubmit={getSearch} className='search-form'>
        <input className='search-bar' type='text' placeholder='Search for recipes' value={search} onChange={updateSearch} />
        <button className='search-button' type='submit'>
          Search   
        </button>
      </form>
      <section className='recipes'>
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          healthLabels={recipe.recipe.healthLabels}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </section>
      </div>
    </div>
  )
}

export default App;