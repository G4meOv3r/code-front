import React from 'react'
import PropTypes from 'prop-types'
import classNames from '../../../utils/classNames'
import Card from '../../atoms/card/Card'
import '../../../styles/molecules/input/button.css'

class Submit extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            visible: false
        }
    }

    render () {
        const { disabledCard, errorCard, value, disabled, className, ...otherProps } = this.props
        return (
            <div
                className={classNames('input-button', className)}
                onMouseEnter={() => { this.setState({ visible: true }) }}
                onMouseLeave={() => { this.setState({ visible: false }) }}
                {...otherProps}
            >
                <input
                    name={name}
                    type={'submit'}
                    value={value}
                    disabled={disabled}
                    onClick={(e) => { e.preventDefault() }}
                />
                { this.state.visible && disabledCard.visible ? <Card content={disabledCard.content} direction={disabledCard.direction} /> : false }
                { errorCard.visible ? <Card content={errorCard.content} direction={errorCard.direction} style={{ backgroundColor: 'var(--card-error-background)' }} /> : false }
            </div>
        )
    }
}
Submit.propTypes = {
    disabledCard: PropTypes.object,
    errorCard: PropTypes.object,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string
}
Submit.defaultProps = {
    disabledCard: {},
    errorCard: {}
}
export default Submit
