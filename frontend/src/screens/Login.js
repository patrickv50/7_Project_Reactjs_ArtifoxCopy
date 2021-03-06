import { useState,useEffect } from "react"
import {userLogin} from '../global/actioncreators/userInfoActions'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from "react-router-dom"
const Login = ({history}) =>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const dispatch=useDispatch()
    const {userInfo,error}=useSelector(state=>state.userLogin)
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(userLogin(email,password))
    }
    const handleChange=(e)=>{
        if(e.target.type==="email")setEmail(e.target.value)
        else setPassword(e.target.value)
    }
    useEffect(()=>{
        if(userInfo){
            history.push('/user/profile')
        }
    },[userInfo,history])
    return(
        <div className="login-form">
            <form action="" onSubmit={handleSubmit} className="form">
                <h1 className="heading">Login</h1>
                {error&&
                <div className="error-message">
                    <i className="fas fa-exclamation-triangle"></i>
                    <span className="message">{error}</span>
                </div>}
                <input className="input" type="email" placeholder="email" value={email} onChange={handleChange} />
                <input className="input" type="password" placeholder="password" value={password} onChange={handleChange}/>
                <input className="input button" type="submit" value="Login" />
                <Link to='/user/register' className="input button register-button">Or Register</Link>
            </form>
        <div className="image">
            <img src="/images/home/home-table.jpg" alt="" />
        </div>
        </div>
    )
}
export default Login