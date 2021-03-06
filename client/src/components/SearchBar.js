import React, { useState } from "react"
import { Link } from "react-router-dom"

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="search-bar__container">
      <form className="search-bar">
        <input
          type="text"
          spellCheck="false"
          className="search-bar__input"
          placeholder="Search"
          aria-label="search"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />

        <Link
          to={{
            pathname: `/Search/${searchTerm}`
          }}
        >
          <button type="submit">
            <i
              className="search-bar__submit fas fa-search"
              aria-label="submit search"
            ></i>
          </button>
        </Link>
      </form>
    </div>
  )
}

export default SearchBar
