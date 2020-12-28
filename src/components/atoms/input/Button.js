import React from 'react'
import PropTypes from 'prop-types'
import classNames from '../../../utils/helpers/classNames'
import Card from '../../atoms/card/Card'
import '../../../styles/atoms/input/button.css'

class ButtonInput extends React.Component {
    render () {
        const { card, value, disabled, className, ...otherProps } = this.props
        return (
            <div
                className={classNames('input-button', className)}
                {...otherProps}
            >
                <input
                    name={name}
                    type={'button'}
                    value={value}
                    disabled={disabled}
                />
                { card.visible ? <Card content={card.content} direction={card.direction} /> : false }
            </div>
        )
    }
}
ButtonInput.propTypes = {
    card: PropTypes.object,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string
}
ButtonInput.defaultProps = {
    card: {}
}
export default ButtonInput
