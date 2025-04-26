import RecipeCard from './RecipeCard';

export default function RecipeList({ recipes, setRecipes }) {
  return (
    <>
      <div style={{ padding: "16px", margin: "0 auto", maxWidth: "1200px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px",  justifyContent: "center", }}>
          {recipes.map((recipe) => ( <RecipeCard key={recipe.id} recipe={recipe} setRecipes={setRecipes} /> ))}
        </div>
      </div>
    </>
  );
}