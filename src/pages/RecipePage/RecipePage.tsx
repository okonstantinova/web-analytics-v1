import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getRecipeById } from '../../services/recipeService';
import { trackRecipeView } from '../../services/analyticsService';
import RecipeDetail from '../../components/RecipeDetail/RecipeDetail';
import './RecipePage.css';

export default function RecipePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const recipe = id ? getRecipeById(id) : undefined;

  useEffect(() => {
    if (recipe) {
      trackRecipeView(recipe.id, recipe.name);
    } else if (id) {
      navigate('/', { replace: true });
    }
  }, [recipe, id, navigate]);

  if (!recipe) {
    return null;
  }

  return (
    <div className="recipe-page">
      <RecipeDetail recipe={recipe} />
    </div>
  );
}
