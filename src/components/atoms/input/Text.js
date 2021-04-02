import React from 'react'
import PropTypes from 'prop-types'
import classNames from '../../../utils/helpers/classNames'
import Card from '../../atoms/card/Card'
import '../../../styles/atoms/input/text.css'

class TextInput extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            focused: false
        }
    }

    render () {
        const { name, type, value, placeholder, className, validator, ...otherProps } = this.props
        const active = !!value + this.state.focused
        return (
            <div
                className={classNames('input-text', active ? 'input-text-active' : false, className)}
                {...otherProps}
            >
                <input
                    name={name}
                    type={type}
                    defaultValue={value}
                    onFocus={() => { this.setState({ focused: true }) }}
                    onBlur={() => { this.setState({ focused: false }) }}
                />
                <div className={
                    classNames(
                        'input-text-placeholder',
                        active ? 'input-text-placeholder-active' : false
                    )
                }>
                    {placeholder}
                </div>
                { this.state.focused ? <Card content={validator.content} direction={validator.direction} /> : false }
            </div>
        )
    }
}
TextInput.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    validator: PropTypes.object
}
TextInput.defaultProps = {
    validator: {}
}
export default TextInput
