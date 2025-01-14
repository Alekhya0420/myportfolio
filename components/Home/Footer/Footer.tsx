import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='pt-16 pb-16 bg-[#240b39]'>

    <div>   
    <Image 
    src="/images/logo.png" 
    alt='logo' 
    width={100} 
    height={180} 
    className='mx-auto'>
    </Image>
    </div>

    <div className='flex items-center flex-wrap  justify-center space-x-10 space-y-4 text-white font-bold'>
        <div>Home</div>
        <div>About</div>
        <div>Knowledge</div>
        <div>Project</div>
        <div>Details</div>
    </div>
    <p className='text-gray-300 text-opacity-90 mt-6 text-center'>This is all abot me,read it carefully,if any issue then positively contact me ✌</p>
    </div>
  )
}

export default Footer