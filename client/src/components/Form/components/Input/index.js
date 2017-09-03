import React from 'react';

const Input = ({ onChange, value, placeholder, id, type }) => (
    <div className="form-group">
        <label htmlFor={id}>{placeholder}</label>
        <input
            type={type}
            className="form-control"
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={id} />
    </div>
);

export default Input;
