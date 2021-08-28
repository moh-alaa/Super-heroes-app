import React from 'react'
import { render, waitFor, within, fireEvent } from '@testing-library/react'
import {BrowserRouter} from "react-router-dom";
import {HeroList} from "../components/HeroList/HeroList";

describe('HeroList component', () => {
  test('rendering HeroList', async () => {
    const utils = render(
      <BrowserRouter>
        <HeroList />
      </BrowserRouter>
    );
    expect(utils.getByText('Heroes list')).toBeInTheDocument();
    expect(utils.getByTestId('sort-asc-desc')).toBeInTheDocument();

    await waitFor(() => {
      expect(utils.getByLabelText('hero-list').childElementCount).toBe(8)
    })
  })

  test('toggle favorite button', async () => {
    const utils = render(
      <BrowserRouter>
        <HeroList />
      </BrowserRouter>
    );
    await waitFor(() => {
      const heroItem = utils.getByLabelText('hero-list').firstChild;
      fireEvent.click(within(heroItem).getByLabelText('favorite-icon'))
      expect(within(heroItem).getByLabelText('favorite-icon')).toHaveClass('icon-button')
    })
  })

  test('next button', async () => {
    const utils = render(
      <BrowserRouter>
        <HeroList />
      </BrowserRouter>
    );

    fireEvent.click(utils.getByText('Next (2)'))

    expect(utils.getByRole('button', {
      name: /Next \(3\)/i
    })).toBeInTheDocument()

    fireEvent.click(utils.getByText('Previous'))

    expect(utils.getByRole('button', {
      name: /Next \(2\)/i
    })).toBeInTheDocument()
  })
})
