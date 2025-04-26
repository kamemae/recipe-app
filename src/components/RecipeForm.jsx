import { useState } from "react";
import { toast } from "react-toastify";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function RecipeForm({ setRecipes }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [time, setTime] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!title || !desc || !ingredients || !steps || !time || !image) {
      toast.error("Something went wrong, did you left something empty?");
      return;
    }

    try {
      const base64Image = await handleImageUpload(image);
      const newRecipe = { id: Date.now(), title, desc, ingredients: ingredients.split(",").map((i) => i.trim()), steps, time, favorite: false, image: base64Image };

      setRecipes((prev) => {
        const updatedRecipes = [...prev, newRecipe];
        localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
        return updatedRecipes;
      });
      
      toast.success("Your recipe has been added successfully!");
      setTitle(""); setDesc(""); setIngredients(""); setSteps(""); setTime(""); setImage(null);
      e.target.reset();
    } catch (error) { toast.error("Something went wrong, maybe try again later?"); }
    
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-center">Add new Recipe</h2>
      <div className="form-floating mb-3" style={{ maxWidth: "500px", margin: "0 auto" }}>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder=""
          id="name"
          aria-label="name"
          aria-describedby="addon-wrapping"
        />
        <label htmlFor="name">Name</label>
      </div>
      <div className="form-floating mb-3" style={{ maxWidth: "500px", margin: "0 auto" }}>
        <textarea
          id="desc"
          placeholder=""
          className="form-control"
          style={{ height: "50px" }}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <label htmlFor="desc">Description</label>
      </div>

      <div className="form-floating mb-3" style={{ maxWidth: "500px", margin: "0 auto" }}>
        <input
          type="number"
          id="prep-time"
          min={1}
          max={999999999}
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="form-control"
          placeholder=""
          style={{ height: "50px" }}
        />
        <label htmlFor="prep-time">Dish preparation time (in minutes)</label>
      </div>

      <div className="form-floating mb-3" style={{ maxWidth: "500px", margin: "0 auto" }}>
        <textarea
          id="ingredients"
          placeholder=""
          className="form-control"
          style={{ height: "50px" }}
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <label htmlFor="ingredients">Ingredients (separated using ",")</label>
      </div>

      <div className="form-floating mb-3" style={{ maxWidth: "500px", margin: "0 auto" }}>
        <textarea
          id="steps"
          className="form-control"
          placeholder=""
          style={{ height: "50px" }}
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        />
        <label htmlFor="steps">Guide (step by step)</label>
      </div>

      <div style={{ maxWidth: "500px", margin: "0 auto" }}>
        <input
          className="form-control form-floating mb-3"
          type="file"
          id="formFile"
          onChange={(e) => setImage(e.target.files[0])} 
        />
      </div>

      <div className="form-floating mb-3" style={{ maxWidth: "500px", margin: "0 auto" }}>
        <button type="submit" className="btn btn-outline-success">
          <i className="bi bi-plus-circle" style={{ paddingRight: "5px" }}/> 
          Add new Recipe
        </button>
      </div>
    </form>
  );
}