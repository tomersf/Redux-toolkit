import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

interface CocktailData {
    idDrink: string,
    strDrinkThumb: string
    strDrink:string,
    strAlcoholic:string,
    strGlass: string,
}

interface CocktailsData {
    drinks: CocktailData[]
}

export const fetchCocktails = createAsyncThunk('cocktails/fetchCocktails',
async () => {
    const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s")
    return (await response.json()) as CocktailsData
})

type SliceState = {
    cocktails: CocktailData[],
    cocktail: CocktailData[],
    loading: false | true,
    error: null | unknown
}

const initialState: SliceState = {
    cocktail: [],
    cocktails: [],
    loading: false,
    error: null
}

const cocktailSlice = createSlice({
    name: 'cocktails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCocktails.pending, (state, action) => {
            state.loading = true
        }).addCase(fetchCocktails.fulfilled, (state, action) => {
            state.cocktails = action.payload.drinks
            state.loading = false
        }).addCase(fetchCocktails.rejected, (state, action) => {
            state.error = action.payload
            state.loading = false
        })
    }
})

export default cocktailSlice.reducer