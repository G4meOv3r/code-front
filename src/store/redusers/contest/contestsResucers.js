const contestsReducers = {
    GET_CONTEST_START: (state, action) => {
        state[action.query._id] = {}
        state[action.query._id].isLoading = true
        state[action.query._id].errors = null
        return state
    },
    GET_CONTEST_SUCCESS: (state, action) => {
        state[action.prevAction.query._id].isLoading = false
        state[action.prevAction.query._id] = { ...action.data, ...state[action.prevAction.query._id] }
        return state
    },
    GET_CONTEST_FAIL: (state, action) => {
        state[action.prevAction.query._id].isLoading = false
        state[action.prevAction.query._id].errors = action.error
        return state
    },
    UPDATE_CONTEST: (state, action) => {
        state[action.data._id] = action.data
        return state
    },
    UPDATE_CONTEST_PACKAGE: (state, action) => {
        const taskNumber = state[action.contestId].tasks.reduce((accumulator, value, index) => {
            return accumulator + (value._id === action.data.task ? index + 1 : 0)
        }, -1)
        const packageNumber = state[action.contestId].tasks[taskNumber].packages.reduce((accumulator, value, index) => {
            return accumulator + (value._id === action.data._id ? index + 1 : 0)
        }, -1)
        if (packageNumber !== -1) {
            state[action.contestId].tasks[taskNumber].packages = state[action.contestId].tasks[taskNumber].packages.map((value) => {
                return value._id === action.data._id ? action.data : value
            })
        } else {
            state[action.contestId].tasks[taskNumber].packages = [action.data, ...state[action.contestId].tasks[taskNumber].packages]
        }
        return state
    },

    GET_CONTESTS_START: (state) => {
        state.contests.isLoading = true
        state.contests.errors = null
        return state
    },
    GET_CONTESTS_SUCCESS: (state, action, a) => {
        state.contests.isLoading = false
        state.contests.contests = action.data
        return state
    },
    GET_CONTESTS_FAIL: (state, action) => {
        state.contests.isLoading = false
        state.contests.errors = action.error
        return state
    },
    UPDATE_CONTESTS: (state, action) => {
        state.contests.contests = [...state.contests.contests.filter(value => value._id !== action.data._id), action.data]
        return state
    }
}
export default contestsReducers
