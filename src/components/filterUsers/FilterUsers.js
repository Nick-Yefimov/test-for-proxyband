const FilterUsers = ({ sortOrder, setSortOrder }) => {
  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <button onClick={handleSort}>
      Sort by username ({sortOrder === "asc" ? "asc" : "desc"})
    </button>
  );
};

export default FilterUsers;
