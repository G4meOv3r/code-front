import React from 'react'
import PropTypes from 'prop-types'
import '../../../styles/molecules/contest/frame.css'

function Frame ({ title, children }) {
    return (
        <div className={'dynamic-frame'}>
            <div className={'dynamic-frame-title'}>
                {title}
            </div>
            <div className={'dynamic-frame-content'}>
                {children}
            </div>
        </div>
    )
}
Frame.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}
export default Frame
