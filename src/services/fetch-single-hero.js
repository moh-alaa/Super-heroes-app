import { API_URL } from "../utils/constants";

export const singleHero = async id => {
    try {
        return {
          success: true,
          data: await fetch(`${API_URL}/${id}`).then(res => res.json())
        }
      } catch (err) {
        return {
          success: false,
          error: 'Could not fetch data',
        }
      }
}
