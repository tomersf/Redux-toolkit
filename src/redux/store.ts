import {configureStore} from "@reduxjs/toolkit"
import CocktailReducer from "./features/cocktailSlice"

const store = configureStore({
    reducer: {
        app: CocktailReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store;