import React from 'react'
import PropTypes from 'prop-types'

function Form ({ onChange, onSubmit, children, ...otherProps }) {
    return (
        <form
            onChange={onChange}
            onSubmit={onSubmit}
            {...otherProps}
        >
            {children}
        </form>
    )
}
Form.propTypes = {
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    children: PropTypes.node
}
export default Form
