import { useState, useEffect } from "react";
import RecipeForm from "./components/RecipeForm";
import RecipeList from "./components/RecipeList";
import FavoriteRecipes from "./components/FavoriteRecipes";
import InspirationGenerator from "./components/InspirationGenerator";
import SearchResults from './components/SearchResults';
import { ToastContainer } from "react-toastify";
import NavbarComponent from "./components/parts/navbar";
import { Routes, Route } from 'react-router-dom';

export default function App() {
  const [recipes, setRecipes] = useState(() => {
    const stored = localStorage.getItem("recipes");
    return stored ? JSON.parse(stored) : [];
  });

  const [searchTerm, setSearchTerm] = useState(""); 

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  return (
    <>
      <NavbarComponent setSearchTerm={setSearchTerm} />
      <ToastContainer />
      <div className="min-h-screen bg-gray-100 p-4">
        <Routes>
          <Route path="/" element={<RecipeList recipes={recipes} setRecipes={setRecipes} />} />
          <Route path="/add" element={<RecipeForm setRecipes={setRecipes} />} />
          <Route path="/favorites" element={<FavoriteRecipes recipes={recipes} setRecipes={setRecipes} />} />
          <Route path="/feelinglucky" element={<InspirationGenerator recipes={recipes} setRecipes={setRecipes} />} />
          <Route path="/search" element={<SearchResults recipes={recipes} searchTerm={searchTerm} />} />
        </Routes>
      </div>
    </>
  );
}