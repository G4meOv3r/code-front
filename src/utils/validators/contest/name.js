import React from 'react'
import Correct from '../../../components/atoms/text/Correct'
import Incorrect from '../../../components/atoms/text/Incorrect'

export function validateContestName (name) {
    const result = []
    if (name.trim().length !== 0) {
        result.push(<Correct key={'name-correct'}> заполнено </Correct>)
    } else {
        result.push(<Incorrect key={'name-incorrect'}> обязательно для заполнения  </Incorrect>)
    }
    return result
}

export function isContestName (name) {
    return name.trim().length !== 0
}
