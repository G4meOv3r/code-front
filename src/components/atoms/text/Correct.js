import React from 'react'
import PropTypes from 'prop-types'
import '../../../styles/atoms/text/correct.css'

function Correct ({ children }) {
    return (
        <div className={'text-correct'}> {children} </div>
    )
}
Correct.propTypes = {
    children: PropTypes.node
}
export default Correct
