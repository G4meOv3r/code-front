export const sendPackage = (_id, compiler, code) => ({
    type: 'SEND_PACKAGE',
    rest: '/package',
    method: 'POST',
    query: { _id, compiler, code }
})
