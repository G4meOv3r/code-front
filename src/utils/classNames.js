function classNames (...classes) {
    let result = ''
    for (const className of classes) {
        if (!className) {
            continue
        }
        if (result !== '') {
            result += ' '
        }
        result += className
    }
    return result
}
export default classNames
