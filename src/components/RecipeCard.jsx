import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";

export default function RecipeCard({ recipe, setRecipes }) {
  const deleteRecipe = () => {
    setRecipes(prev => prev.filter(r => r.id !== recipe.id));
    toast.info('deleted.');
  };

  const toggleFavorite = () => {
    setRecipes(prev => prev.map(r => r.id === recipe.id ? { ...r, favorite: !r.favorite } : r));
    toast.success(recipe.favorite ? 'removed from favourites' : 'added to favourites');
  };

  return (
    <>
      <Card style={{ minWidth: '18rem'}}>
        
        <Card.Body>
          <Card.Title>title</Card.Title>
          <Card.Text>
            description
          </Card.Text>
          <Button variant="outline-success">See more...</Button>
          <Button variant={recipe.favorite ? "outline-danger" : "outline-success"} onClick={toggleFavorite} style={{ float: "right" }}><i className={ recipe.favorite ? 'bi bi-heart-fill' : 'bi bi-plus-circle' }/></Button>
          <Button variant='outline-danger' style={{ float: "right" }} onClick={deleteRecipe}><i className='bi bi-trash'/></Button>
        </Card.Body>
      </Card>
    </>
  );

  //<Card.Img variant="top" src="holder.js/100px180" />
}
