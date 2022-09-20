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
    fetchData(sort);
  }, [sort]);

  const filterCountries = () => {
    const regex = new RegExp(`.*${searchTerm}.*`, 'i');

    return continent ?
      countries.filter((country) => country.continent === continent && country.name.match(regex)) :
      countries.filter((country) => country.name.match(regex));
  };

  return { filterCountries, searchTerm, setSearchTerm, continent, setContinent, sort, setSort, loading };
}