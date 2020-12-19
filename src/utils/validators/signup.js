import { isEmail, validateEmail } from './email'
import { isPassword, validatePassword } from './password'
import { isRepeat, validateRepeat } from './repeat'

export function validateSignUp (email, password, repeat) {
    return [validateEmail(email), ...validatePassword(password), validateRepeat(repeat, password)]
}

export function isSignUp (email, password, repeat) {
    return isEmail(email) && isPassword(password) && isRepeat(repeat, password)
}
