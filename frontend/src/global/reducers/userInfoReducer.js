import { USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL,USER_LOGOUT } from "../constants/userInfoConstants"

const userLoginReducer=(state={error:null},action)=>{
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return {loading:true}
        case USER_LOGIN_SUCCESS:
            return {loading:false,userInfo:action.payload}
        case USER_LOGIN_FAIL:
            return {loading:false,error:action.payload}
        case USER_LOGOUT:
            return {loading:false,userInfo:null}
        default:
            return state
    }
}
export default userLoginReducer