import RecipeCard from './RecipeCard';

export default function RecipeList({ recipes, setRecipes }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">list</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} setRecipes={setRecipes} />
        ))}
      </div>
    </div>
  );
}