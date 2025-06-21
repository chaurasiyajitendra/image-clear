import axios from "axios";

const API_KEY = 'wxo0q2grttsmf97b8';
const BASE_URL = 'https://techhk.aoscdn.com';
export const enhanceImageAPI = async (file) =>{
    try{
        const taskId = await uploadImage(file);
        // console.log("Image uploaded successfully, Task ID:", taskId);

        const enhanceImageData = await pollForEnhancedImage(taskId);
        // console.log("Enhanced image data:", enhanceImageData);
        return enhanceImageData;
    }catch(error){
        console.error("Error uploading image:", error);
    }
};

const uploadImage = async (file) =>{
    const formData = new FormData();
    formData.append('image_file', file);
    const {data} = await axios.post(`${BASE_URL}/api/tasks/visual/scale`,formData,{
        headers:{
            'Content-Type': 'multipart/form-data',
            "X-API-KEY": API_KEY
        }
    })
    if (!data || !data.data || !data.data.task_id) {
        throw new Error("Failed to upload Image invalid task ID");
    }

    // console.log(data.data.task_id);
    
    return data.data.task_id; 
}

const fetchEnhancedImage = async (taskId) => {
    const {data} = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${taskId}`,{
        headers: {
            "X-API-KEY": API_KEY
        }
    });
    
    return data.data
}

const pollForEnhancedImage = async (taskId,retries = 0) =>{
    const result = await fetchEnhancedImage(taskId);

    if(result.state === 4){
        console.log('Processing.....');

        if(retries >=20){
            throw new Error("Image enhancement timed out after 20 retries.");
        }

        await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 5 seconds before retrying

        return pollForEnhancedImage(taskId, retries + 1);
    }
    return result;
}