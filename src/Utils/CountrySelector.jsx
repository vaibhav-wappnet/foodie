import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from "react-select-country-list";

const CountrySelector = () => {

  const [value, setValue] = useState("")

  const options = useMemo(() => countryList().getData(), [])


  return (
    <Select className="country-select w-50 text-dark" options={options} value={value}
      onChange={() => setValue(value)} />
  )
}

export default CountrySelector;