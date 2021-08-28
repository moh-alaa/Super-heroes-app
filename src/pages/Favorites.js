import React, { useState, useEffect } from 'react'
import {FavoriteStore} from "../models/FavoriteStore";
import {fetchHeroesById} from "../services/fetch-heroes-by-id";
import {HeroItem} from "../components/HeroItem/HeroItem";

export default function Favorites() {
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState(() => FavoriteStore.load());
  const [heroes, setHeroes] = useState([]);

  const handleFavorite = value => {
    if (favorites.includes(value)) {
      setFavorites(FavoriteStore.remove(value))
    } else {
      setFavorites(FavoriteStore.add(value))
    }
  }

  useEffect(() => {
    if (favorites.length === 0) return;

    setLoading(true)
    fetchHeroesById(favorites)
      .then(({ success, data }) => {
        if (success) {
          setHeroes(data)
        }
        setLoading(false)
      })
      .catch(() => setLoading(false))

  }, []);

  return (
    <div className="container">
      <h2>Favorites</h2>
      {loading && <div>Loading favorites...</div>}
      {
        !loading && heroes.length === 0 && (
          <div className="text-center grey">
            <h3>The favorite is empty</h3>
          </div>
        )
      }
      <ul className="unstyled-list">
        {
          heroes.map(hero => {
            const favorite = favorites.includes(hero.id);
            return (
              <HeroItem
                key={`item-${hero.id}`}
                hero={hero}
                favorite={favorite}
                onFavorite={handleFavorite}
              />
            )
          })
        }
      </ul>
    </div>
  )
}
