import { checkError, client } from './client';

export async function fetchCountries() {
  const resp = await client
    .select('*')
  
  return checkError(resp);
}