import { BASE_WS_URL } from '../../utils/constants'
import { useDispatch } from 'react-redux'

export const useWebSocket = () => {
    const ws = new WebSocket(BASE_WS_URL)
    const dispatch = useDispatch()
    ws.onmessage = (e) => {
        dispatch(e.data)
    }
}
