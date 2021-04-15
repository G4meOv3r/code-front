export const changeProfile = (avatar, nickname, name, lastName) => ({
    type: 'CHANGE_PROFILE',
    rest: '/profile',
    method: 'POST',
    query: { avatar, nickname, name, lastName }
})

export const clearChangeProfile = () => ({
    type: 'CLEAR_CHANGE_PROFILE'
})
