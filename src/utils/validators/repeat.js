import React from 'react'
import Correct from '../../components/atoms/text/Correct'
import Incorrect from '../../components/atoms/text/Incorrect'

export function validateRepeat (repeat, password) {
    const result = []
    if (repeat === password) {
        result.push(<Correct key={'repeat-correct'}> пароли совпадают </Correct>)
    } else {
        result.push(<Incorrect key={'repeat-incorrect'}> пароли должны совпадать </Incorrect>)
    }
    return result
}

export function isRepeat (repeat, password) {
    return repeat === password
}
