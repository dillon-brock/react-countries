import './Main.css';

import CountryCard from '../CountryCard/CountryCard';
import Filter from '../Filter/Filter';
import { useCountries } from '../../hooks/useCountries';

export default function Main() {

  const { filterCountries, searchTerm, setSearchTerm, continent, setContinent, sort, setSort } = useCountries();

  return (
    <main>
      <Filter {...{ searchTerm, setSearchTerm, continent, setContinent, setSort }}/>
      <div id='countries'>
        {filterCountries().map(country => <CountryCard key={country.id} { ...country } />)}
      </div>
    </main>
  );
}