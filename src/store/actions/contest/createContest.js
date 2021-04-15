export const createContest = (name, description, duration, tasksCount, teams, access, invited, creator) => ({
    type: 'CREATE_CONTEST',
    rest: '/contest/create',
    method: 'POST',
    query: { name, description, duration, tasksCount, teams, privacy: { access, invited }, creator }
})
