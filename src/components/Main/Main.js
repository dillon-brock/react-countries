import './Main.css';

import { useEffect, useState } from 'react';
import { fetchCountries } from '../../services/countries';
import CountryCard from '../CountryCard/CountryCard';

export default function Main() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCountries();
      setCountries(data);
    }
    fetchData();
  }, []);

  return (
    <main>
      {countries.map(country => <CountryCard key={country.id} { ...country } />)}
    </main>
  );
}