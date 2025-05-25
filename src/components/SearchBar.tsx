type SearchBarProps = {
  placeholder: string;
  label: string;
  search: string;
  onSearch: React.Dispatch<React.SetStateAction<string>>;
  isStockedOnly: boolean;
  onIsStockedOnly: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SearchBar({
  placeholder,
  label,
  search,
  onSearch,
  isStockedOnly,
  onIsStockedOnly,
}: SearchBarProps) {
  return (
    <form>
      <input
        className="form-control"
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
      <input
        className="form-check-input"
        id="checkbox"
        type="checkbox"
        checked={isStockedOnly}
        onChange={(e) => onIsStockedOnly(e.target.checked)}
      />
      <label className="form-check-label" htmlFor="checkobx">
        {label}
      </label>
    </form>
  );
}
