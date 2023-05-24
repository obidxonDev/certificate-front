import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Admin from '../../routes/admin/Admin'

function PrivateRoute() {
   const seletor = useSelector(s => s.admin)
  return seletor ? <Admin/>
   : 
   <Navigate to="/login"/>
}

export default PrivateRoute