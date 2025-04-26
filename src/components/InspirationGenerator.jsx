import { useState } from 'react';

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
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-semibold mb-4">generator</h2>
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Podaj składniki (np. jajka, mleko)" className="input" />
      <button onClick={searchRecipes} className="btn mt-2">search</button>
      {results.length > 0 && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">maching:</h3>
          <ul className="list-disc pl-5">
            {results.map(r => <li key={r.id}>{r.title}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}