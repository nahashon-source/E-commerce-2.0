import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto mb-8">
      <div className="flex items-center border rounded-lg overflow-hidden shadow-sm">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          className="flex-1 px-4 py-2 focus:outline-none"
          aria-label="Search products"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 hover:bg-blue-700"
        >
          Search
        </button>
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="ml-2 text-gray-600 hover:text-gray-800"
          >
            Clear
          </button>
        )}
      </div>
    </form>
  );
}

export default SearchBar;
