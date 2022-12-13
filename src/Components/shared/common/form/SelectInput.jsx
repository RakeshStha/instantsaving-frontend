import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = (props) => {
    let {name, onChange, label, labelClass, disableLabel, formClass, value, error, options, defaultValue, disabled, icon, required, className, hideChoice} = props;

    return (

        <>
            <div className={`${formClass ? formClass : ""}`}>
                {disableLabel ? null : <label className={labelClass} for={name ? name : label}>{label ? label : ''} {label && required && <span className="text-danger">*</span>}</label>}
                <select className={`form-select ${className} ${error ? 'is-invalid' : ''}`}
                    name={name} id={name}
                    onChange={onChange}
                    value={value}
                    defaultValue={defaultValue}
                    disabled={disabled}
                    required={required}
                    lang="en">
                        
                    {hideChoice ? '' : <option>{icon ? icon :  label ? `--- Select ${label} ---` : `--- Select ${name} ---`}</option> }
                    {options && options.map(items => {
                        return <option value={items.link ? items.link : items.code ? items.code : items.value ? items.value : items.id}>{items?.link ? items?.link :items.name}</option>
                    })}
                </select>
                <div className="invalidBox" style={{minHeight:'24px',position:'absolute'}}>
                    {error && <small className="text-danger">{error}</small>}
                </div>
            </div>
        </>
    )
}

SelectInput.propTypes = {
    name: PropTypes.string,
    value: PropTypes.any,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.any.isRequired,
    checked: PropTypes.bool.isRequired,
    disabled: PropTypes.bool,
    defaultValue: PropTypes.any,
    options: PropTypes.array.isRequired,
    required: PropTypes.bool.isRequired
};

export default SelectInput