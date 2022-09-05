export interface ICocktailList {
    id: string,
    name: string,
    image: string,
    info: string,
    glass: string,
  }

export interface ICocktailSingle extends ICocktailList {
    category: string,
    instructions: string,
    ingredients: string[]
}


  export interface ICocktailData {
        idDrink: string,
        strDrinkThumb: string
        strDrink:string,
        strAlcoholic:string,
        strGlass: string,
        strCategory: string,
        strInstructions: string,
        strIngredient1: string,
        strIngredient2: string,
        strIngredient3: string,
        strIngredient4: string,
        strIngredient5: string
  }

  export interface ICocktailsData {
      drinks: ICocktailData[]
  }
