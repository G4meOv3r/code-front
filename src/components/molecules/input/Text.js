import React from 'react'
import PropTypes from 'prop-types'
import classNames from '../../../utils/classNames'
import Placeholder from '../../atoms/input/text/Placeholder'
import Card from '../../atoms/card/Card'
import '../../../styles/molecules/input/text.css'

class Text extends React.Component {
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
                    value={value}
                    onFocus={() => { this.setState({ focused: true }) }}
                    onBlur={() => { this.setState({ focused: false }) }}
                />
                <Placeholder value={placeholder} active={active}/>
                { this.state.focused ? <Card content={validator.content} direction={validator.direction} /> : false }
            </div>
        )
    }
}
Text.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    validator: PropTypes.object
}
Text.defaultProps = {
    validator: {}
}
export default Text
