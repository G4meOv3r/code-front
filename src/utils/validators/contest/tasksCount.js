import React from 'react'
import Correct from '../../../components/atoms/text/Correct'
import Incorrect from '../../../components/atoms/text/Incorrect'

export function validateContestTasksCount (tasksCount) {
    const result = []
    if (tasksCount >= 1 && tasksCount <= 5) {
        result.push(<Correct key={'tasksCount-correct'}> находится в диапазоне от 1 до 5 </Correct>)
    } else {
        result.push(<Incorrect key={'tasksCount-incorrect'}> не находится в диапазоне от 1 до 5  </Incorrect>)
    }
    return result
}

export function isContestTasksCount (tasksCount) {
    return tasksCount >= 1 && tasksCount <= 5
}
