import { useWebSocket } from '../../ws'

const ticketReducers = {
    GET_TICKET_START: (state) => {
        state.errors = null
        return state
    },
    GET_TICKET_SUCCESS: (state, action) => {
        state.ticket = action.data.ticket
        state.socket = useWebSocket()
        return state
    },
    GET_TICKET_FAIL: (state, action) => {
        state.errors = action.error
        return state
    }
}

export default ticketReducers
