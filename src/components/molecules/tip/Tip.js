import React from 'react'
import PropTypes from 'prop-types'
import Card from '../../atoms/card/Card'
import '../../../styles/molecules/tip/tip.css'

class Tip extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            visible: this.props.visible,
            content: false
        }
    }

    componentDidUpdate (prevProps) {
        if (this.props.visible !== prevProps.visible) {
            this.setState({ visible: this.props.visible })
        }
    }

    render () {
        const { mode, children, content, direction, ...otherProps } = this.props
        const { visible } = this.state
        return (
            <div
                className={'tip'}
                onClick={mode === 'click' ? () => { this.setState({ visible: !visible }) } : () => {}}
                onMouseEnter={mode === 'hover' ? () => { this.setState({ visible: true }) } : () => {}}
                onMouseLeave={mode === 'hover' ? () => { this.setState({ visible: false }) } : () => {}}
                {...otherProps}
            >
                { children }
                { visible ? <Card content={content} direction={direction} /> : false }
            </div>
        )
    }
}
Tip.propTypes = {
    mode: PropTypes.string,
    children: PropTypes.node,
    content: PropTypes.node,
    direction: PropTypes.string,
    visible: PropTypes.bool
}
export default Tip
