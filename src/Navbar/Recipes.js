import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import "../style.css";

function Recipe() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("https://server-v95o.onrender.com/recipes")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Log the response data
        if (Array.isArray(data)) {
          setRecipes(data);
        } else {
          console.error('Expected an array but got:', data);
          setRecipes([]); // Set to an empty array if data is not an array
        }
      })
      .catch((error) => console.error('Error fetching recipes:', error));
  }, []);

  const filteredRecipes = recipes.filter((recipe) => {
    if (query === "") {
      return true; // Return all recipes when query is empty
    } else if (recipe.title.toLowerCase().includes(query.toLowerCase())) {
      return true; // Return recipes matching the query
    }
    return false;
  });

  return (
    <div className="recipe-app">
      <NavBar />
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter The Recipe Title"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <div className="recipe-list">
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} />
            <p>Ingredients: {recipe.ingredients}</p>
            <p>Directions: {recipe.directions}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipe;
