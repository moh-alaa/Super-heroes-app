const SUPER_HERO_ACCESS_TOKEN = '10223852126103710';
const OVERCOME_PROXY_URL = 'https://thingproxy.freeboard.io/fetch/'

export const API_URL = process.env.NODE_ENV === 'production' ?
  `${OVERCOME_PROXY_URL}https://superheroapi.com/api/${SUPER_HERO_ACCESS_TOKEN}`
  :
  '/api';
