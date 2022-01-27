import './App.css';
import React, { useEffect, useState } from 'react'
function App() {
  const [data, setData] = useState()

  useEffect(() => {
    fetch('http://localhost:3001/')
      .then(response => response.json())
      .then(data => setData(data))
    console.log(data)
  }, [])



  return (
    <div className='background'>
      <div className='content'>
        <img src="http://localhost:3001/profile.jpeg" alt="" className="profileImg col-7" />
        <div className="info ">
          <div>
            <p>HELLO EVERYBODY, I AM </p>
            <h1 className="name">{data.name}</h1>
            <h3>{data.major}</h3>
            <p> Full stack technology refers to the entire depth of a computer system application, and full stack developers straddle two separate web development domains: the front end and the back end. The front end includes everything that a client, or site viewer, can see and interact with.</p>
          </div>
          <ul className="information-items">
            <div className="information">
              <img className="info-icons" src="/calendar.svg" alt="" />
              <p>{data.birthday}</p>
            </div>
            <div className="information">
              <img className="info-icons" src="/phone.svg" alt="" />
              <p>{data.number}</p>
            </div>
            <div className="information">
              <img className="info-icons" src="/email.svg" alt="" />
              <p>{data.email}</p>
            </div>
            <div className="information">
              <img className="info-icons" src="/home.svg" alt="" />
              <p>{data.location}</p>
            </div>
          </ul>
          <ul className="social">
            <li><img src="/instagram.svg" alt="" className="social-icons" /></li>
            <li><img src="/discord.svg" alt="" className="social-icons" /></li>
            <li><img src="/fb.svg" alt="" className="social-icons" /></li>
            <li><img src="/fb.svg" alt="" className="social-icons" /></li>
            <li><img src="/fb.svg" alt="" className="social-icons" /></li>
            <li><img src="/fb.svg" alt="" className="social-icons" /></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
