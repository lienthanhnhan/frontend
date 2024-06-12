import axios from 'axios';

const API_URL = 'https://api.sampleapis.com/recipes';

export interface Recipe {
    id: number;
    title: string;
    course: string;
    cuisine: string;
    mainIngredient: string;
    description: string;
    source: string;
    url: string;
    urlHost: string;
    prepTime: number;
    cookTime: number;
    totalTime: number;
    servings: number;
    yield: string;
    ingredients: string;
    directions: string;
    tags: string;
    rating: string;
    publicUrl: string;
    photoUrl: string;
    private: string;
    nutritionalScoreGeneric: string;
    calories: string;
    fat: string;
    cholesterol: string;
    sodium: string;
    sugar: string;
    carbohydrate: string;
    fiber: string;
    protein: string;
    cost: string;
};

export const fetchRecipeDetails = async (recipeId: string): Promise<Recipe> => {
  try {
    const response = await axios.get(`${API_URL}/recipes/${recipeId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    throw error;
  }
};

export const fetchRecipes = async (): Promise<Recipe[]>  => {
  try {
    const response = await axios.get(`${API_URL}/recipes`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};
