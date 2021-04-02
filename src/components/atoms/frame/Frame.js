import React from 'react'
import PropTypes from 'prop-types'
import classNames from '../../../utils/helpers/classNames'
import '../../../styles/atoms/frame/frame.css'

class Frame extends React.Component {
    render () {
        const { title, className, children, ...otherProps } = this.props
        return (
            <div className={classNames('frame', className)} {...otherProps}>
                <div className={'frame-title'}> {title} </div>
                {children}
            </div>
        )
    }
}
Frame.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node
}
export default Frame
