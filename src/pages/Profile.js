import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../store/actions/profile/profile'

import Loader from 'react-loader-spinner'

import Profile from '../components/organisms/profile/Profile'

import '../styles/pages/profile.css'

const ProfilePage = () => {
    const { profileId } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProfile(profileId))
    }, [profileId])
    const profile = useSelector(state => state.profile[profileId] || { isLoading: true })

    return (
        <div className={'profile-root'}>
            {
                profile.isLoading
                    ? <Loader
                        type="ThreeDots"
                        color="rgb(90, 120, 170)"
                        height={50}
                        width={50}
                        timeout={3000}
                        style={{ justifySelf: 'center' }}
                    />
                    : <Profile profile={profile}/>
            }
        </div>
    )
}
export default ProfilePage
