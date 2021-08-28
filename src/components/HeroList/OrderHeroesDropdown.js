import React  from 'react';
import PropTypes from 'prop-types'

export const OrderHeroesDropdown = props => {
  const { onChange } = props;

  const handleSortDirection = e => {
    const { value } = e.target
    onChange(value)
  }

  return (
    <div className="flex flex-align">
      <span>Order: </span>
      <div className="dropdown">
        <select
          name="sort-asc-desc"
          className="dropdown-select"
          data-testid="sort-asc-desc"
          onChange={handleSortDirection}
          defaultValue={1}
        >
          <option value={1}>Asc</option>
          <option value={-1}>Desc</option>
        </select>
      </div>
    </div>
  )
}

OrderHeroesDropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
}
