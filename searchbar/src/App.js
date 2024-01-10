import './App.css';
import React from 'react';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import {useState} from 'react';

function App() {
  const [keyword, setkeyword] = useState('');
  const [Result, setResult] = useState([]);

  return (
    <>
      <div className='searchPanel'>
        <SearchBar setResult={setResult} keyword={keyword} setkeyword={setkeyword}/>
        <Table result={Result}/>
      </div>      
    </>
  );
}

export default App;
