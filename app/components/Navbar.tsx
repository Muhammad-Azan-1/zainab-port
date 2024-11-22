
import { VscLayoutMenubar } from "react-icons/vsc";
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div className='text-xl font-medium'>Zainab Jawaid </div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
                <li className='menulink'><a href="#hero">Home</a></li>
                <li className='menulink'><a href="#about">About</a></li>
                <li className='menulink'><a href="#contact">Contact</a></li>
                <li className='menulink'><a href="#skill">Skill</a></li>
                
            </ul>
            <VscLayoutMenubar className='md:hidden'size={30}/>
         </div>
      
    </div>
  )
}

export default Navbar
