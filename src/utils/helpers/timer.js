const convertTime = (secs) => {
    const hours = Math.floor(secs / 3600)
    secs -= hours * 3600
    const minutes = Math.floor(secs / 60)
    secs -= minutes * 60
    return `${hours > 10 ? hours : '0' + hours}:${minutes > 10 ? minutes : '0' + minutes}:${secs > 10 ? secs : '0' + secs}`
}

export default convertTime
