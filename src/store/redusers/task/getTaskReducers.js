const getTaskReducers = {
    GET_TASKS_START: (state, action) => {
        state.tasks.isLoading = true
        state.tasks.errors = null
        return state
    },
    GET_TASKS_SUCCESS: (state, action) => {
        state.tasks.isLoading = false
        state.tasks.data = action.data
        return state
    },
    GET_TASKS_FAIL: (state, action) => {
        state.tasks.isLoading = false
        state.tasks.errors = action.error
        return state
    },

    GET_TASK_START: (state, action) => {
        state[action.query._id] = {}
        state[action.query._id].isLoading = true
        state[action.query._id].errors = null
        return state
    },
    GET_TASK_SUCCESS: (state, action) => {
        const { _id } = action.prevAction.query
        state[_id].isLoading = false
        state[_id] = { ...state[_id], ...action.data }
        return state
    },
    GET_TASK_FAIL: (state, action) => {
        const { _id } = action.prevAction.query
        state[_id].isLoading = false
        state[_id].errors = action.error
        return state
    },
    UPDATE_TASK: (state, action) => {
        const packageNumber = state[action.taskId].packages.reduce((accumulator, value, index) => {
            return accumulator + (value._id === action.data._id ? index + 1 : 0)
        }, -1)
        if (packageNumber !== -1) {
            state[action.taskId].packages[packageNumber] = action.data
        } else {
            state[action.taskId].packages = [action.data, ...state[action.taskId].packages]
        }
        return state
    }
}
export default getTaskReducers
