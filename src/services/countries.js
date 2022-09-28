import { checkError, client } from './client';

export async function fetchCountries(sort) {
  const query = client
    .from('countries')
    .select('*');
  
  if (sort) query.order('name');

  const response = await query;
  return checkError(response);
}