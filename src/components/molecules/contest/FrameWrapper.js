import React from 'react'
import PropTypes from 'prop-types'
import Frame from './Frame'
import '../../../styles/molecules/contest/frameWrapper.css'

function FrameWrapper ({ model, direction }) {
    return (
        <div className={'frame-wrapper'} style={{ flexDirection: direction }}>
            {
                model.map(value => {
                    return typeof (value) === 'object'
                        ? <FrameWrapper model={value} direction={direction === 'column' ? 'row' : 'column'}/>
                        : <Frame title={value}> {value} </Frame>
                })
            }
        </div>
    )
}
FrameWrapper.propTypes = {
    model: PropTypes.array,
    direction: PropTypes.string
}
export default FrameWrapper
