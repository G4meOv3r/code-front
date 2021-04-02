import { getPersonal } from '../../actions/profile/personal'

export const profilePersonalMapDispatchToProps = (dispatch) => ({
    getPersonal: _id => dispatch(getPersonal(_id))
})
export const profilePersonalMapStateToProps = (state) => {
    return {
        personal: {
            me: state.auth._id === state.profile._id,
            ...state.profile.personal
        }
    }
}
