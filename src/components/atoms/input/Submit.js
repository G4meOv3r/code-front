import React from 'react'
import PropTypes from 'prop-types'
import classNames from '../../../utils/helpers/classNames'
import Card from '../../atoms/card/Card'
import '../../../styles/atoms/input/button.css'

class SubmitInput extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            visible: false
        }
    }

    render () {
        const { disabledCard, errorCard, value, disabled, className, styleType, ...otherProps } = this.props
        return (
            <div
                className={'input-button'}
                onMouseEnter={() => { this.setState({ visible: true }) }}
                onMouseLeave={() => { this.setState({ visible: false }) }}
                {...otherProps}
            >
                <input
                    name={name}
                    type={'submit'}
                    value={value}
                    className={classNames('input-button-input', `input-button-input-${styleType}`, className)}
                    disabled={disabled}
                />
                { this.state.visible && disabledCard.visible ? <Card content={disabledCard.content} direction={disabledCard.direction} /> : false }
                { !disabled && errorCard.visible ? <Card content={errorCard.content} direction={errorCard.direction} style={{ backgroundColor: 'var(--card-error-background)', color: 'var(--card-error-color)' }} /> : false }
            </div>
        )
    }
}
SubmitInput.propTypes = {
    disabledCard: PropTypes.object,
    errorCard: PropTypes.object,
    value: PropTypes.any,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    styleType: PropTypes.string
}
SubmitInput.defaultProps = {
    disabledCard: {},
    errorCard: {},
    styleType: 'positive'
}
export default SubmitInput
