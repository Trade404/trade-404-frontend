import axios from "axios"
import { FETCH_COIN_BY_ID_FAILURE, FETCH_COIN_BY_ID_REQUEST, FETCH_COIN_BY_ID_SUCCESS, FETCH_COIN_LIST_FAILURE, FETCH_COIN_LIST_REQUEST, FETCH_COIN_LIST_SUCCESS, FETCH_MARKET_CHART_FAILURE, FETCH_MARKET_CHART_REQUEST, FETCH_MARKET_CHART_SUCCESS, FETCH_TOP_50_COINS_FAILURE, FETCH_TOP_50_COINS_REQUEST, FETCH_TOP_50_COINS_SUCCESS } from "./ActionTypes"
import { api, API_BASE_URL } from "@/config/api"

export const getCoinList = (page) => async(dispatch) => {

    dispatch({type:FETCH_COIN_LIST_REQUEST})

    const baseUrl = "http://localhost:4040"

    try {
        const {data} =  await axios.get(`${baseUrl}/coins?page=${page}`)
        console.log(data)

        dispatch({type:FETCH_COIN_LIST_SUCCESS, payload:data})

    } catch(error) {
        dispatch({type:FETCH_COIN_LIST_FAILURE, payload:error.message})
        console.log(error)
    }
    
}

export const getTop50CoinsList= () => async(dispatch) => {

    dispatch({type:FETCH_TOP_50_COINS_REQUEST})

    const baseUrl = "http://localhost:4040"

    try {
        const response =  await axios.get(`${baseUrl}/coins/top50`)
        dispatch({type:FETCH_TOP_50_COINS_SUCCESS, payload:response.data})
        console.log(response.data)

    } catch(error) {
        dispatch({type:FETCH_TOP_50_COINS_FAILURE, payload:error.message})
        console.log(error)
    }
    
}

export const fetchMarketChart= ({coinId, days, jwt}) => async(dispatch) => {

    dispatch({type:FETCH_MARKET_CHART_REQUEST})

    try {
        const response =  await api.get(`coins/${coinId}/chart?days=${days}`,{
            headers:{
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({type:FETCH_MARKET_CHART_SUCCESS, payload:response.data})
        console.log(response.data)

    } catch(error) {
        dispatch({type:FETCH_MARKET_CHART_FAILURE, payload:error.message})
        console.log(error)
    }
}

export const fetchCoinById= (coinId) => async(dispatch) => {

    dispatch({type:FETCH_COIN_BY_ID_REQUEST})

    try {
        const response =  await api.get(`${API_BASE_URL}/coins/${coinId}`)
        dispatch({type:FETCH_COIN_BY_ID_SUCCESS, payload:response.data})
        console.log(response.data)

    } catch(error) {
        dispatch({type:FETCH_COIN_BY_ID_FAILURE, payload:error.message})
        console.log(error)
    }
}

