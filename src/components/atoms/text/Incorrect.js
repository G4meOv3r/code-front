import React from 'react'
import PropTypes from 'prop-types'
import '../../../styles/atoms/text/incorrect.css'

function Incorrect ({ children }) {
    return (
        <div className={'text-incorrect'}> {children} </div>
    )
}
Incorrect.propTypes = {
    children: PropTypes.node
}
export default Incorrect
