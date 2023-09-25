import React from 'react';
import { useState } from 'react';

export default function SearchHeader({ Search }) {
    // State kullanarak input değerini takip ediyoruz
    const [valueInput, setValueInput] = useState('');
    
    // Form gönderildiğinde çalışacak fonksiyon
    const handleFromSubmit = (event) => {
        event.preventDefault(); // formun sayfayı yenilemesi engellenidi.
        Search(valueInput); // search fonksiyonuna input değerini iletiyoruz.
    }
     // Input değeri değiştiğinde çalışacak fonksiyon
    const handleChange = (event) => {
        setValueInput(event.target.value); // Input değerini güncelliyoruz.
    }
    //return edilen html yapısı
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
