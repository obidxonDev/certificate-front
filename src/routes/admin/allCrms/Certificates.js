import React, { useState, useEffect, useRef } from 'react'
import '../Admin.css'
import axios from '../../../api'
import ReactToPrint from 'react-to-print'
import { AiOutlineDownload, AiFillDelete } from 'react-icons/ai'
import { Preview } from '../../preview/Preview'
import { BsFillTrashFill } from 'react-icons/bs'

function Certificates() {
  const [allData, setAllData] = useState()
  const componentRef = useRef()
  const [modal, setModal] = useState(false)
  const [deletingId, setDeletingId] = useState(null)

  const [id, setId] = useState()
  const [name, setName] = useState()
  const [surname, setSurname] = useState()
  const [givenDate, setGivenDate] = useState()
  const [teacherName, setTeacherName] = useState()

  const setData = (id, name, surname, teacherName, givenDate) => {
    setId(id)
    setName(name)
    setSurname(surname)
    setGivenDate(givenDate)
    setTeacherName(teacherName)
  }
  
  useEffect(() => {
    axios.get("/users")
      .then(res => {
        setAllData(res.data.innerData)
      })
      .catch(err => console.log(err))
  }, [])

  function handleDelete(id) {
    if (id) {
      axios.delete(`/users/${id}`)
        .then(res => window.location.reload())
        .catch(err => console.log(err))
    }
    setModal(false)
  }

  return (
    <div className='all-crms'>
      <h1>Barcha Sertifikatlar</h1>
      <div className="certificates">
        {
          allData ?
            <table className='crm-table'>
              <thead className='crm-table-head'>
                <tr>
                  <th>ID</th>
                  <th>F.I.SH</th>
                  <th>Berilgan Sana</th>
                  <th>Teacher</th>
                  <th>Pdf Yublash</th>
                  <th>O'chirish</th>
                </tr>
              </thead>
              <tbody>
                {
                  allData.length === 0 ? <p style={{ textAlign: 'center' }}>Sertifikatlar Yo'q</p>
                    :
                    [...allData].reverse().map(i => {
                      return <tr key={i._id} className='table-row'>
                        <td>{i.certificateNumber}</td>
                        <td>{i.name} {i.surname}</td>
                        <td>{i.givenDate}</td>
                        <td>{i.teacherName}</td>
                        <td>
                          <ReactToPrint
                            trigger={() => <button
                              onFocus={() => setData(i.certificateNumber, i.name, i.surname, i.teacherName, i.givendate)}
                              className='pdf-btn'> <AiOutlineDownload
                              /> Pdf</button>}
                            content={() => componentRef.current}
                          />
                        </td>
                        <td>
                          <button
                            onClick={() => { setModal(true); setDeletingId(i._id) }}
                            className='delete-btn'><AiFillDelete
                            /> O'chirish</button>
                        </td>
                        <td style={{ display: 'none' }}>
                          {
                            <Preview
                              ref={componentRef}
                              obj={{
                                id: id,
                                name: name,
                                surname: surname,
                                givenDate: givenDate,
                                teacherName: teacherName
                              }}
                            />}
                        </td>
                      </tr>
                    })
                }
              </tbody>
            </table>
            :
            <div>Loading...</div>
        }

      </div>
      <div onClick={() => setModal(false)} className="modal" style={modal ? { display: 'flex' } : { display: 'none' }}>
        <div className="modal-box">
          <BsFillTrashFill/>
          <h3>Sertifikat O'chirilsinmi</h3>
          <div className="modal-btns">
            <button className='yes-btn' onClick={() => handleDelete(deletingId)}>Ha</button>
            <button className='no-btn' onClick={() => setModal(false)}>Yo'q</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certificates