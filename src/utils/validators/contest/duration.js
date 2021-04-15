import React from 'react'
import Correct from '../../../components/atoms/text/Correct'
import Incorrect from '../../../components/atoms/text/Incorrect'

export function validateContestDuration (duration) {
    const result = []
    if (duration >= 10 && duration <= 600) {
        result.push(<Correct key={'duration-correct'}> находится в диапазоне от 10 до 600 </Correct>)
    } else {
        result.push(<Incorrect key={'duration-incorrect'}> не находится в диапазоне от 10 до 600  </Incorrect>)
    }
    return result
}

export function isContestDuration (duration) {
    return duration >= 10 && duration <= 600
}
