import { useEffect, useState } from 'react';
import { fetchCountries } from '../services/countries';

export function useCountries() {
  const [searchTerm, setSearchTerm] = useState('');
  const [continent, setContinent] = useState('');
  const [countries, setCountries] = useState([]);
  const [sort, setSort] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData(name, sort) {
      try {
        setLoading(true);
        const data = await fetchCountries(name, sort);
        setCountries(data);
        setLoading(false);
      }
      catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    }
    fetchData(searchTerm, sort);
  }, [searchTerm, sort]);

  const filterCountries = () => {
    return continent ? countries.filter((country) => country.continent === continent) : countries;
  };

  return { filterCountries, searchTerm, setSearchTerm, continent, setContinent, sort, setSort, loading, setLoading };
}