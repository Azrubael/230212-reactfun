import React from 'react'

const MySelect = ({options, defaultValue, value, onChange}) => {
  return (
    <select
      key={value.toString()}
      value={value}
      onChange = {event => onChange(event.target.value)}
    >
      <option disabled={ false } value="">{ defaultValue }</option>
      {options.map(option =>
        <option key={option.value.toString()} value={ option.value }>
          { option.name }
        </option>
      )}
    </select>
  )
}

export default MySelect