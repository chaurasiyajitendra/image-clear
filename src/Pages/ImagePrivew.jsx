import React from 'react'
import Loading from './Loading'

const ImagePrivew = (prp) => {
  return (
    <div className=' grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 w-[55%]'>
        {/* Orginal Image */}
        <div className='bg-white text-gray-200 text-center rounded-lg'>
           <h1 className='font-bold rounded-t-lg py-1 bg-zinc-900 text-xl'>Orginal Image</h1> 
           <div className='flex items-center justify-center overflow-hidden h-96'>
            <img src={prp.uploadImage} alt="" className='object-cover' />
           </div>
        </div>
        {/* Enhanced Image */}
        <div className=' bg-white text-gray-200 text-center rounded-lg'>
           <h1 className='font-bold text-xl py-1 rounded-t-lg bg-blue-900'>Enhanced Image</h1> 
           {prp.enhanceImage ?(
            <div className='flex items-center justify-center overflow-hidden h-96 '>
              <img src={prp.enhanceImage} alt="" className='w-full h-full object-cover' />
           </div>
            ):(
            <div className='flex items-center text-black justify-center overflow-hidden h-80 '>
               <Loading />
            </div>
           )} 
        </div>
    </div>
  )
}

export default ImagePrivew
