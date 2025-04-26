import RecipeCard from "./RecipeCard.jsx";
export default function FavoriteRecipes({ recipes, setRecipes }) {
  const favorites = recipes.filter(r => r.favorite);

  var status = "";
  if(!favorites.length) status = "No favourite recipes found, maybe try adding some? duh";

  return (
    <>

      <h2 className="text-center">Favorite Recipes</h2>
      <h3 className="text-center">{status}</h3>
      
      <div style={{ padding: "16px", margin: "0 auto", maxWidth: "1200px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px",  justifyContent: "center", }}>
          {favorites.map((recipe) => ( <RecipeCard key={recipe.id} recipe={recipe} setRecipes={setRecipes} /> ))}
        </div>
      </div>
    </>
  );
}