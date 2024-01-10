import React from 'react'
import './SearchBar.css';
import search from './Assets/search.svg';

const SearchBar = ({setResult, keyword, setkeyword}) => {
    function printText(event) {
        event.preventDefault();
        setkeyword(event.target.value)
        fetch('https://raw.githubusercontent.com/sumit-raghukant-soni/XMLData/main/JSONData.json')
            .then((searchResult) => searchResult.json())
            .then((searchResult) => {
                const value = event.target.value
                const filteredData = searchResult.students.filter((data) => {
                    return value &&
                        data.Name.substring(0, value.length).toLowerCase() === value.toLowerCase()
                })
                setResult(filteredData)
            })
    }

    return (
        <form>
            <h2>SearchBar</h2>
            <div className='SearchBar'>
                <img src={search} alt="Search Icon" />
            <input type="text" name="" id="" value={keyword.value} onChange={e => printText(e)} />
            </div>
        </form>
    )
}

export default SearchBar