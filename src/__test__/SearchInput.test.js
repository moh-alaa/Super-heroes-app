import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { SearchInput } from "../components/SearchInput/SearchInput";


test('rendering SearchInput', async () => {
  const handleChange = jest.fn();
  const utils = render(<SearchInput onChange={handleChange} />);
  const input = utils.getByLabelText('search-input')
  const value = 'iron man'
  fireEvent.change(input, {target: { value }})
  expect(input.value).toBe(value)
})
