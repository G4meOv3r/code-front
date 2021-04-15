import { BASE_URL } from '../../utils/constants'
import socket from '../ws'

export const httpApi = store => next => action => {
    if (!action.rest) {
        next(action)
        return
    }

    const url = `${BASE_URL}${action.rest}?` + new URLSearchParams(action.method === 'GET' ? action.query : {})

    next({
        ...action,
        type: action.type + '_START'
    })

    const token = store.getState().auth.token
    const headers = {
        'Content-Type': 'application/json'
    }
    if (token) {
        headers.Authorization = token
    }

    fetch(url, {
        method: action.method, // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: headers,
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: action.method === 'GET' ? undefined : JSON.stringify(action.query) // body data type must match "Content-Type" header
    })
        .then(async response => {
            const data = await response.json()
            if (response.ok) {
                next({
                    data: data,
                    type: action.type + '_SUCCESS',
                    prevAction: action
                })
            } else {
                next({
                    error: data,
                    type: action.type + '_FAIL',
                    prevAction: action
                })
            }
        })
        .catch(error => {
            console.log('catch', error)
            next({
                error: error,
                type: action.type + '_FAIL',
                prevAction: action
            })
        })
}

export const wsApi = store => next => action => {
    if (!action.event || action.method !== 'WS') {
        next(action)
        return
    }
    const token = store.getState().auth.token
    if (token && !socket.auth.token) {
        socket.auth.token = token
        socket.disconnect().connect()
    }
    socket.emit(action.event, action.data)
    next({
        ...action,
        type: action.type + '_COMPLETE'
    })
}
