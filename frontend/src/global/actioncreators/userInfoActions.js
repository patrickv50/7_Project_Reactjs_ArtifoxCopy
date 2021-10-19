import {USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS,USER_LOGIN_FAIL,USER_LOGOUT} from '../constants/userInfoConstants'
import axios from 'axios'

export const userLogin =(email,password)=>async(dispatch)=>{
    try{
        dispatch({
        type:USER_LOGIN_REQUEST
        })
        const {data}=await axios.post('/api/user/login',{email,password})
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })
        localStorage.setItem('userInfo',JSON.stringify(data))
    }catch(err){
        dispatch({
            type:USER_LOGIN_FAIL})
    }
}
export const userLogout=()=>(dispatch)=>{
    try{
        dispatch({
            type:USER_LOGOUT
        })
        localStorage.removeItem('userInfo')
    }catch(err){
    }
}