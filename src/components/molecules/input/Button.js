import React from 'react'
import PropTypes from 'prop-types'
import classNames from '../../../utils/classNames'
import '../../../styles/molecules/input/button.css'

class Button extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            pressed: false
        }
    }

    render () {
        const { name, value, className, ...otherProps } = this.props
        return (
            <div
                className={classNames('input-button', className)}
                {...otherProps}
            >
                <input
                    name={name}
                    type={'button'}
                    value={value}
                />
            </div>
        )
    }
}
Button.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    className: PropTypes.string
}
export default Button
