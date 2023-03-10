import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weigth, index, hexColor}) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;
  return <article className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor:`rgb(${bcg})`}} onClick={() => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
    setTimeout(() => {
      setAlert(false);
    }, 3000)
  }}>
  <p className='percent-value'>
    {weigth}%
  </p>
  <p  className='color-value'>#{hexValue}</p>
  {alert && <p className='alert'>copied to clipboard</p>}
  </article>;
}

export default SingleColor
