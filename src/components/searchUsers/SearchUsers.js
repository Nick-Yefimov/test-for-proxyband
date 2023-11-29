const SearchUsers = ({ searchTerm, setSearchTerm }) => {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search by username"
      value={searchTerm}
      onChange={handleSearch}
    />
  );
};

export default SearchUsers;
