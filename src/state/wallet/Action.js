import api from '@Api/api'
import * as types from './ActionTypes'

export const getUserWallet = (jwt) => async (dispatch) => {
    dispatch({type: types.GET_USER_WALLET_REQUEST})

    try {
        const response = await api.get('/api/wallet', {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        
        dispatch({
            type: types.GET_USER_WALLET_SUCCESS,
            payload: response.data
       })
    } catch (error) {
        console.log(error)
        dispatch({
            type: types.GET_USER_WALLET_FAILURE,
            error: error.message
        })
    }
    
}

export const getWalletTransactions = ({jwt}) => async (dispatch) => {
    dispatch({type: types.GET_WALLET_TRANSACTION_SUCCESS})

    try {
        const response = await api.get('/api/wallet/transactions', {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        
        dispatch({
            type: types.GET_WALLET_TRANSACTION_SUCCESS,
            payload: response.data
       })
    } catch (error) {
        console.log(error)
        dispatch({
            type: types.GET_WALLET_TRANSACTION_FAILURE,
            error: error.message
        })
    }
    
}

export const depositMoney = ({jwt, orderId, paymentId, navigate}) => async (dispatch) => {
    dispatch({type: types.DEPOSIT_MONEY__REQUEST})

    try {
        const response = await api.put('/api/wallet/deposit', null, {
            params: {
                order_id: orderId,
                payment_id: paymentId
            },
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        
        dispatch({
            type: types.DEPOSIT_MONEY__SUCCESS,
            payload: response.data
       })
       navigate('/wallet')
       console.log(response.data)
    } catch (error) {
        console.log(error)
        dispatch({
            type: types.DEPOSIT_MONEY__FAILURE,
            error: error.message
        })
    }
    
}