import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, CardMedia, Grid, Link } from '@mui/material';
import Loading from '@/components/Loading';
import RootLayout from '@/components/RootLayout';
import { Recipe, fetchRecipes } from '@/services/recipeService';

const Recipes: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
        fetchRecipes()
        .then((response) => {
            setRecipes(response);
        })
    } catch ( exception ) {
      console.error('Error fetching data:', exception);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading && !recipes) {
    return <Loading />;
  }

  return (
    <RootLayout>
      <Grid container spacing={2}>
        {recipes && recipes.map(recipe => (
          <Grid item key={recipe.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={recipe.photoUrl}
                alt={recipe.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" noWrap>
                    <Link href={`/recipes/${recipe.id}`} >{recipe.title}</Link>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Preparation Time: {recipe.prepTime}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Baking Time: {recipe.cookTime}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Yield: {recipe.yield} {recipe.servings} servings
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </RootLayout>
  );
};

export default Recipes;
