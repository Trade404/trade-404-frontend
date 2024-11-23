import { GET_WITHDRAWAL_HISTORY_REQUEST, GET_WITHDRAWAL_REQUEST_REQUEST, WITHDRAWAL_PROCEED_REQUEST, WITHDRAWAL_REQUEST } from "./ActionTypes"

const withdrawalReducer = (state = iniitalState, action) => {
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
    }
}