import React, {useState, useEffect} from 'react';
import './App.css';
import {Recipe} from './components/Recipe';



function App() {
  
  const REACT_APP_ID = process.env.REACT_APP_ID;
  const REACT_APP_KEY = process.env.REACT_APP_KEY;
  console.log(REACT_APP_KEY);
  
  //const [counter, setCounter] = useState(0);
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    console.log('Running useEffect!');
    getRecipes(search);
  }, [search]);

  const getRecipes = async (search) => {
    
    const BASE_URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${REACT_APP_ID}&app_key=${REACT_APP_KEY}`;
    console.log(BASE_URL);

    const res = await fetch(BASE_URL);
    const data = await res.json();
    console.log(data.hits);
    setRecipe(data.hits);

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let searchString = event.target.search_text.value // access form fields directly
    // console.log(event.target.elements.search_text.value) // from elements property
    // console.log(searchString)          // or directly
    setSearch(searchString)
  }
  
  return (
    <div className="App">

      <form className="search-form" onSubmit={handleSubmit}>
        <input className="search-bar" type="text" name="search_text"/>
        <button className="search-button" type="submit"> Search </button>
      </form>
      {recipe.map(r => (
        <Recipe key={r.recipe.lable} title={r.recipe.label} calories={r.recipe.calories} image={r.recipe.image} />
      ))}
      
    </div>
  );
}

export default App;
