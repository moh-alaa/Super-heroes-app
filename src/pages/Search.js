import { useState } from "react";
import { SearchInput } from "../components/SearchInput/SearchInput";
import {searchHeroes} from "../services/search-heroes";
import {HeroItem} from "../components/HeroItem/HeroItem";

export default function Search() {
  const [heroes, setHeroes] = useState([])

  const handleSearch = value => {
    searchHeroes(value)
      .then(({ response, results }) => {
        if (response !== 'success') {
          setHeroes([])
        } else {
          setHeroes(results)
        }
      })
  }
  return (
    <div className="page">
      <div className="container">
        <h2>Search for heroes </h2>
        <SearchInput onChange={handleSearch} />
        <br />
        {
          heroes.length === 0 && (
            <div className="text-center grey">
              <h3>No results found</h3>
            </div>
          )
        }
        <ul aria-label="hero-list" className="unstyled-list">
          {
            heroes.map(hero => {
              return <HeroItem key={hero.id} favorite={false} hero={hero} />
            })
          }
        </ul>
      </div>

    </div>
  );
}
