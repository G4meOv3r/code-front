import React from 'react'
import Correct from '../../components/atoms/text/Correct'
import Incorrect from '../../components/atoms/text/Incorrect'

export function validatePassword (password) {
    const result = []
    if (password.length >= 12) {
        result.push(<Correct key={'length-correct'}> содержит 12 или более символов </Correct>)
    } else {
        result.push(<Incorrect key={'length-incorrect'}> должно содержать не менее 12 символов </Incorrect>)
    }

    if (password.match(/(?=.*[A-Z])/)) {
        result.push(<Correct key={'letters-correct'}> содержит буквы в верхнем регистре </Correct>)
    } else {
        result.push(<Incorrect key={'letters-incorrect'}> должно содержать верхний регистр </Incorrect>)
    }

    if (password.match(/(?=.*[0-9])/)) {
        result.push(<Correct key={'numbers-correct'}> содержит цифры </Correct>)
    } else {
        result.push(<Incorrect key={'numbers-incorrect'}> должно содержать цифры </Incorrect>)
    }

    if (password.match(/(?=.*[!@#$%^&*])/)) {
        result.push(<Correct key={'special-correct'}> содержит спецсимволы </Correct>)
    } else {
        result.push(<Incorrect key={'special-incorrect'}> должно содержать спецсимволы </Incorrect>)
    }
    return result
}

export function isPassword (password) {
    return password.length >= 12 && password.match(/(?=.*[A-Z])/) && password.match(/(?=.*[0-9])/) && password.match(/(?=.*[!@#$%^&*])/)
}
