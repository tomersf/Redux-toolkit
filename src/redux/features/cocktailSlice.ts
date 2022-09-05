import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

import {ICocktailData, ICocktailsData} from '../../interfaces'

export const fetchCocktails = createAsyncThunk('cocktails/fetchCocktails',
async () => {
    const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s")
    return (await response.json()) as ICocktailsData
})

export const fetchSingleCocktail = createAsyncThunk('cocktails/fetchSingleCocktails',
async (id: string) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    return (await response.json()) as ICocktailsData
})

type SliceState = {
    cocktails: ICocktailsData,
    cocktail: ICocktailData,
    loading: false | true,
    error: null | unknown
}

const initialState: SliceState = {
    cocktail: {} as ICocktailData,
    cocktails: {drinks: []},
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
            state.cocktails = action.payload
            state.loading = false
        }).addCase(fetchCocktails.rejected, (state, action) => {
            state.error = action.payload
            state.loading = false
        }).addCase(fetchSingleCocktail.pending, (state, action) => {
            state.loading = true
        }).addCase(fetchSingleCocktail.fulfilled, (state, action) => {
            state.cocktail = action.payload.drinks[0]
            state.loading = false
        }).addCase(fetchSingleCocktail.rejected, (state, action) => {
            state.error = action.payload
            state.loading = false
        })
    }
})

export default cocktailSlice.reducer