import React, { useState } from 'react';
import axios from 'axios';

// const ImageUpload = () => {
//   const [images, setImages] = useState([]);

//   const uploadImages = async (e) => {
//     const files = e.target.files;
//     const data = new FormData();

//     for (let i = 0; i < files.length; i++) {
//       console.log(files[i].name)
//       data.append('files', files[i]);
//       data.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UNSIGNED_PRESET);
//     }

    

//     try {
//       const uploadRes = await axios.post(
//         import.meta.env.VITE_CLOUDINARY_URL,
//         data
//       );
//       const uploadedUrls = uploadRes.data.map((data) => data.url);
//       console.log(uploadedUrls);
//       setImages(uploadedUrls);
//     } catch (err) {
//       console.error("Error uploading the images", err);
//     }
//   };


const ImageUpload = ({ setImage }) => {
  const [image, setImageLocal] = useState('');

  const uploadImage = async (e) => {
    const images = e.target.images;
    const data = new FormData();
    data.append('file', images[0]);
    data.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UNSIGNED_PRESET);

    try {
      const uploadRes = await axios.post(
        import.meta.env.VITE_CLOUDINARY_URL,
        data
      )

      const { secure_url } = uploadRes.data;
      setImageLocal(secure_url);
      setImage(secure_url);
      console.log(secure_url);
    } catch (err) {
      console.error("Error uploading the image", err);
    }
  };

  return (
    <div>
      <h1>Upload Image to Cloudinary</h1>
      <input type="file" onChange={uploadImage} />
      {image && <img src={image} alt="Uploaded" style={{ width: '300px' }} />}
    </div>
  );
};


export default ImageUpload;
