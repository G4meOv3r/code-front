import React from 'react'
import PropTypes from 'prop-types'
import classNames from '../../../../utils/classNames'
import Text from '../../text/Text'
import '../../../../styles/atoms/input/text/placeholder.css'

function Placeholder ({ value, active }) {
    return (
        <Text className={
            classNames(
                'input-text-placeholder',
                active ? 'input-text-placeholder-active' : false
            )
        }>
            {value}
        </Text>
    )
}
Placeholder.propTypes = {
    value: PropTypes.string,
    active: PropTypes.bool
}
export default Placeholder
