import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Admins from './admins/Admins'
import Certificates from './allCrms/Certificates'
import CreateCertificate from './create-crm/CreateCertificate'



function Admin() {

   return (
      <div>
         <div className="admin-header">
            <div className="admin-title">
               <NavLink to="/">Asosiy Sahifa</NavLink>
               <h1>Sertifikat Yaratish</h1>
            </div>
            <div className="links">
               <NavLink activeclass="active" to="/admin/createcertificate">Sertifikat Yaratish</NavLink>
               <NavLink activeclass="active" to="/admin/allCertificates">Barcha Sertifikatlar</NavLink>
               <NavLink activeclass="active" to="/admin/admins">Adminlar</NavLink>
            </div>
         </div>
         <Routes>
            <Route path='/createcertificate' element={<CreateCertificate />} />
            <Route path='/allCertificates' element={<Certificates />} />
            <Route path='/admins' element={<Admins />} />
         </Routes>
      </div>
   )
}

export default Admin



// <QRCode
//   className="pdf_flagQrcode"
//   value={`https://www.xalqarologistika.uz/check-certificates/${ idD ? idD : uniqueId }`}/>