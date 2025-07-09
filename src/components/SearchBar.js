import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div style={styles.searchContainer}>
      <input
        type="text"
        placeholder="جستجوی محصول..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={styles.searchInput}
      />
      <span style={styles.searchIcon}>🔍</span>
    </div>
  );
}

const styles = {
  searchContainer: {
    position: 'relative',
    width: '100%',
    maxWidth: '400px',
    marginBottom: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  searchInput: {
    width: '100%',
    padding: '12px 40px 12px 16px',
    fontSize: '16px',
    borderRadius: '25px',
    border: '2px solid #007bff',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  searchIcon: {
    position: 'absolute',
    right: '15px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '20px',
    color: '#007bff',
    pointerEvents: 'none',
  },
};

export default SearchBar;
