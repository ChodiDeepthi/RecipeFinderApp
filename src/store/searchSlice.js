import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchRecipes=createAsyncThunk
(
    'recipes/fetchRecipes',
    async (searchTerm)=>{
        const url="https://api.spoonacular.com/recipes/complexSearch";
        const apiKey="d6a89bdf0d614d17921328c1310096ad";
        const res=await axios.get(`${url}?query=${searchTerm}&apiKey=${apiKey}`);
        return res.data.results
    }

);

const searchSlice = createSlice({
                                    name: 'recipes',
                                    initialState: {
                                        items: [],   
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
                                                        .addCase(fetchRecipes.rejected,(state, action) => {
                                                            state.loading = false;
                                                            state.error = action.error.message;
                                                        });
                                              },
                                 });
export default searchSlice.reducer;