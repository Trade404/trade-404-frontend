import { api } from "@/config/api"
import { GET_WITHDRAWAL_HISTORY_FAILURE, GET_WITHDRAWAL_HISTORY_REQUEST, GET_WITHDRAWAL_HISTORY_SUCCESS, GET_WITHDRAWAL_REQUEST_FAILURE, GET_WITHDRAWAL_REQUEST_REQUEST, GET_WITHDRAWAL_REQUEST_SUCCESS, WITHDRAWAL_FAILURE, WITHDRAWAL_PROCEED_FAILURE, WITHDRAWAL_PROCEED_REQUEST, WITHDRAWAL_PROCEED_SUCCESS, WITHDRAWAL_REQUEST, WITHDRAWAL_SUCCESS } from "./ActionTypes"

export const withdrawalRequest = ({amount, jwt}) => async dispatch => {
    dispatch({ type: WITHDRAWAL_REQUEST })

    try {
        const response = await api.get(`/api/withdrawal/${amount}`, null, {
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

export const proceedWithdrawal = ({id, jwt, accept}) => async dispatch => {
    dispatch({ type: WITHDRAWAL_PROCEED_REQUEST })

    try {
        const response = await api.patch(`/api/admin/withdrawal/${id}/proceed/${accept}`, null, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        
        dispatch({
            type: WITHDRAWAL_PROCEED_SUCCESS,
            payload: response.data
       })
    } catch (error) {
        console.log(error)
        dispatch({
            type: WITHDRAWAL_PROCEED_FAILURE,
            payload: error.message
        })
    }
}

export const getWIthdrawalHistory = jwt => async dispatch => {
    dispatch({ type: GET_WITHDRAWAL_HISTORY_REQUEST })

    try {
        const response = await api.get(`/api/withdrawal`, null, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        
        dispatch({
            type: GET_WITHDRAWAL_HISTORY_SUCCESS,
            payload: response.data
       })
    } catch (error) {
        console.log(error)
        dispatch({
            type: GET_WITHDRAWAL_HISTORY_FAILURE,
            payload: error.message
        })
    }
}

export const getAllWithdrawalRequest = jwt => async dispatch => {
    dispatch({ type: GET_WITHDRAWAL_REQUEST_REQUEST })

    try {
        const response = await api.get(`/api/admin/withdrawal`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        
        dispatch({
            type: GET_WITHDRAWAL_REQUEST_SUCCESS,
            payload: response.data
       })
    } catch (error) {
        console.log(error)
        dispatch({
            type: GET_WITHDRAWAL_REQUEST_FAILURE,
            payload: error.message
        })
    }
}
