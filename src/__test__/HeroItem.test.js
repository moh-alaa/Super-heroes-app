import React from 'react'
import { render } from '@testing-library/react'
import {HeroItem} from "../components/HeroItem/HeroItem";
import {BrowserRouter} from "react-router-dom";

describe('HeroItem component', () => {
  test('rendering HeroItem', async () => {
    const heroData = {
      id: "1",
      name: 'iron man',
      biography: {
        'publisher': "Richard Milhouse Jones",
      },
      powerstats: {
        "intelligence": "38",
        "strength": "100",
        "speed": "17",
        "durability": "80",
        "power": "24",
        "combat": "64"
    },
      image: {
        url: 'image'
      }
    }
    const handleFavorites = jest.fn();

    const utils = render(
      <BrowserRouter>
        <HeroItem hero={heroData} favorite={true} onFavorite={handleFavorites} />
      </BrowserRouter>
    );
    const heroNameElement = utils.getByLabelText('hero-item-name')
    expect(heroNameElement.textContent).toBe(heroData.name)
    const heroImageElement = utils.getByLabelText('hero-item-image')
    expect(heroImageElement.src).toBe(`http://localhost/image`)
    expect(utils.getByLabelText('favorite-icon')).toHaveClass('favorite')
  })
})
