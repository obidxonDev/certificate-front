import React, { useEffect, useState } from 'react'
import axios from '../../../api'
import { useDispatch } from 'react-redux'
import { BsFillTrash3Fill } from 'react-icons/bs'
import gif from '../../../assets/gif.gif'

function Admins() {

  const [admins, setAdmins] = useState()
  const [isOwner, setIsOwner] = useState()
  const dis = useDispatch()
  const [name, setAdminName] = useState()
  const [login, setAdminLogin] = useState()
  const [password, setAdminPassword] = useState()

  const [successMsg, setSuccessMsg] = useState()
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    axios.get("/admins")
      .then(res => {
        setAdmins(res.data.innerData)
        res.data.innerData.map(i => setIsOwner(i.role))
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    if(counter === 60){
      setInterval(() => {
        setCounter((prevTimer) => prevTimer - 1);
      }, 1000);
    }
  }, [counter]);

  function handleGenerate(e) {
    e.preventDefault()
    axios.post("/admins/generatedLogin", { name, login, password })
      .then(res => {
        setSuccessMsg(res.data.msg)
        setCounter(60)
        setInterval(() => { window.location.reload() }, 60000);
      })
      .catch(err => console.log(err))
  }

  return (
    <React.Fragment>
      {isOwner === "OWNER" ?
        <div className='admins-container'>
          <div className="admins-box">
            <div>
              {
                admins?.map((i, id) => <div key={id} className='admi'>{i.name} <BsFillTrash3Fill onClick={() => dis({ type: "REMOVE__ADMIN" })} /></div>)
              }
            </div>
          </div>
          <div className="add-admin">
            <p>{counter === 0 ? "" : successMsg}</p>
            <p>{ counter > 0 ? <p>Login Automatically Removed After 00:{counter}</p> : "" }</p>
            { }
            <h2>Admin Qo'shish</h2>
            <form className='add-admin-form' action="" onSubmit={handleGenerate}>
              <input required type="text" placeholder='Admin Name' value={name} onChange={(e) => setAdminName(e.target.value)} />
              <input required type="text" placeholder='Admin Login' value={login} onChange={(e) => setAdminLogin(e.target.value)} />
              <input required type="text" placeholder='Admin Password' value={password} onChange={(e) => setAdminPassword(e.target.value)} />
              <button type='submit'>Generate Admin</button>
            </form>
          </div>
        </div>
        :
        <h3 style={{ textAlign: 'center', marginTop: '100px' }}> <img src={gif} alt="" width={200} /><br /> You Don't Have Access For This Route</h3>
      }
    </React.Fragment>
  )
}

export default Admins