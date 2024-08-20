import {configureStore} from "@reduxjs/toolkit";
import FavoritesSlice from "./Slices/FavoritesSlice";

export default configureStore({
    reducer: {
        
        favList: FavoritesSlice
    }
})