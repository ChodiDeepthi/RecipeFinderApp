import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchRecipes=createAsyncThunk
(
    'recipes/fetchRecipes',
    async (searchTerm)=>{
        const url="https://api.spoonacular.com/recipes/complexSearch";
        const apiKey= import.meta.env.VITE_API_KEY;
        const res=await axios.get(`${url}?query=${searchTerm}&apiKey=${apiKey}`);
        return res.data.results
    }

);

export const fetchRandomRecipes = createAsyncThunk(
  'recipes/fetchRandomRecipes',
  async () => {
    const url = "https://api.spoonacular.com/recipes/random";
    const apiKey = import.meta.env.VITE_API_KEY;
    const res = await axios.get(`${url}?number=30&apiKey=${apiKey}`);
    return res.data.recipes;
  }
);

export const fetchRecipeDetails = createAsyncThunk(
  'recipes/fetchRecipeDetails',
  async (recipeId) => {
    const url = `https://api.spoonacular.com/recipes/${recipeId}/information`;
    const apiKey = import.meta.env.VITE_API_KEY;
    const res = await axios.get(`${url}?includeNutrition=true&apiKey=${apiKey}`);
    return res.data; // full detailed recipe data
  }
);


const searchSlice = createSlice({
                                    name: 'recipes',
                                    initialState: {
                                        items: [], 
                                        selectedRecipe: null,  
                                        loading: false,
                                        error: null,
                                    },
                                    reducers: {},
                                    extraReducers:(builder)=>{
                                                        builder.addCase(fetchRecipes.pending,(state)=>{
                                                                    state.loading=true;
                                                                })
                                                        .addCase(fetchRecipes.fulfilled,(state,action)=>{
                                                                state.loading = false;
                                                                    state.items = action.payload;  
                                                                })
                                                        .addCase(fetchRandomRecipes.fulfilled, (state, action) => {
                                                            state.loading = false;
                                                            state.items = action.payload; // load random recipes
                                                            })
                                                        .addCase(fetchRecipes.rejected,(state, action) => {
                                                                state.loading = false;
                                                                state.error = action.error.message;
                                                            })
                                                            .addCase(fetchRecipeDetails.pending, (state) => {
                                                                state.loading = true;
                                                                state.error = null;
                                                            })
                                                            .addCase(fetchRecipeDetails.fulfilled, (state, action) => {
                                                                state.loading = false;
                                                                 state.selectedRecipe = action.payload;
                                                            })
                                                            .addCase(fetchRecipeDetails.rejected, (state, action) => {
                                                                state.loading = false;
                                                                state.error = action.error.message;
                                                            });
                                                            
                                              },
                                 });
export default searchSlice.reducer;