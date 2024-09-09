// import React from 'react'
import './Search.css'
import { AiOutlineSearch } from 'react-icons/ai'

function Search() {
  return (
    <div className='search'>
      <div className="setContainer container">
        <h3 className="title">
          Which vehicle are you looking for?
        </h3>
        <div className="searchDiv grid">
          <input type="text" className="searchInput" placeholder="Type" />
          <input type="number" className="searchInput" placeholder="Year" />
          <input type="text" className="searchInput" placeholder="Model" />
          <input type="number" className="searchInput" placeholder="Price" />
          <button className="btn primaryBtn flex">
            <AiOutlineSearch className="icon" />
            <span>
              Search
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Search
