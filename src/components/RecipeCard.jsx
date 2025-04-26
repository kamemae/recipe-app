import { FaTrash, FaHeart } from 'react-icons/fa';
import { toast } from 'react-toastify';

export default function RecipeCard({ recipe, setRecipes }) {
  const deleteRecipe = () => {
    setRecipes(prev => prev.filter(r => r.id !== recipe.id));
    toast.info('Przepis usunięty.');
  };

  const toggleFavorite = () => {
    setRecipes(prev => prev.map(r => r.id === recipe.id ? { ...r, favorite: !r.favorite } : r));
    toast.success(recipe.favorite ? 'Usunięto z ulubionych' : 'Dodano do ulubionych');
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-bold">{recipe.title}</h3>
        <div className="flex gap-2">
          <FaHeart className={`cursor-pointer ${recipe.favorite ? 'text-red-500' : 'text-gray-400'}`} onClick={toggleFavorite} />
          <FaTrash className="cursor-pointer text-gray-400" onClick={deleteRecipe} />
        </div>
      </div>
      <p><strong>Składniki:</strong> {recipe.ingredients.join(', ')}</p>
      <p><strong>Kroki:</strong> {recipe.steps}</p>
      <p><strong>Czas:</strong> {recipe.time} min</p>
    </div>
  );
} 
