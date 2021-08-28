import { API_URL } from "../utils/constants";

export const singleHero = async id => {
    try {
        return {
          success: true,
          data: await fetch(`${API_URL}/${id}`).then(res => res.json())
        //   data: await Promise.all(heroIds.map(heroId => {
        //     return fetch(`${API_URL}/${heroId}`)
        //       .then(res => res.json())
        //   })),
        //   from,
        //   to
        }
      } catch (err) {
        return {
          success: false,
          error: 'Could not fetch data',
        }
      }
}
