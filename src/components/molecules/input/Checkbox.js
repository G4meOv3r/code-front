import React from 'react'
import PropTypes from 'prop-types'
import classNames from '../../../utils/classNames'
import Text from '../../atoms/text/Text'
import '../../../styles/molecules/input/checkbox.css'

function Checkbox ({ name, checked, label, className, ...otherProps }) {
    return (
        <label
            className={classNames('input-checkbox', checked ? 'input-checkbox-checked' : false, className)}
            {...otherProps}
        >
            <input
                name={name}
                type={'checkbox'}
                checked={checked}
            />
            <div className={'input-checkbox-marker'}/>
            <Text style={{ userSelect: 'none' }}> {label} </Text>
        </label>
    )
}
Checkbox.propTypes = {
    name: PropTypes.string,
    checked: PropTypes.string,
    label: PropTypes.string,
    className: PropTypes.string
}
export default Checkbox
