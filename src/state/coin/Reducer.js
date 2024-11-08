const { data } = require("autoprefixer");
const { FETCH_COIN_LIST_REQUEST, FETCH_COIN_BY_ID_REQUEST, FETCH_COIN_DETAILS_REQUEST, SEARCH_COIN_REQUEST, FETCH_TOP_50_COINS_REQUEST, FETCH_MARKET_CHART_REQUEST, FETCH_COIN_LIST_SUCCESS, FETCH_TOP_50_COINS_SUCCESS, FETCH_MARKET_CHART_SUCCESS, SEARCH_COIN_SUCCESS } = require("./ActionTypes");
const { error } = require("console");

const initialState = {
    coinList: [],
    top50: [],
    searchCoinList: [],
    marketChart: {data:[], loading:[]},
    coinById: null,
    coinDetails: null,
    loading: false,
    error: null
}

const coinReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_COIN_LIST_REQUEST:
        case FETCH_COIN_BY_ID_REQUEST:
        case FETCH_COIN_DETAILS_REQUEST:
        case SEARCH_COIN_REQUEST:
        case FETCH_TOP_50_COINS_REQUEST:
            return {...state, loading: true, error: null};

        case FETCH_MARKET_CHART_REQUEST:
            return {
                ...state,
                marketChart: {loading: true, data: []},
                error: null
            };
            case FETCH_COIN_LIST_SUCCESS:
                return {
                    ...state,
                    coinList: action.payload,
                    loading: false,
                    error: null
                };
                case FETCH_TOP_50_COINS_SUCCESS:
                    return {
                        ...state,
                        top50: action.payload,
                        loading: false,
                        error: null
                    };
                case FETCH_MARKET_CHART_SUCCESS:
                    return {
                        ...state,
                        marketChart: {data: action.payload.prices, loading: false},
                        error: null
                    };
                    case SEARCH_COIN_SUCCESS:
                        return {
                            ...state,
                            searchCoinList: action.payload.coins,
                            error: null,
                            loading: false
                        };
        
    }
}