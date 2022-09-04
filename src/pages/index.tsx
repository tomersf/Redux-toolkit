import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchInput from '../components/SearchInput'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
        <SearchInput />
        <CocktailList />
        </div>
  )
}

export default Home