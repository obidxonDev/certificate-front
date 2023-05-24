import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import banner from '../../assets/banner.jpg'
import { AiOutlineSearch } from 'react-icons/ai'

function Home() {
  return (
    <div className='home'>
      <div className="banner">
        <img src={banner} alt="" />
        <div className="search-container">
          <h1>Algoritm Education <br/> Sertificate Generator</h1>
          <div className="search-input">
            <AiOutlineSearch/>
            <input type="text" placeholder='AT0000'/>
          </div>
          <Link to="/admin">Sertifikat Yaratish</Link>
        </div>
      </div>
    </div>
  )
}

export default Home