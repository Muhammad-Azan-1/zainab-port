
import Link from 'next/link'

const Skill = () => {
  return (
    <div id='skill' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div>
                <h2 className='text-4xl md:text-5xl'>Skills And Expertise</h2>
                <p className='text-palevioletred-500 pt-2'>
                "Equipped with a versatile skill set in web development, I specialize in building responsive
                 like HTML, CSS and JAVASCRIPT, high-performance applications using modern frameworks and clean,
                  maintainable code."
                </p>
            </div>
            <div className='grid grid-cols-2 text-rose-400 text-3xl sm:text-4xl'>
              <div className='space-y-2'>
              <h2>HTML</h2>
              <h2>CSS</h2>
              <h2>Javascript</h2>
              </div>
              
              <div className='space-y-2'>
              <h2>Typescript</h2>
              <h2>Next.js</h2>
              <h2>React.js</h2>
              </div>

            </div>
        </div>
      
    </div>
  )
}

export default Skill
