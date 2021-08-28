import PropTypes from 'prop-types'
import debounce from 'lodash.debounce';

const DEBOUNCE_MS = 250;

export const SearchInput = props => {
  const { onChange } = props;

    const handleChange = debounce(e => {
      const { value } = e.target
      onChange(value)
    }, DEBOUNCE_MS)

    return (
      <div className="flex flex-align">
        <input
          aria-label="search-input"
          onChange={handleChange}
          className="flex-1"
          placeholder="Search for heroes by name ..." />
      </div>
    )
}

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
}
