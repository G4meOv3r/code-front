import React from 'react'
import PropTypes from 'prop-types'

function Slider({top, left, width, height}) {
    return (
        <div style={{ top: top, left: left, width: width, height: height }}>

        </div>
    )
}
Slider.PropTypes = {
    top: PropTypes.string,
    left: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
}
