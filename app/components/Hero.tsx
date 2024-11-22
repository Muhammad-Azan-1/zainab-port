
import Navbar from './Navbar'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/Images/image1.jpg)] bg-left lg:bg-[2%] bg-cover'
    style={{backgroundSize: "31%",
            backgroundPosition: "left 60px top 60px"
    }}>
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc[100vh-600px]]'>
        <div className='hidden lg:block'></div>
        <div className='text-[60px] sm:text-[40px] font-bold leading-tight flex justify-center items-center'>
          <div>
           <h3> I'm</h3>
           <h3>Zainab Jawaid</h3>
            <h4>A Front End Developer</h4>
            
            <i>"Passionate about turning ideas into engaging digital experiences,</i>
             <i>I blend creativity with code to craft unique, user-centered solutions."</i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
