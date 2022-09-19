import './Main.css';

import { useEffect, useState } from 'react';
import { fetchCountries } from '../../services/countries';
import CountryCard from '../CountryCard/CountryCard';
import Filter from '../Filter/Filter';

export default function Main() {
  const [searchTerm, setSearchTerm] = useState('');
  const [continent, setContinent] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchData(name) {
      const data = await fetchCountries(name);
      setCountries(data);
    }
    fetchData(searchTerm);
  }, [searchTerm]);

  const filterCountries = () => {
    return continent ? countries.filter((country) => country.continent === continent) : countries;
  };

  return (
    <main>
      <Filter {...{ searchTerm, setSearchTerm, continent, setContinent }}/>
      <div id='countries'>
        {filterCountries().map(country => <CountryCard key={country.id} { ...country } />)}
      </div>
    </main>
  );
}