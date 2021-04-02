import React from 'react'
import PropType from 'prop-types'

import classNames from '../../../../utils/helpers/classNames'

import '../../../../styles/molecules/search/competitive/card.css'

const CompetitiveSearchCard = (props) => {
    const { active, ...otherProps } = props
    return (
        <div
            tabIndex={0}
            className={classNames('competitive-search-card', active ? 'competitive-search-card-active' : false)}
            {...otherProps}>
        </div>
    )
}

CompetitiveSearchCard.propTypes = {
    active: PropType.bool
}

export default CompetitiveSearchCard
