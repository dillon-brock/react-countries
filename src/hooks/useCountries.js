import { useEffect, useState } from 'react';
import { fetchCountries } from '../services/countries';

export function useCountries() {
  const [searchTerm, setSearchTerm] = useState('');
  const [continent, setContinent] = useState('');
  const [countries, setCountries] = useState([]);
  const [sort, setSort] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData(sort) {
      try {
        setLoading(true);
        const data = await fetchCountries(sort);
        setCountries(data);
        setLoading(false);
        setError('');
      }
      catch (e) {
        setLoading(false);
        setError(e.message);
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

  return { filterCountries, searchTerm, setSearchTerm, continent, setContinent, sort, setSort, loading, error };
}