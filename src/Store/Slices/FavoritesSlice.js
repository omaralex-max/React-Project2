import { createSlice } from "@reduxjs/toolkit";


const FavoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        favList: [] ,
        count: 0
    },
    reducers: {
        addMovieToList(state, action) {
            const new_movie = action.payload;
            
                state.favList.push({ ...new_movie, count: 1 });
            
        },
        removeMovieFromList (state, action) {
            const movie_id = action.payload
            state.favList = state.favList.filter(movie => movie.id !== movie_id)
        
        },
        emptyList (state) {
            state.favList = []
        
        }
    }
})

export const { addMovieToList, removeMovieFromList, emptyList } = FavoritesSlice.actions;
export default FavoritesSlice.reducer;