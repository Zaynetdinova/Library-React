import React from 'react'

const Search = () => {
  return (
    <div className='Search-block'>
      <nav>
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input id="search" placeholder='НАЙТИ' type="search" required/>
              <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    </div>
  )
}

export default Search