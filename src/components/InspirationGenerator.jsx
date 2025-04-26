import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import RecipeCard from "./RecipeCard";

export default function InspirationGenerator({ recipes, setRecipes }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false); 

  const searchRecipes = () => {
    const ingredients = query.toLowerCase().split(',').map(i => i.trim());
    const filtered = recipes.filter(recipe =>
      ingredients.every(ing => recipe.ingredients.map(i => i.toLowerCase()).includes(ing))
    );
    setResults(filtered);
    setHasSearched(true);
  };

  return (
    <>  
      <div className='bg-white p-6 rounded-lg shadow-md mb-8' style={{ maxWidth: "500px", margin: "0 auto" }}>
        <h2 className="text-center">I'm feeling lucky</h2>
        <div className="d-flex">
          <Form.Control
            type="search"
            placeholder="Enter ingredients (separated by ',')"
            className="wa-p3"
            aria-label="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button variant="outline-primary" type="button" onClick={searchRecipes}>
            <i className="bi bi-search" />
          </Button>
        </div> 
      </div>
      <br/>
      <div className="form-floating mb-3" style={{ maxWidth: "500px", margin: "0 auto" }}>
        {hasSearched && results.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-2 text-center">Results:</h3>
            {
              results.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} setRecipes={setRecipes} />
              ))
            }
          </div>
        )}
        {hasSearched && results.length === 0 && (
          <h4 className="text-center text-muted mt-4">No recipes found. Try different ingredients!</h4>
        )}
      </div>
    </>
  );
}