import { checkError, client } from './client';

export async function fetchCountries(name) {
  const resp = await client
    .from('countries')
    .select('*')
    .ilike('name', `%${name}%`);
  
  return checkError(resp);
}