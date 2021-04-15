import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Input from '../../../atoms/input/Input'
import SmallProfile from '../small/Profile'

import '../../../../styles/molecules/profile/large/friends.css'

const Friends = ({ friends }) => {
    const [request, setRequest] = useState('')
    return (
        <div style={{ marginTop: '30px' }}>
            <Input name={'search'} type={'text'} placeholder={'Поиск'} value={request} onChange={(e) => { setRequest(e.target.value) }}/>
            <div className={'profile-friends'}>
                {
                    friends.filter((friend) => {
                        return friend.nickname.toLowerCase().includes(request.toLowerCase())
                    }).map((friend, index) => {
                        return <SmallProfile key={index} {...friend} />
                    })
                }
            </div>
        </div>
    )
}
Friends.propTypes = {
    friends: PropTypes.array
}
export default Friends
