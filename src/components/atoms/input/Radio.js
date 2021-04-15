import React from 'react'
import PropTypes from 'prop-types'
import classNames from '../../../utils/helpers/classNames'
import Text from '../../atoms/text/Text'
import '../../../styles/atoms/input/radio.css'

function RadioInput ({ name, checked, label, value, className, ...otherProps }) {
    return (
        <label
            className={classNames('input-radio', checked ? 'input-radio-checked' : false, className)}
            {...otherProps}
        >
            <input
                name={name}
                type={'radio'}
                defaultChecked={checked}
                value={value}
            />
            <div className={'input-radio-marker'}/>
            <Text style={{ userSelect: 'none' }}> {label} </Text>
        </label>
    )
}
RadioInput.propTypes = {
    name: PropTypes.string,
    checked: PropTypes.bool,
    label: PropTypes.string,
    value: PropTypes.any,
    className: PropTypes.string
}
export default RadioInput
