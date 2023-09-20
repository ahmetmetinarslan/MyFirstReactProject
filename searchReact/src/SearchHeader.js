import React from 'react';
import { useState } from 'react';

export default function SearchHeader({ Search }) {
    const [valueInput, setValueInput] = useState('');
    const handleFromSubmit = (event) => {
        event.preventDefault(); // formun sayfayı yenilemesi engellenidi.
        Search(valueInput);
    }
    const handleChange = (event) => {
        setValueInput(event.target.value);
    }
  return (
    <div className='searchDiv'>
        <form className='searchForm' onSubmit={handleFromSubmit}>
            <label for="search">What are you looking for?</label>
            <p for="search">Press enter to find what you are looking for</p>
            <input value={valueInput} type="search" pattern=".*\S.*" required onChange={handleChange} />
            <span class="text">examples; car, tree, plane</span>
        </form> 
    </div>
  )
}
