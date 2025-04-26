import { useState, useEffect } from 'react';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';
import FavoriteRecipes from './components/FavoriteRecipes';
import InspirationGenerator from './components/InspirationGenerator';
import { ToastContainer } from 'react-toastify';

export default function App() {
  const [recipes, setRecipes] = useState(() => {
    const stored = localStorage.getItem('recipes');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-center mb-8">recipe creator</h1>
      <RecipeForm setRecipes={setRecipes} />
      <InspirationGenerator recipes={recipes} />
      <FavoriteRecipes recipes={recipes} setRecipes={setRecipes} />
      <RecipeList recipes={recipes} setRecipes={setRecipes} />
      <ToastContainer />
    </div>
  );
}