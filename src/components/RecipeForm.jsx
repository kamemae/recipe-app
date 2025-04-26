import { useState } from 'react';
import { toast } from 'react-toastify';

export default function RecipeForm({ setRecipes }) {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !ingredients || !steps || !time) {
      toast.error('Wszystkie pola muszą być wypełnione!');
      return;
    }

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split(',').map(i => i.trim()),
      steps,
      time,
      favorite: false
    };

    setRecipes(prev => [...prev, newRecipe]);
    toast.success('Przepis dodany!');
    setTitle('');
    setIngredients('');
    setSteps('');
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-semibold mb-4">add new recipe</h2>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Tytuł" className="input" />
      <input value={ingredients} onChange={e => setIngredients(e.target.value)} placeholder="Składniki (oddzielone przecinkami)" className="input" />
      <textarea value={steps} onChange={e => setSteps(e.target.value)} placeholder="Kroki przygotowania" className="input"></textarea>
      <input value={time} onChange={e => setTime(e.target.value)} placeholder="Czas gotowania (minuty)" className="input" />
      <button type="submit" className="btn">+</button>
    </form>
  );
}