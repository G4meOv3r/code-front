import { io } from 'socket.io-client'
import { BASE_WS_URL } from '../utils/constants'

const socket = io(BASE_WS_URL, { auth: { token: '' } })

export default socket
