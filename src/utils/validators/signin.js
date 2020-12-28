import { isEmail, validateEmail } from './email'
import { isPassword, validatePassword } from './password'

export function validateSignIn (email, password) {
    return [...validateEmail(email), ...validatePassword(password)]
}

export function isSignIn (email, password) {
    return isEmail(email) && isPassword(password)
}
