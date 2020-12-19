import React from 'react'
import Correct from '../../components/atoms/text/Correct'
import Incorrect from '../../components/atoms/text/Incorrect'

export function validateRepeat (repeat, password) {
    if (repeat === password) {
        return <Correct key={'repeat-correct'}> пароли совпадают </Correct>
    } else {
        return <Incorrect key={'repeat-incorrect'}> пароли должны совпадать </Incorrect>
    }
}

export function isRepeat (repeat, password) {
    return repeat === password
}
