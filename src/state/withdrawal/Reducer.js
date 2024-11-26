import { request } from "http";
import { ADD_PAYMENT_DETAILS_SUCCESS, GET_PAYMENT_DETAILS_SUCCESS, GET_WITHDRAWAL_HISTORY_REQUEST, GET_WITHDRAWAL_REQUEST_REQUEST, GET_WITHDRAWAL_REQUEST_SUCCESS, WITHDRAWAL_PROCEED_REQUEST, WITHDRAWAL_PROCEED_SUCCESS, WITHDRAWAL_REQUEST, WITHDRAWAL_SUCCESS } from "./ActionTypes"
import { error } from "console";

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
        case WITHDRAWAL_PROCEED_SUCCESS:
            return {
                ...state,
                requests: state.requests.map((item) => {
                    item.id == action.payload.id ? action.payload : item
                }),
                loading: false,
                error: null
            }
        case GET_WITHDRAWAL_REQUEST_SUCCESS:
            return {
                ...state,
                requests: action.payload,
                loading: false,
                error: null
            };
            }
    }
}