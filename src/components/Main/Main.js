import './Main.css';

import CountryCard from '../CountryCard/CountryCard';
import Filter from '../Filter/Filter';
import { useCountries } from '../../hooks/useCountries';

export default function Main() {

  const { filterCountries,
    searchTerm,
    setSearchTerm,
    continent,
    setContinent,
    sort,
    setSort,
    loading,
    setLoading
  } = useCountries();

  let display;
  if (loading) {
    display = <div className="loader"></div>;
  }
  else {
    display = (
      <div id='countries'>
        {filterCountries().map(country => <CountryCard key={country.id} { ...country } />)}
      </div>
    );
  }
  return (
    <main>
      <h1>Flags of the World</h1>
      <Filter {...{ searchTerm, setSearchTerm, continent, setContinent, setSort }}/>
      {display}
    </main>
  );
}