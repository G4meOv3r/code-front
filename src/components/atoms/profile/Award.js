import React from 'react'
import PropTypes from 'prop-types'
import { BASE_IMAGE_URL } from '../../../utils/constants'
import classNames from '../../../utils/helpers/classNames'
import Card from '../card/Card'
import '../../../styles/atoms/profile/award.css'

class Award extends React.Component {
    constructor (props) {
        super(props)

        this.state = { visible: false }
    }

    render () {
        const { _id, reason, className, ...otherProps } = this.props
        const { visible } = this.state
        return (
            <div
                className={classNames('profile-award', className)}
                onMouseEnter={() => { this.setState({ visible: true }) }}
                onMouseLeave={() => { this.setState({ visible: false }) }}
                {...otherProps}
            >
                <img
                    src={`${BASE_IMAGE_URL}/awards/${_id}.png`}
                    alt={_id}
                />
                { visible ? <Card content={reason} direction={'top'}/> : false }
            </div>
        )
    }
}
Award.propTypes = {
    _id: PropTypes.string,
    reason: PropTypes.node,
    className: PropTypes.string
}
export default Award
