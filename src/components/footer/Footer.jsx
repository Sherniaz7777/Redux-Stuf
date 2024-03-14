import React from 'react'
import logotip from "../../imgs/Vector (3).png";
import logtitle from "../../imgs/Vector (2).png";
import {  } from "../footer/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
           <div>
              <img src={logotip} alt="" />
              <img src={logtitle} alt="" />
           </div>
           <div>
            <p>Developed by <span>Tomkovich</span></p>
           </div>
           <div className='icons'>
           <i class="bi bi-youtube"></i>
           <i class="bi bi-facebook"></i>
           <i class="bi bi-instagram"></i>
           </div>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer