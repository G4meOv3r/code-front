export function parseQuery (value) {
    let result = '?'
    for (const key in value) {
        result += key.toString() + value[key].toString()
    }
    return result
}
