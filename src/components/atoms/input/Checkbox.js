import React from 'react'
import PropTypes from 'prop-types'
import classNames from '../../../utils/helpers/classNames'
import Text from '../../atoms/text/Text'
import '../../../styles/atoms/input/checkbox.css'

function CheckboxInput ({ name, checked, label, className, ...otherProps }) {
    return (
        <label
            className={classNames('input-checkbox', checked ? 'input-checkbox-checked' : false, className)}
            {...otherProps}
        >
            <input
                name={name}
                type={'checkbox'}
                defaultChecked={checked}
            />
            <div className={'input-checkbox-marker'}/>
            <Text style={{ userSelect: 'none' }}> {label} </Text>
        </label>
    )
}
CheckboxInput.propTypes = {
    name: PropTypes.string,
    checked: PropTypes.bool,
    label: PropTypes.string,
    className: PropTypes.string
}
export default CheckboxInput
