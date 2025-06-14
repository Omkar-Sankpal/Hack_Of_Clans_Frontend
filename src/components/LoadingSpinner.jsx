import React from 'react'
import {motion} from 'framer-motion'; 

const LoadingSpinner = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 to-violet-900 flex flex-col items-center justify-center relative overflow-hidden'>
    <motion.div
        className='w-16 h-16 border-4 border-t-4 border-t-purple-500 border-white rounded-full'
        animate = {{rotate: 360}}
        transition= {{duration:1, repeat: Infinity, ease: "easeInOut"}}
    ></motion.div>
    <div className='font-semibold font-poppins text-white'>
        Hang on while the Backend starts ... 
    </div>
    </div>
  )
}

export default LoadingSpinner