import RecipeCard from './RecipeCard';

export default function RecipeList({ recipes, setRecipes }) {
  return (
    <>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {recipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} setRecipes={setRecipes} />
          ))}
        </div>
      </div>
    </>

  )
}