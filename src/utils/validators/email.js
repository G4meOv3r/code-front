import React from 'react'
import Correct from '../../components/atoms/text/Correct'
import Incorrect from '../../components/atoms/text/Incorrect'

const regular = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/

export function validateEmail (email) {
    if (email.match(regular)) {
        return <Correct key={'email-correct'}> подходит под регулярное выражение </Correct>
    } else {
        return <Incorrect key={'email-incorrect'}> не подходит под регулярное выражение </Incorrect>
    }
}

export function isEmail (email) {
    return email.match(regular)
}

