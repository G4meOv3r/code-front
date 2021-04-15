const friendshipReducers = {
    FRIENDSHIP_MANAGE_START: (state) => {
        return state
    },
    FRIENDSHIP_MANAGE_SUCCESS: (state, action) => {
        const { _id, friendship } = action.data
        state[_id].personal.friendship = friendship
        return state
    },
    FRIENDSHIP_MANAGE_FAIL: (state, action) => {
        return state
    }
}
export default friendshipReducers
