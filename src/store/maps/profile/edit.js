import { getPersonal } from '../../actions/profile/personal'

export const profileEditMapDispatchToProps = (dispatch) => ({
    getEdit: _id => dispatch(getPersonal(_id))
})
export const profileEditMapStateToProps = (state) => {
    return {
        edit: state.profile,
        _id: state.auth._id
    }
}
