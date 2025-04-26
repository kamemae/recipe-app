import { useState, useEffect } from "react";
import RecipeForm from "./components/RecipeForm";
import RecipeList from "./components/RecipeList";
import FavoriteRecipes from "./components/FavoriteRecipes";
import InspirationGenerator from "./components/InspirationGenerator";
import { ToastContainer } from "react-toastify";
import NavbarComponent from "./components/parts/navbar";

export default function App() {
  const [image, setImage] = useState(null);
  const [recipes, setRecipes] = useState(() => {
    const stored = localStorage.getItem("recipes");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes), image);
  }, [recipes]);



  return (
    <>
      <NavbarComponent />
      <ToastContainer />
      <div className="min-h-screen bg-gray-100 p-4">
        <RecipeList recipes={recipes} setRecipes={setRecipes} />



        <br/><br/><br/><br/><br/><br/>
        <RecipeForm setRecipes={setRecipes} />
        <InspirationGenerator recipes={recipes} />
        <FavoriteRecipes recipes={recipes} setRecipes={setRecipes} />
      </div>
      
    </>
  );
}
