import { signIn } from '../actions/auth/signIn'
import { signUp } from '../actions/auth/signUp'

export const authMapDispatchToProps = (dispatch) => ({
    authorize: (type, query) => {
        if (type === 'signin') {
            dispatch(signIn(query))
        } else {
            dispatch(signUp(query))
        }
    }
})
export const authMapStateToProps = (state) => ({
    auth: state.auth
})
