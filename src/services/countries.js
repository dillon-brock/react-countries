import { checkError, client } from './client';

export async function fetchCountries(name, sort) {
  const query = client
    .from('countries')
    .select('*')
    .ilike('name', `%${name}%`);
  
  if (sort) query.order('name');

  const response = await query;
  return checkError(response);
}