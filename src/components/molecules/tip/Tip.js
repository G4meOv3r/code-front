import React from 'react'
import PropTypes from 'prop-types'
import Card from '../../atoms/card/Card'
import '../../../styles/molecules/tip/tip.css'

class Tip extends React.Component {
    render () {
        const { children, visible, content, direction, ...otherProps } = this.props
        return (
            <div
                className={'tip'}
                {...otherProps}
            >
                { children }
                { visible ? <Card content={content} direction={direction} /> : false }
            </div>
        )
    }
}
Tip.propTypes = {
    children: PropTypes.node,
    visible: PropTypes.bool,
    content: PropTypes.content,
    direction: PropTypes.string
}
export default Tip
