const { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } = require("./ActionTypes")

const initialState = {
    user:null,
    loading:false,
    error:null,
    jwt:null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return({...state, loading:true, error:null})
        case REGISTER_SUCCESS:
            return {...state, loading:false, error:null, jwt:action.payload}
        case REGISTER_FAILURE:
            return {...state, loading:false, error:action.payload}
        
        default:
            return state
    }
}

export default authReducer;