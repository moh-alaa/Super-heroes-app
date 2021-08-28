const FAVORITE_KEY = 'favoriteHeroes';

export class FavoriteStore {
  static load() {
    try {
      const favorites = JSON.parse(localStorage.getItem(FAVORITE_KEY));
      if (!Array.isArray(favorites)) return [];

      return favorites
    } catch {
      return []
    }
  }

  static add(value) {
    const favorites = this.load();

    if (!value) return favorites;


    const updateFavorites = [value, ...favorites]
    localStorage.setItem(FAVORITE_KEY, JSON.stringify(updateFavorites));

    return updateFavorites
  }

  static remove(value) {
    const favorites = this.load();
    if (!value) return favorites;

    const updateFavorites = favorites.filter(favorite => favorite !== value)
    localStorage.setItem(FAVORITE_KEY, JSON.stringify(updateFavorites))

    return updateFavorites;
  }

}
