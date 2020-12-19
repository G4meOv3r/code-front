import React from 'react'
import PropTypes from 'prop-types'
import classNames from '../../../utils/classNames'
import Card from '../../atoms/card/Card'
import '../../../styles/molecules/input/button.css'

class Button extends React.Component {
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
Button.propTypes = {
    card: PropTypes.object,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string
}
Button.defaultProps = {
    card: {}
}
export default Button
