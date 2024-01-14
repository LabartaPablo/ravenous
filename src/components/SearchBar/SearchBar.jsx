import React, { useState } from 'react';
import './SearchBar.css'

const SearchBar = () => {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('best_match');

  const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count',
  };

  const getSortByClass = (sortByOption) => {
    return sortBy === sortByOption ? 'active' : '';
  };

  const handleSortByChange = (sortByOption) => {
    setSortBy(sortByOption);
  };

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearch = () => {
    // Aquí puedes realizar la búsqueda con los términos, la ubicación y la opción de clasificación
    console.log('Searching...', term, location, sortBy);
  };

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>
          {Object.keys(sortByOptions).map((sortByOption) => (
            <li
              key={sortByOptions[sortByOption]}
              className={getSortByClass(sortByOptions[sortByOption])}
              onClick={() => handleSortByChange(sortByOptions[sortByOption])}
            >
              {sortByOption}
            </li>
          ))}
        </ul>
      </div>
      <div className="SearchBar-fields">
        <input placeholder="Search Businesses" onChange={handleTermChange} />
        <input placeholder="Where?" onChange={handleLocationChange} />
      </div>
      <div className="SearchBar-submit">
        <button onClick={handleSearch}>Let's Go</button>
      </div>
    </div>
  );
};

export default SearchBar;
