import { checkError, client } from './client';

export async function fetchCountries() {
  const resp = await client
    .from('countries')
    .select('*');
  
  console.log(resp.data[0]);
  return checkError(resp);
}