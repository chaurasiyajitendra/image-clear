import React from 'react'

const ImageUpload = (props) => {
    const showImage = (e) => {
        const file = e.target.files[0];
        if(file){
          props.UploadImageHandler(file);
        }
    }
  return (
    <div className='bg-white shadow-md w-[50%] rounded-lg p-3 mb-6'>
      <label htmlFor="fileInput" 
      className='block text-center text-lg border-4 border-dashed rounded px-2 py-5 border-gray-300 text-gray-500 font-semibold cursor-pointer 
      hover:bg-gray-300 hover:text-gray-900 hover:border-blue-500 transition-colors duration-200'
      >
        <input type="file" id='fileInput' className=' hidden' onChange={showImage} />
       Click and Drag to Upload Image
      </label>
    </div>
  )
}

export default ImageUpload
