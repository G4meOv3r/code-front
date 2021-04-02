import React from 'react'

import Input from '../../atoms/input/Input'
import LiveContests from './Live'
import AwaitingContests from './Awaiting'
import PastContests from './Past'

import '../../../styles/organisms/index/contests.css'

const Contests = () => {
    return (
        <div className={'contests'}>
            <div className={'contests-title'}> Контесты </div>
            <div className={'contests-actions'}>
                <Input type={'button'} className={'contests-actions-search'} value={'Начать поиск'}/>
                <Input type={'button'} className={'contests-actions-create'} value={'Создать контест'}/>
            </div>
            <LiveContests/>
            <AwaitingContests/>
            <PastContests/>
        </div>
    )
}
export default Contests
