import React from 'react'
import PropTypes from 'prop-types'
import '../../../styles/atoms/card/card.css'

function Card ({ content, direction, ...otherProps }) {
    if (typeof content === 'function') {
        content = content()
    }
    if (content) {
        return (
            <div className={`card card-${direction}`} {...otherProps}>
                <div className={'card-content'}> {content} </div>
                <div className={`card-pointer card-pointer-${direction}`}/>
            </div>
        )
    } else {
        return false
    }
}
Card.propTypes = {
    content: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func
    ]),
    direction: PropTypes.string
}
export default Card
