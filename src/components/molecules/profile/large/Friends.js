import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    profileFriendsMapDispatchToProps,
    profileFriendsMapStateToProps
} from '../../../../store/maps/profile/friends'
import Form from '../../forms/Form'
import Input from '../../../atoms/input/Input'
import SmallProfile from '../small/Profile'
import '../../../../styles/molecules/profile/large/friends.css'

class Friends extends React.Component {
    constructor (props) {
        super(props)

        this.state = { search: '' }
    }

    render () {
        let { friends } = this.props
        const { search } = this.state

        friends = friends.data.map(friend => {
            const { _id, nickname, name, lastName, awards, status } = friend
            const correct = nickname.toLowerCase().includes(this.state.search.toLowerCase())
            return correct
                ? <SmallProfile
                    key={_id}
                    _id={_id}
                    nickname={nickname}
                    name={name}
                    lastName={lastName}
                    awards={awards}
                    status={status}
                    onClick={() => { this.props.history.push(`/profile/${_id}`) }} />
                : false
        })

        return (
            <Form onChange={this.onChange.bind(this)} style={{ marginTop: '30px' }}>
                <Input name={'search'} type={'text'} placeholder={'Поиск'} value={search}/>
                <div className={'profile-friends'}>
                    {friends}
                </div>
            </Form>
        )
    }

    componentDidMount () {
        this.props.getFriends(this.props._id)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }
}
Friends.propTypes = {
    _id: PropTypes.string,
    friends: PropTypes.object,
    getFriends: PropTypes.func,
    history: PropTypes.object
}
export default connect(
    profileFriendsMapStateToProps,
    profileFriendsMapDispatchToProps
)(Friends)
