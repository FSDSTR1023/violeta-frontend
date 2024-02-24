import React, { useState } from 'react';
import axios from 'axios';


const ImageUpload = ({ setImage }) => {
  const [image, setImageLocal] = useState('');

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UNSIGNED_PRESET);
    data.append('folder', 'rutas');

    try {
      const uploadRes = await axios.post(
        import.meta.env.VITE_CLOUDINARY_URL,
        data
      )

      console.log(uploadRes.data);
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
      <h1>Upload Image</h1>
      <input type="file" onChange={uploadImage} />
      {image && <img src={image} alt="Uploaded" style={{ width: '300px' }} />}
    </div>
  );
};


export default ImageUpload;
