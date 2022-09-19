import { useEffect, useState } from 'react';
import { fetchCountries } from '../services/countries';

export function useCountries() {
  const [searchTerm, setSearchTerm] = useState('');
  const [continent, setContinent] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchData(name) {
      try {
        const data = await fetchCountries(name);
        setCountries(data);
      }
      catch (e) {
        console.log(e);
      }
    }
    fetchData(searchTerm);
  }, [searchTerm]);

  const filterCountries = () => {
    return continent ? countries.filter((country) => country.continent === continent) : countries;
  };

  return { filterCountries, searchTerm, setSearchTerm, continent, setContinent };
}