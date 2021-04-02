import React, { useState } from 'react'

import CompetitiveSearchCard from '../../../molecules/search/competitive/Card'

import '../../../../styles/organisms/search/competitive/search.css'

const CompetitiveSearch = () => {
    const [value, setValue] = useState({ 0: false, 1: false, 2: false, 3: false, 4: false })

    const toggleOption = (number) => {
        setValue({
            ...value,
            [number]: !value[number]
        })
    }

    return (
        <div className={'competitive-search'}>
            <CompetitiveSearchCard active={value[0]} onClick={toggleOption.bind(this, 0)}/>
            <CompetitiveSearchCard active={value[1]} onClick={toggleOption.bind(this, 1)}/>
            <CompetitiveSearchCard active={value[2]} onClick={toggleOption.bind(this, 2)}/>
            <CompetitiveSearchCard active={value[3]} onClick={toggleOption.bind(this, 3)}/>
            <CompetitiveSearchCard active={value[4]} onClick={toggleOption.bind(this, 4)} style={{ width: '100%' }}/>
        </div>
    )
}

export default CompetitiveSearch
