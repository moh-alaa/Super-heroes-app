import { API_URL } from "../utils/constants";

export const searchHeroes = async searchText => {
 return fetch(`${API_URL}/search/${searchText}`)
   .then(res => res.json())
}
