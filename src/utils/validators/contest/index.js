import { isContestName, validateContestName } from './name'
import { isContestDuration, validateContestDuration } from './duration'
import { isContestTasksCount, validateContestTasksCount } from './tasksCount'

export function validateContest (name, duration, tasksCount) {
    return [
        ...validateContestName(name),
        ...validateContestDuration(duration),
        ...validateContestTasksCount(tasksCount)
    ]
}

export function isContest (name, duration, tasksCount) {
    return isContestName(name) && isContestDuration(duration) && isContestTasksCount(tasksCount)
}
