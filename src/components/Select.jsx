import React, { useState } from 'react'
import styled from 'styled-components'

const Label = styled.label`
  padding: 10px;
  margin-right: 5px;
`
const Select = () => {
  const format = [
    { name: 'Bigbox', value: 'bigbox' },
    { name: 'Skyscraper', value: 'skyscraper' },
    { name: 'Doublebigbox', value: 'doublebigbox' },
    { name: 'Leaderboard', value: 'leaderboard' }
  ]
  const type = [
    { name: 'Product', value: 'product' },
    { name: 'Flyer', value: 'flyer' }
  ]
  const [inputValue, setInputValue] = useState(null || '')
  const [typeValue, setTypeValue] = useState(null || '')
  const [formatValue, setFormatValue] = useState(null || '')
  const addNewTask = (e) => {
    e.preventDefault()
    console.log(JSON.stringify(`{${formatValue}_${typeValue}}:{${inputValue}}`))
  }

  return (
    <div>
      <form>
        <Label>
          Ad Format
          <select
            placeholder="Ad Format"
            onChange={(e) => setFormatValue(e.target.value)}
            value={formatValue}
          >
            {format.map((format, index) => (
              <option key={index} value={format.value}>
                {format.name}
              </option>
            ))}
          </select>
        </Label>
        <Label>
          Ad Type
          <select
            placeholder="Ad Type"
            onChange={(e) => setTypeValue(e.target.value)}
            value={typeValue}
          >
            {type.map((type, index) => (
              <option key={index}>{type.name}</option>
            ))}
          </select>
        </Label>
        <Label>
          Image link
          <input
            placeholder="Image link"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Label>
        <button onClick={addNewTask}>Upload</button>
      </form>
      <div>{`{${formatValue}_${typeValue}}:{${inputValue}}`}</div>
    </div>
  )
}
export default Select
