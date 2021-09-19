import * as React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inpuValue, setInpuValue] = useState('');

    const handleInputChange = ((e) => {
        setInpuValue(e.target.value)
    });

    const handleSubmit = ((e) => {
        e.preventDefault();

        if (inpuValue.trim().length > 2) {
            setCategories((categ) => [inpuValue, ...categ]);
            setInpuValue('');
        }

    });

    return (

        <form onSubmit={handleSubmit}>

            <input
                type={'text'}
                value={inpuValue}
                onChange={handleInputChange}
            />

        </form>

    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};