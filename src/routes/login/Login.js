import React, { useState } from 'react'
import axios from '../../api'
import './Login.css'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const [login, setLogin] = useState()
  const [password, setPassword] = useState()
  const [errMsg, setErrMsg] = useState('')
  const dispatch = useDispatch()
  const nav = useNavigate()

  function handleLogin(e) {
    e.preventDefault()
    axios.post("/admins/logintoadmin", { login, password })
      .then(res => {
        console.log(res);
        if (res.data.innerData.state = true) {
          dispatch({ type: "ADD__ADMIN" })
          nav("/admin")
        }
      })
      .catch(err => {
        console.log(err)
        setErrMsg(err.response.data.msg)
      })
  }

  return (
    <div className='login'>
      <div className="login-container">
        <h2>Login To Algoritm Edu</h2>
        <form className='login-form' action="" onSubmit={handleLogin}>
          <p style={{textAlign: 'center'}}>Ask The Site <Link to="https://t.me/ReactCoder" style={{textDecoration: 'none'}}>Owner</Link> To Create A Login Password For You To Enter System</p>
          <input required type="text" placeholder='Enter Login' value={login} onChange={(e) => setLogin(e.target.value)} />
          <input required type="text" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <p style={{ color: 'red' }}>{errMsg && errMsg}</p>
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login