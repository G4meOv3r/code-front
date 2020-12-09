import React from 'react'
import PropTypes from 'prop-types'

class Menu extends React.Component {
    render () {
        const { children, ...otherProps } = this.props
        return (
            <div {...otherProps} style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
                {
                    children
                }
            </div>
        )
    }
}
Menu.propTypes = {
    children: PropTypes.node
}
export default Menu
