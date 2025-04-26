import { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import { useSearchParams } from 'react-router';
import { useNavigate } from 'react-router-dom';

export default function SearchResults({ recipes, searchTerm: initialSearchTerm, setRecipes }) {
  const [searchParams] = useSearchParams();
  const urlSearchTerm = searchParams.get('q') || ''; 
  const navigate = useNavigate();
  
  const [searchTerm, setSearchTerm] = useState(urlSearchTerm);

  useEffect(() => {
    setSearchTerm(urlSearchTerm);
  }, [urlSearchTerm]);


  useEffect(() => {
    setSearchTerm(initialSearchTerm || "");
  }, [initialSearchTerm]);

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    navigate(`/search?q=${encodeURIComponent(newSearchTerm)}`, { replace: true });
  };

  return (
    <div style={{ padding: "16px", margin: "0 auto", maxWidth: "1200px" }}>
      <h2 className="text-center">Search Results</h2>
      <div style={{ marginBottom: "16px", textAlign: "center" }}>
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={handleSearchChange}
          style={{
            padding: "8px",
            width: "100%",
            maxWidth: "400px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      {filteredRecipes.length > 0 ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px" }}>
          {filteredRecipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} setRecipes={setRecipes} />
          ))}
        </div>
      ) : (
        <h4 className="text-center text-muted">No recipes found for "{searchTerm}".</h4>
      )}
    </div>
  );
}