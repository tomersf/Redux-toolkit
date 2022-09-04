import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 header-title text-success">
            Find Your Favorite Cocktail!
          </span>
        </div>
      </nav>
    </div>
  )
}

export default Header