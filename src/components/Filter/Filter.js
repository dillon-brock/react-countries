export default function Filter({ continent, setContinent, searchTerm, setSearchTerm }) {
  return (
    <div>
      <select value={continent} onChange={(e) => {
        setContinent(e.target.value);
      }}>
        <option value=''>All</option>
        <option value='North America'>North America</option>
        <option value='South America'>South America</option>
        <option value='Oceania'>Oceania</option>
        <option value='Africa'>Africa</option>
        <option value='Europe'>Europe</option>
        <option value='Antarctica'>Antarctica</option>
        <option value='Asia'>Asia</option>
      </select>
      <input type='text' value={searchTerm} onChange={(e) => {
        setSearchTerm(e.target.value);
      }}></input>
    </div>
  );
}