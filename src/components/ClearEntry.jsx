import React from 'react'
import './ClearEntry.css';

export const ClearEntry = (props) => {
  return (
    <div className='clear-btn' onClick={props.handleClear}>{props.children}</div>
  )
}
