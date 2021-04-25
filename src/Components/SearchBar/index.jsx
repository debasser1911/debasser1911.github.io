const SearchBar = ({
  setSearchString,
  searchString = "",
  placeholder = "",
}) => {
  return (
    <div className="user-search-bar flex justify-center p-5">
      <input
        className="border-2 border-gray-500 w-2/6  p-1"
        placeholder={placeholder}
        type="text"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
        max={100}
      />
    </div>
  );
};
export default SearchBar;
