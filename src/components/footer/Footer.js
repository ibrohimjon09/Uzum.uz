import React from 'react'
import './Footer.css'
import { AiFillApple, AiFillInstagram, AiFillYoutube, AiFillFacebook } from "react-icons/ai";
import { BsGooglePlay, BsTelegram } from "react-icons/bs";

function Footer() {
  return (
    <div className='footer container'>
      <div className="footer_columns">
         <div className="footer_column1">
            <h2>Biz haqimizda</h2>
            <span>Topshirish punktlari</span><br />
            <span>Vakansiyalar</span>
         </div><br />
         <div className="footer_column2">
          <h2>Foydalanuvchilarga</h2>
          <span>Biz bilan bog'lanish</span><br />
          <span>Savol-Javob</span>
         </div><br />
         <div className="footer_column3">
          <h2>Tadbirkorlarga</h2>
          <span>Uzumda soting</span><br />
          <span>Sotuvchi kabinetiga kirish</span>
         </div><br />
         <div className="footer_column4">
          <h2>Ilovani yuklab olish</h2>
          <div className='footer_download-aplication'>
            <span><AiFillApple/> AppStore</span>
            <span><BsGooglePlay/> GooglePlay</span>
          </div>
          <div className='footer_social-network'>
             <span><AiFillInstagram/></span>
             <span><BsTelegram/></span>
             <span><AiFillYoutube/></span>
             <span><AiFillFacebook/></span>
          </div>
         </div>
      </div>
     </div>
  )
}

export default Footer