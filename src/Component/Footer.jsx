import React from 'react'
import img44 from "../img/Group 5488.png"
import img45 from "../img/face book.png"
import img46 from "../img/twitter.png"
import img47 from "../img/twitter (1).png"
import img48 from "../img/youtub.png"
import img49 from "../img/Mask group.png"
import img50 from "../img/Mask group (1).png"

export default function Footer() {

  return (
    <div>
      <footer className=' mt-20 bg-[#183153] pt-10 text-white'>
        <div className=' max-w-[1300px] m-auto'>
          <div className=' flex justify-center'>
            <div className=' flex justify-center gap-24'>
              <div>
                <h1 className=' text-[39px] font-bold '>Logo</h1>
                <img src={img44} alt="" className=' mt-2' />
                <div className=" flex gap-3 mt-3">
                  <img className=' cursor-pointer' src={img45} alt="" />
                  <img className=' cursor-pointer' src={img46} alt="" />
                  <a href="https://www.instagram.com/code_by_mashhur/">
                    <img className=' cursor-pointer' src={img47} alt="" />
                  </a>
                  <a href="https://www.youtube.com/@teo.mashhur.2011">
                    <img className=' cursor-pointer' src={img48} alt="" />
                  </a>
                </div>
                <h1 className=' mt-2'>Har bir sayohatingiz qulay bo'lishiga ishonch hosil qilamiz.</h1>
              </div>
              <div>
                <h1 className=' text-[25px] font-semibold mt-3 '>Foydalanuvchilar</h1>
                <img src={img44} alt="" className=' mt-2' />
                <p className=' text-[15px] mt-3'>Mashhurbek Ergashev</p>
                <p className=' text-[15px]'>Fazliddin Nizomiddinov</p>
                <p className=' text-[15px]'>Asilbek Numonov</p>
              </div>
              <div>
                <h1 className=' text-[25px] font-semibold mt-3 '>Havolalar</h1>
                <img src={img44} alt="" className=' mt-2' />
                <p className=' text-[15px] mt-3 text-[#fec00f]'><a href="https://iqtidoracademy.uz/">@IqtidorAcademy</a></p>
                <p className=' text-[15px] text-[#fec00f]'><a href="https://t.me/Teo_Mashhur">@MashhurVibe.uz</a></p>
              </div>
              <div>
                <h1 className=' text-[25px] font-semibold mt-3 '>Contact</h1>
                <img src={img44} alt="" className=' mt-2' />
                <div className=" flex items-center mt-3 gap-5">
                  <img className=' w-[20px]' src={img49} alt="" />
                  <h1>ergashevmashhurbek08@gmail.com</h1>
                </div>
                <div className=" flex items-center mt-2 gap-5">
                  <img className=' w-[20px]' src={img50} alt="" />
                  <h1>97+380-42-88</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full h-1 mt-10 bg-black/50"></div>
        <div className=" flex p-2 justify-center">
          <h1 className=' text-white'>© 2025 All rights reserved</h1>
        </div>
      </footer>
    </div>
  )
}