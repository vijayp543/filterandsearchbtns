import React from 'react';

const SearchFilterControls = ({ searchTerm, filterTerm, handleSearchChange, handleFilterChange }) => {
  return (
    <div className="controls">
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <select value={filterTerm} onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="Cloud Computing">Cloud Computing</option>
        <option value="DevOps">DevOps</option>
        <option value="Programming">Programming</option>
        <option value="Containers">Containers</option>
        <option value="Infrastructure Automation">Infrastructure Automation</option>
      </select>
    </div>
  );
};

export default SearchFilterControls;
