import React from 'react'
import './Row.css';

const Row = ({data, id}) => {
  return (
    <tr id = {id}>
        <td className='data'>{data.Name}</td>
        <td className='data'>{data.Roll}</td>
        <td className='data'>{data.City}</td>
    </tr>
  )
}

export default Row