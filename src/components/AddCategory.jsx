import React, { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputValue = (event) => {
        setInputValue(event.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length <= 1) return;

        // setCategories(categories => [inputValue, ...categories])
        onNewCategory(inputValue.trim());
        setInputValue('');

    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder='Search Gif'
                value={inputValue}
                onChange={handleInputValue}
            />
        </form>
    )
}