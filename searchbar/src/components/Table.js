import React from 'react'
import Row from './Row'
import './Table.css'

const Table = (result) => {
  return (
    <table>
        {
        result.result.length ? 
        <>
        <thead><td>Roll No.</td><td>Name</td><td>City</td></thead>
        <tbody>
            {
              result.result.map((data, key) => {
                return <Row data={data} id={key} />;
            })
            }
        </tbody>
        </> 
        : <tbody><tr><td colSpan={3} className='NoData'>No Data Found</td></tr></tbody>
      }
    </table>
  )
}

export default Table