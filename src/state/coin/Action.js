import axios from "axios"
import { FETCH_COIN_LIST_FAILURE, FETCH_COIN_LIST_REQUEST, FETCH_COIN_LIST_SUCCESS, FETCH_TOP_50_COINS_FAILURE, FETCH_TOP_50_COINS_REQUEST, FETCH_TOP_50_COINS_SUCCESS } from "./ActionTypes"

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

export const getTop50CoinsList= (pae) => async(dispatch) => {

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