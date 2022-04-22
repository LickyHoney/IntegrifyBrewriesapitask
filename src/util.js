export const BASE_URL = 'https://api.openbrewerydb.org/breweries?';
export const fetchSearchResults = async query => {
  if (query && query.length > 0) {
    const parsedQuery = query.replaceAll(' ', '+');
    const url = `by_name=${parsedQuery}`;
    const res = await fetch(url);
    const resJson = res.json();
    return resJson;
  } else {
    return [];
  }
};
