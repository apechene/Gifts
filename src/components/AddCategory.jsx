import { useState } from "react";
import { GifExpertApp } from "../GifExpertApp";

export const AddCategory = ({ onNewCategory }) => {  

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
        setInputValue(e.target.value);  
    }  

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length === 0) {
            return;
        }
       // setCategories( cats => [ inputValue, ...cats]);
       //console.log(inputValue);
        setInputValue('');
        onNewCategory(inputValue.trim() );
    }

    return (    
        <form action="" onSubmit={handleSubmit}>
      
        <h2>AddCategory</h2>
        <input type="text" placeholder="Buscar Gifts" value={inputValue} onChange={ handleInputChange }/>
        </form>
    )
}