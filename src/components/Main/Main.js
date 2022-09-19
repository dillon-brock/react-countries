import './Main.css';

import { useEffect, useState } from 'react';
import { fetchCountries } from '../../services/countries';
import CountryCard from '../CountryCard/CountryCard';
import Filter from '../Filter/Filter';
import { useCountries } from '../../hooks/useCountries';

export default function Main() {

  const { filterCountries, searchTerm, setSearchTerm, continent, setContinent } = useCountries();

  return (
    <main>
      <Filter {...{ searchTerm, setSearchTerm, continent, setContinent }}/>
      <div id='countries'>
        {filterCountries().map(country => <CountryCard key={country.id} { ...country } />)}
      </div>
    </main>
  );
}