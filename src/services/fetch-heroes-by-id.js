import {API_URL} from "../utils/constants";

export const fetchHeroesById = async heroIds => {
  if (!Array.isArray(heroIds) || heroIds.length === 0) {
    throw new Error('Invalid arguments');
  }
  try {
    return {
      success: true,
      data: await Promise.all(heroIds.map(heroId => {
        return fetch(`${API_URL}/${heroId}`)
          .then(res => res.json())
      })),
    }
  } catch (err) {
    return  {
      success: false,
      error: 'Could not fetch data',
    }
  }
}
