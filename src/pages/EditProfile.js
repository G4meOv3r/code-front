import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../store/actions/profile/profile'
import { clearChangeProfile } from '../store/actions/profile/changeProfile'

import Loader from 'react-loader-spinner'

import EditProfile from '../components/organisms/profile/Edit'
import '../styles/pages/editprofile.css'

const EditProfilePage = () => {
    const _id = useSelector(state => state.auth._id)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProfile(_id))
        return () => {
            dispatch(clearChangeProfile())
        }
    }, [])
    const profile = useSelector(state => state.profile[_id] || { isLoading: true })
    const { isLoading } = profile
    return (
        <div className={'edit-profile-root'}>
            {
                isLoading
                    ? <Loader
                        type="ThreeDots"
                        color="rgb(90, 120, 170)"
                        height={50}
                        width={50}
                        timeout={3000}
                        style={{ justifySelf: 'center' }}
                    />
                    : <EditProfile profile={{ _id: profile._id, ...profile.personal }}/>
            }
        </div>
    )
}
export default EditProfilePage
