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
    setSort,
    loading
  } = useCountries();

  const display = () => {
    if (loading) return <div className="loader"></div>;
    return (
      <div id='countries'>
        {filterCountries().map(country => <CountryCard key={country.id} { ...country } />)}
      </div>
    );
  };

  return (
    <main>
      <h1>Flags of the World</h1>
      <Filter {...{ searchTerm, setSearchTerm, continent, setContinent, setSort }}/>
      {display()}
    </main>
  );
}