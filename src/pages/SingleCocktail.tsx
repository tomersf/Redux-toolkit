import React, {useState, useEffect, useRef} from 'react'
import {Link, useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

import {fetchSingleCocktail} from '../redux/features/cocktailSlice'
import type {RootState, AppDispatch} from '../redux/store'
import {ICocktailSingle} from '../interfaces'

type Props = {}

const SingleCocktail = (props: Props) => {
  const {cocktail, loading} = useSelector((state: RootState) => ({...state.app}))
  const [modifiedCocktail, setModifiedCocktail] = useState<ICocktailSingle | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const idRef = useRef(useParams().id)

  useEffect(() => {
    if(idRef.current){
      idRef.current = idRef.current.slice(0,-1)
      dispatch(fetchSingleCocktail(idRef.current))
    } ;
  },[idRef,dispatch])

  useEffect(() => {
    if(cocktail) {
      const {
        strDrink: name,
        strDrinkThumb: image,
        strAlcoholic: info,
        strGlass: glass,
        strCategory: category,
        strInstructions: instructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5
      } = cocktail
      const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5]
      const newCocktail = {
        name,
        id: idRef.current || 'null',
        image,
        info,
        category,
        glass,
        instructions,
        ingredients
      } ;
      setModifiedCocktail(newCocktail)
    } else {
      setModifiedCocktail(null)
    }
  }, [idRef.current, cocktail])

  if(!modifiedCocktail) {
    return <h2 className="section-title">No Cocktail To Display</h2>
  } else {
    const {category,glass,image,info,ingredients,instructions,name} = modifiedCocktail
    return (
      <>
      {loading ? (
        <div className="spinner-grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ): (
        <section className="section cocktail-section">
          <Link to='/'>
            <button className="btn btn-danger" style={{marginTop: "2rem"}}>
              Go Back
            </button>
          </Link>
          <h2 className="section-title">{name}</h2>
          <div className="drink">
            <img src={image} alt={name} />
            <div className="drink-info">
              <p>
                <span className="drink-data">Name: </span> {name}
              </p>
              <p>
                <span className="drink-data">Category: </span> {category}
              </p>
              <p>
                <span className="drink-data">Info: </span> {info}
              </p>
              <p>
                <span className="drink-data">Glass: </span> {glass}
              </p>
              <p>
                <span className="drink-data">Instructions: </span> {instructions}
              </p>
              <p>
                <span className="drink-data">Ingredients: </span>
                {ingredients && ingredients.map((item,index) =>{
                  return item ? <span key={index}>{item} </span> : null
                })}
              </p>
            </div>
          </div>
        </section>
      )}
      </>
    )
  }
}

export default SingleCocktail