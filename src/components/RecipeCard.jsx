import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router';

export default function RecipeCard({ recipe, setRecipes }) {
  const navigate = useNavigate();
  const deleteRecipe = () => {
    const storedName = recipe.title;
    setRecipes(prev => prev.filter(r => r.id !== recipe.id));
    toast.info("Deleted " + "'" + storedName + "'" + ', are you finally happy?');
  };

  const toggleFavorite = () => {
    setRecipes(prev => prev.map(r => r.id === recipe.id ? { ...r, favorite: !r.favorite } : r));
    toast.success(recipe.favorite ? "'" + recipe.title + "' has been removed from favourites succesfully. HOW DARE YOU!" : "'" + recipe.title + "' added to favourites");
  };

  const handleSeeMore = (e) => {
    e.preventDefault();
    navigate(`/product?p=${recipe.id}`);
  };

  

  return (
    <>
      <Card style={{ minWidth: '256px', maxWidth: '512px', margin:"5px" }} className="mb-4">
        <Card.Body>
          <Card.Img variant="top" src={recipe.image} style={{ height: '128px', objectFit:"cover" }} />
          <Card.Title style={{margin:"10px"}}>{recipe.title}</Card.Title>
          <Card.Text>{recipe.desc}</Card.Text>
          <Button variant="outline-success" onClick={handleSeeMore}>
            See more...
          </Button>
          <Button variant={recipe.favorite ? "outline-danger" : "outline-success"} onClick={toggleFavorite} style={{ float: "right" }}><i className={ recipe.favorite ? 'bi bi-heart-fill' : 'bi bi-plus-circle' }/></Button>
          <Button variant='outline-danger' style={{ float: "right" }} onClick={deleteRecipe}><i className='bi bi-trash'/></Button>
        </Card.Body>
      </Card>
    </>
  );
}
