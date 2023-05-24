import React from 'react'
import './Preview.css'
import Hat from '../../assets/hat-removebg.png'
import Algoritm from '../../assets/algoritm.png'

export const Preview = React.forwardRef((props, ref) =>  {

  // const { name } = props
  const { id, name, surname, teacherName, givenDate } = props.obj;
  return (
    <div className='preview-certificate' >
      <div className="certificate-container" ref={ref}>
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
          <h1 className='pupil-name'>{ name } { surname }</h1>
          <p className='crm-id'>{ id }</p>
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
  )
})
