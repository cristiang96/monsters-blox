import "./search-box.styles.css";

export const SearchBox = ({ placeholder, changeFunction }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={changeFunction}
    />
  );
};
