import React from 'react'
import PropTypes from 'prop-types'
import classNames from '../../../utils/helpers/classNames'
import Card from '../../atoms/card/Card'
import '../../../styles/atoms/input/button.css'

function ButtonInput ({ card, value, disabled, className, styleType, ...otherProps }) {
    return (
        <div
            className={classNames('input-button', className)}
            {...otherProps}
        >
            <input
                name={name}
                type={'button'}
                value={value}
                className={`input-button-input input-button-input-${styleType}`}
                disabled={disabled}
            />
            { card.visible ? <Card content={card.content} direction={card.direction} /> : false }
        </div>
    )
}
ButtonInput.propTypes = {
    card: PropTypes.object,
    value: PropTypes.any,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    styleType: PropTypes.string
}
ButtonInput.defaultProps = {
    card: {},
    styleType: 'positive'
}
export default ButtonInput
