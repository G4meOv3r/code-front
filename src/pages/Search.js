import React from 'react'
import PropTypes from 'prop-types'
import CompetitiveSearch from '../components/organisms/search/competitive/Search'
import '../styles/pages/search.css'

class ProfilePage extends React.Component {
    render () {
        return (
            <div className={'search-root'}>
                <CompetitiveSearch/>
            </div>
        )
    }
}
ProfilePage.propTypes = {
    history: PropTypes.object
}
export default ProfilePage
