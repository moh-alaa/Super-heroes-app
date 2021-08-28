import React from 'react'
import {fireEvent, render, waitFor} from '@testing-library/react'
import {BrowserRouter} from "react-router-dom";
import Search from "../pages/Search";

describe('Search component', () => {
  test('rendering Search', async () => {
    const utils = render(
      <BrowserRouter>
        <Search />
      </BrowserRouter>
    );

    expect(utils.getByText('No results found')).toBeInTheDocument()
    expect(utils.getByLabelText('search-input')).toBeInTheDocument()
  })

  test('Search for heroes', async () => {
    const utils = render(
      <BrowserRouter>
        <Search />
      </BrowserRouter>
    );

    fireEvent.change(utils.getByLabelText('search-input'), {target: { value: 'Allan' }});
    await waitFor(() => {
      expect(utils.getByLabelText('hero-list').childElementCount).toBe(1)
    })
  })
})
