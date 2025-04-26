export default function FavoriteRecipes({ recipes, setRecipes }) {
  const favorites = recipes.filter(r => r.favorite);

  if (!favorites.length) return null;

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Ulubione przepisy</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {favorites.map(recipe => (
          <div key={recipe.id} className="bg-pink-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">{recipe.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}