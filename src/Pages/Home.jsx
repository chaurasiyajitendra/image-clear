import React, { useState } from 'react'
import ImageUpload from './ImageUpload'
import ImagePrivew from './ImagePrivew'
import {enhanceImageAPI} from '../utils/api';

const Home = () => {
    const [uploadImage, setUploadImage] = useState(null);
    const [enhanceImage, setEnhanceImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const UploadImageHandler = async(file) =>{
      setUploadImage(URL.createObjectURL(file));
      setLoading(true);

      try{
        const enhanceURL = await enhanceImageAPI(file);
        setEnhanceImage(enhanceURL.image);
        setLoading(false);
      }catch(error){
        console.log(error);
        alert("Something went wrong while enhancing the image.");
        
      }

    }
    
  return (
    <>
        <ImageUpload UploadImageHandler={UploadImageHandler} />
        <ImagePrivew
            uploadImage={uploadImage}
            enhanceImage={enhanceImage}
            loading={loading} 
        />
    </>

  )
}

export default Home
