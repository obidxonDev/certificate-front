import React, { useRef, useState } from 'react'
import ReactToPrint from 'react-to-print'
import { FiAlertCircle } from 'react-icons/fi'
import Hat from '../../../assets/hat-removebg.png'
import Algoritm from '../../../assets/algoritm.png'
import { useDispatch } from 'react-redux'
import axios from '../../../api'
import '../Admin.css'
import '../../preview/Preview.css'

function CreateCertificate() {

   const [name, setName] = useState('')
   const [surname, setSurname] = useState('')
   const [teacherName, setTeacherName] = useState('')
   const [duration, setDuration] = useState('')
   const [givenDate, setGivenDate] = useState('')
   const [skills, setSkills] = useState([])
   const [crmNumber, setCrmNumber] = useState('')

   const [show, setShow] = useState(false)
   const [btnShow, setBtnShow] = useState(false)
   const componentRef = useRef()

   const handleGetValue = (e) => {
      const value = e.target.value
      if (e.target.checked) {
         setSkills([...skills, value])
      } else {
         setSkills(skills.filter(i => i !== value))
      }
   }

   function handleSubmit(e) {
      e.preventDefault()
      setShow(true)
   }

   function handleGenerate() {
      axios.post("/users", { name, surname, teacherName, duration, givenDate, skills })
         .then(res => {
            console.log(res.data);
            setCrmNumber(res.data.innerData.certificateNumber)
            setBtnShow(true)
         })
         .catch(err => console.log(err))
   }

   return (
      <React.Fragment>
         <div className='admin-dashboard container'>
            <div className="container">
               <div className="generate-certificate">
                  <h1>Algoritm Edu</h1>
                  <p><FiAlertCircle /> Sertifikat Yaratish Uchun Quyidagi Malumotlarni To'ldiring</p>

                  <div className="form-container">
                     <form action="" className='form' onSubmit={handleSubmit}>
                        <div className="name">
                           <label htmlFor="">Ismi</label>
                           <input required type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="surname">
                           <label htmlFor="">Familiyasi</label>
                           <input required type="text" placeholder='Surname' value={surname} onChange={(e) => setSurname(e.target.value)} />
                        </div>
                        <div className="lastname">
                           <label htmlFor="">Ustozining Ismi</label>
                           <input required type="text" placeholder='Teacher Name' value={teacherName} onChange={(e) => setTeacherName(e.target.value)} />
                        </div>
                        <div className="lesson-type">
                           <label htmlFor="">Tugatilgan Bosqichlar</label>
                           <div className="inputs">
                              <span><input type="checkbox" checked={skills.includes("HTML ")} value="HTML " onChange={handleGetValue} /> HTML</span>
                              <span><input type="checkbox" checked={skills.includes("CSS ")} value="CSS " onChange={handleGetValue} /> CSS</span>
                              <span><input type="checkbox" checked={skills.includes("JAVASCRIPT ")} value="JAVASCRIPT " onChange={handleGetValue} /> JAVASCRIPT</span>
                              <span><input type="checkbox" checked={skills.includes("REACT ")} value="REACT " onChange={handleGetValue} /> REACT</span>
                              <span><input type="checkbox" checked={skills.includes("FIREBASE ")} value="FIREBASE " onChange={handleGetValue} /> FIREBASE</span>
                              <span><input type="checkbox" checked={skills.includes("NODEJS ")} value="NODEJS " onChange={handleGetValue} /> NODEJS</span>
                              <span><input type="checkbox" checked={skills.includes("MONGODB ")} value="MONGODB " onChange={handleGetValue} /> MONGODB</span>
                           </div>
                        </div>
                        <div className="lesson-duration">
                           <label htmlFor="">Kurs Davomiyligi (oyda)</label>
                           <input required type="number" placeholder='Course Duration' value={duration} onChange={(e) => setDuration(e.target.value)} />
                        </div>
                        <div className="givendate">
                           <label htmlFor="">Berilgan Sana</label>
                           <input required type="date" value={givenDate} onChange={(e) => setGivenDate(e.target.value)} />
                        </div>
                        <div></div>
                        <div></div>
                        <div className='hidden-div'></div>
                        <div>
                           <button type='submit' className='create-btn'>Sertifikat Ko'rish</button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>

         <div className="manage-buttons" style={show ? { display: 'flex' } : { display: 'none' }}>
            <button className='crmmanage-btn' onClick={() => setShow(false)}>Orqaga</button>
            <button className='crmmanage-btn' onClick={handleGenerate}>Sertitfikatni Yaratish</button>
            <ReactToPrint
               trigger={() => <button style={btnShow ? { display: 'block' } : { display: 'none' }}>Yublab olish</button>}
               content={() => componentRef.current}
            />
         </div>

         <div style={show ? { display: 'block' } : { display: 'none' }} className='preview-certificate'>
            <div className="certificate-container" ref={componentRef} >
               <div className="gray-border">
                  <div className="dotted-border">
                     <div className="shape sh-1"></div>
                     <div className="shape sh-2"></div>
                  </div>
                  <div className='crm-title'>
                     <h1>Certificate</h1>
                     <p>Of Appreciation</p>
                  </div>
                  <img className='algoritm-img' src={Algoritm} alt="" width={350} />
                  <img className='hat-img' src={Hat} alt="" width={400} />
                  <h1 className='crm-header'>This Certificate Is Presented To</h1>
                  <h1 className='pupil-name'>{surname} {name}</h1>
                  <p className='crm-id'>{crmNumber}</p>
                  <p className='crm-desc'>Has Successfully Finished The Web Developmennt Course. This Course Is About The Development Strategies, Functionality, Frontend Including and Intensive User Experience of Real Projects. In Order To Earn a Statement of Accommplishment </p>
                  <div className="crm-footer">
                     <div className="teacher-signature">
                        <p></p>
                        <span>{teacherName} Teacher</span>
                     </div>
                     <div className="qr-code">
                        <h1>qr code</h1>
                     </div>
                     <div className="director-signature">
                        <p></p>
                        <span>Director</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}

export default CreateCertificate