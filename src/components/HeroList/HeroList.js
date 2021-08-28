import React, { useEffect, useState, useRef } from 'react';
import {fetchPaginatedHeroes} from "../../services/fetch-paginated-heroes";
import {HeroItem} from "../HeroItem/HeroItem";
import {OrderHeroesDropdown} from "./OrderHeroesDropdown";
import {FavoriteStore} from "../../models/FavoriteStore";

const PAGINATION_LIMIT = 8;
const MAX_SIZE = process.env.NODE_ENV === 'development' ? 20 : 731

export const HeroList = () => {
  const [loading, setLoading] = useState(false);
  const [startIndex, setStartIndex] = useState(1);
  const [error, setError] = useState(false);
  const [heroes, setHeroes] = useState([]);
  const [favorites, setFavorites] = useState(() => FavoriteStore.load());
  const order = useRef(1);

  const endIndex = Math.min(startIndex + PAGINATION_LIMIT, MAX_SIZE);

  const handleFavorite = value => {
    if (favorites.includes(value)) {
      setFavorites(FavoriteStore.remove(value))
    } else {
      setFavorites(FavoriteStore.add(value))
    }
  }

  useEffect(() => {
    if (startIndex >= MAX_SIZE) return;

    setLoading(true)
    fetchPaginatedHeroes(startIndex, endIndex)
      .then(({ data, success}) => {
        if (success) {
          setHeroes(() => {
            if (order.current === -1) {
              return data.reverse()
            }

            return data;
          })
        } else {
          setError(true)
        }
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [startIndex])

  const disableNext = startIndex >= MAX_SIZE;
  const disablePrev = startIndex <= 1;
  const page = Math.floor((startIndex + PAGINATION_LIMIT) / PAGINATION_LIMIT);

  return (
    <div>
      <div className="flex flex-between flex-align">
        <h2>Heroes list</h2>
        <OrderHeroesDropdown
          onChange={value => {
            order.current = value
            setHeroes([...heroes.reverse()])
          }}
        />
      </div>
      {!loading && error && <div>Something went wrong</div>}
      {loading && !error && <div>Loading heroes...</div>}
      <ul aria-label="hero-list" className="unstyled-list">
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
      <div className="nav-buttons">
        <button
          className="button"
          disabled={disablePrev}
          onClick={() => {
            setStartIndex(Math.max(startIndex - PAGINATION_LIMIT, 1));
          }}
        >
          Previous
        </button>
        <button
          className="button primary"
          disabled={disableNext}
          onClick={() => {
            setStartIndex(endIndex);
          }}>
          Next { disableNext ? '' : `(${page + 1})`}
        </button>
      </div>
    </div>
  )
}
