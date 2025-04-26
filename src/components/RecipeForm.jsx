import { useState } from "react";
import { toast } from "react-toastify";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function RecipeForm({ setRecipes }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc || !ingredients || !steps || !time) {
      toast.error("Something went wrong, did you fill form with ANY information?!");
      return;
    }

    const newRecipe = { id: Date.now(), title, desc, ingredients: ingredients.split(",").map((i) => i.trim()), steps, time, favorite: false, };

    setRecipes((prev) => [...prev, newRecipe]);
    toast.success("Your recipe has been added succesfully!");
    setTitle(""); setDesc(""); setIngredients(""); setSteps(""); setTime("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-center">Add new Recipe</h2>
      <div class="form-floating mb-3" style={{ maxWidth: "500px", margin: "0 auto" }}>
        <input type="text" class="form-control" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="" id="name" aria-label="name" aria-describedby="addon-wrapping"/>
        <label for="name">Name</label>
      </div>
      <div class="form-floating mb-3" style={{ maxWidth: "500px", margin: "0 auto" }}>
        <textarea id="desc" placeholder="" class="form-control" style={{ height: "50px" }} value={desc} onChange={(e) => setDesc(e.target.value)}/>
        <label for="desc">Description</label>
      </div>

      <div class="form-floating mb-3" style={{ maxWidth: "500px", margin: "0 auto" }}>
        <input type="number" id="prep-time" min={1} max={999999999} value={time} onChange={(e) => setTime(e.target.value)} class="form-control" placeholder="" style={{ height: "50px" }}/>
        <label for="prep-time">Dish preparation time (in minutes)</label>
      </div>

      <div class="form-floating mb-3" style={{ maxWidth: "500px", margin: "0 auto" }}>
        <textarea id="ingredients" placeholder="" class="form-control" style={{ height: "50px" }} value={ingredients} onChange={(e) => setIngredients(e.target.value)}/>
        <label for="ingredients">Ingredients (separated using ",")</label>
      </div>

      <div class="form-floating mb-3" style={{ maxWidth: "500px", margin: "0 auto" }}>
        <textarea id="steps" class="form-control" placeholder="" style={{ height: "50px" }} value={steps} onChange={(e) => setSteps(e.target.value)}/>
        <label for="steps">Guide (step by step)</label>
      </div>

      <div class="form-floating mb-3" style={{ maxWidth: "500px", margin: "0 auto" }}>
        <button type="submit" class="btn btn-outline-success">
          <i class="bi bi-plus-circle" style={{ paddingRight: "5px" }} /> Add new Recipe
        </button>
      </div>
    </form>
  );
}