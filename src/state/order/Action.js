import { api } from "@/config/api";
import { PAY_ORDER_FAILURE, PAY_ORDER_REQUEST, PAY_ORDER_SUCCESS } from "./ActionTypes"


export const payOrder = ({jwt, orderData, amount}) => async (dispatch) => {
    dispatch({type: PAY_ORDER_REQUEST});

    try {
        const response = await api.post('/api/orders/pay', orderData, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })

        dispatch({
            type: PAY_ORDER_SUCCESS,
            payload: response.data,
            amount
        })
    } catch (error) {
        dispatch({
            type: PAY_ORDER_FAILURE,
            error: error.message
        })
    }
}