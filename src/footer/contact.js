import React from 'react'
import { MdAddIcCall } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaAddressBook } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='parent text-2xl'>
      <div className='container flex justify-around mt-11 '>
        <div className=' border-solid border-2 border-emerald-300 w-60 h-60 '>
          <h1 className=' mt-5'>Contact</h1>
          <p>Our number <br /> 9677959395 </p><br />
          <a className='flex justify-center'>  <MdAddIcCall /> </a>

        </div>
        <div className='border-solid border-2 border-emerald-300 w-60 h-60'>
          <h1 className=' mt-5'>Gmail</h1>
          <p>Our Gmail <br /> Ashai@gmail.com </p>
          <a className=' flex justify-center mt-4'>
            <CiMail />
          </a>

        </div>


        <div className='border-solid border-2 border-emerald-300 w-60 h-60'>
          <h1 className=' mt-5'  >Address</h1>
          <p>Our Address <br /> 13/15 Athilai street kilakarai </p>
          <a className='flex justify-center'><FaAddressBook /></a>
        </div>

      </div>
    </div>
  )
}

export default Contact;
