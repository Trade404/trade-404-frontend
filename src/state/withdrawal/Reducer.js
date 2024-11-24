import { ADD_PAYMENT_DETAILS_SUCCESS, GET_PAYMENT_DETAILS_SUCCESS, GET_WITHDRAWAL_HISTORY_REQUEST, GET_WITHDRAWAL_REQUEST_REQUEST, WITHDRAWAL_PROCEED_REQUEST, WITHDRAWAL_REQUEST, WITHDRAWAL_SUCCESS } from "./ActionTypes"

const withdrawalReducer = (state = initialState, action) => {
    switch(action.type) {
        case WITHDRAWAL_REQUEST:
        case WITHDRAWAL_PROCEED_REQUEST:
        case GET_WITHDRAWAL_HISTORY_REQUEST:
        case GET_WITHDRAWAL_REQUEST_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case WITHDRAWAL_SUCCESS:
            return {
                ...state,
                withdrawal: action.payload,
                loading: false,
                error: null
            }
        case ADD_PAYMENT_DETAILS_SUCCESS:
        case GET_PAYMENT_DETAILS_SUCCESS:
            return {
                ...state,
                paymentDetails: action.payload,
                loading: false,
                error: null
            }
    }
}