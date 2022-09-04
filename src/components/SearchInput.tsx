import React, {useRef} from 'react'
import './SearchInput.css';

type Props = {}

const SearchInput = (props: Props) => {
    const searchValue = useRef()
  return (
    <section className='section search'>
        <form className="search-form">
            <div className="form-control">
                <label htmlFor="name">
                    Search Cocktail
                </label>
                <input type="text" name='name' id='name' ref={searchValue.current} />
            </div>
        </form>
    </section>
  )
}

export default SearchInput