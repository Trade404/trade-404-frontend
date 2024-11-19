import { api } from "@/config/api"
import { WITHDRAWAL_FAILURE, WITHDRAWAL_PROCEED_REQUEST, WITHDRAWAL_REQUEST, WITHDRAWAL_SUCCESS } from "./ActionTypes"

export const withdrawalRequest = ({amount, jwt}) => async dispatch => {
    dispatch({ type: WITHDRAWAL_REQUEST})

    try {
        const response = await api.get(`/api/withdrawal/${  amount}`, null, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        
        dispatch({
            type: WITHDRAWAL_SUCCESS,
            payload: response.data
       })
    } catch (error) {
        console.log(error)
        dispatch({
            type: WITHDRAWAL_FAILURE,
            payload: error.message
        })
    }
    
}
