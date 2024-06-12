import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Typography, Button, SvgIcon, Box } from '@mui/material';
import TimeIcon from '@/icons/TimeIcon';
import YieldIcon from '@/icons/YieldIcon';
import AddOutlined from '@mui/icons-material/AddOutlined';
import PrintOutlined from '@mui/icons-material/PrintOutlined';
import Layout from '@/components/RootLayout';
import Loading from '@/components/Loading';
import { StyledContainer, StyledImage, StyledInfoContainer, StyledTimeContainer, StyledTypography } from './recipes.styled';
import { Recipe, fetchRecipeDetails } from '@/services/recipeService';



const RecipeDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query as { id : string };
  const [recipe, setRecipe] = useState<Recipe>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
        try {
          fetchRecipeDetails(id).then((response) => {
            setRecipe(response);
            setLoading(false);
          });
        } catch ( exception ) {
          console.error('Error fetching data:', exception);
        }
    }
  }, [id]);

  if (loading || !recipe) {
    return <Loading />;
  }

  return (
    <Layout recipeName={recipe.title}>
      <StyledContainer>
        <StyledInfoContainer>
          <Typography variant="h3" component="h1" gutterBottom>
            {recipe.title}
          </Typography>
          <Typography variant="body1" color="#878787">
            {recipe.description} {recipe.ingredients} {recipe.directions}
          </Typography>
          <StyledTimeContainer>
            <SvgIcon component={TimeIcon} inheritViewBox />
            <StyledTypography>
              <span>PREP</span>
              {recipe.prepTime} mins
            </StyledTypography>
            <StyledTypography>
              <span>BAK</span>
              {recipe.cookTime} mins
            </StyledTypography>
            <StyledTypography>
              <span>TOTAL</span>
              {recipe.totalTime} mins
            </StyledTypography>
          </StyledTimeContainer>
          <StyledTimeContainer>
            <SvgIcon component={YieldIcon} inheritViewBox />
            <StyledTypography>
              <span>YIELD</span>
              {recipe.yield} {recipe.servings} servings
            </StyledTypography>
            <Box display="flex" gap="0.5rem">
              <Button variant="outlined" startIcon={<AddOutlined />}>SAVE RECIPE</Button>
              <Button variant="outlined" startIcon={<PrintOutlined />}>PRINT</Button>
            </Box>
          </StyledTimeContainer>
        </StyledInfoContainer>
        <Box display="flex" justifyContent="center">
          <StyledImage src={recipe.photoUrl} alt={recipe.title} />
        </Box>
      </StyledContainer>
    </Layout>
  );
};

export default RecipeDetail;
