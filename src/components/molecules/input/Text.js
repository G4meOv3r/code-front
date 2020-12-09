import React from 'react'
import PropTypes from 'prop-types'
import classNames from '../../../utils/classNames'
import Placeholder from '../../atoms/input/text/Placeholder'
import '../../../styles/molecules/input/text.css'

class Text extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            focused: false
        }
    }

    render () {
        const { name, type, value, placeholder, className, ...otherProps } = this.props
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
                    onFocus={this.onChangeFocus.bind(this, true)}
                    onBlur={this.onChangeFocus.bind(this, false)}
                />
                <Placeholder value={placeholder} active={active}/>
            </div>
        )
    }

    onChangeFocus (focused) {
        this.setState({ focused })
    }
}
Text.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string
}
export default Text
