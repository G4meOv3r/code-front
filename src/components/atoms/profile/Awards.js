import React from 'react'
import PropTypes from 'prop-types'
import Award from './Award'

class Awards extends React.Component {
    render () {
        const { awards, renderItem } = this.props
        return awards.map(renderItem || this.renderItem.bind(this))
    }

    renderItem (award) {
        const { className, ...otherProps } = this.props
        return (
            <Award
                key={award._id}
                _id={award._id}
                reason={award.reason}
                className={className}
                {...otherProps}
            />
        )
    }
}
Awards.propTypes = {
    awards: PropTypes.array,
    renderItem: PropTypes.func,
    className: PropTypes.string
}
export default Awards
