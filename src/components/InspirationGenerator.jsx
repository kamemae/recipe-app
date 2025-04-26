import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function InspirationGenerator({ recipes }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchRecipes = () => {
    const ingredients = query.toLowerCase().split(',').map(i => i.trim());
    const filtered = recipes.filter(recipe =>
      ingredients.every(ing => recipe.ingredients.map(i => i.toLowerCase()).includes(ing))
    );
    setResults(filtered);
  };

  return (
    <>  
      <div className='bg-white p-6 rounded-lg shadow-md mb-8' style={{ maxWidth: "500px", margin: "0 auto" }}>
        <h2 className="text-center">I'm feeling lucky</h2>
        <Form className="d-flex">
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
        </Form> 
      </div>
      <div className="form-floating mb-3" style={{ maxWidth: "500px", margin: "0 auto" }}>
        {results.length > 0 && (
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2 text-center">Results:</h3>
            <ul className="list-disc pl-5">
              {results.map(r => <li key={r.id}>{r.title}</li>)} 
            </ul>
          </div>
        )}
      </div>
    </>
  );
}