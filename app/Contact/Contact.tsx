
import Link from 'next/link';
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl'>Contact info:</h2>
                <p className='text-pink-300 text-[18px] pt-2'></p>
                <div className='flex gap-3 items-center'>
                <MdOutlineAlternateEmail size={30} />zainiemusani@gmail.com</div>
                <div className='flex gap-3 items-center'>
                <FaWhatsapp size={30} />03230221265</div>
                <div className='flex gap-3 items-center'>
                <FaInstagram size={30} />Zainab Jawaid</div>
                <div className='flex gap-3 items-center'>
                <FaFacebookSquare size={30} /> Zainab Jawaid</div>
            </div>
            <div className='space-y-8'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor ="name">Name </label>
                    <input type="text"className='h-[40px] bg-transparent border border-rose'
                    id='Name'/>
                </div>
                <div className='space-y-8'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor ="email">Email</label>
                    <input type="text"className='h-[40px] bg-transparent border border-rose'
                    id='Email'/>
                    </div>
                 </div> 
                 <div className='space-y-8'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor ="message">Message</label>
                   <textarea className='h-[40px] bg-transparent border border-rose'
                     id='message' rows={8}/>
                    </div>
                    <button className='bg-rose-300 p-2 px-6'>Send</button>
                 </div> 
         </div>      
    </div>
    </div>
  )
}

export default Contact
