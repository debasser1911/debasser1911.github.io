import "./_styles.scss";

const SearchBar = ({ setSearchString, searchString = "" }) => {
  return (
    <div className="user-search-bar d-flex flex-column justify-content-center">
      <input
        className="lg:w-56 bg-red-600"
        placeholder="search string"
        type="text"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
    </div>
  );
};
export default SearchBar;
