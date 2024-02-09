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


const MultipleUploadImages = ({ setImage }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);


  const uploadImages = async (e) => {
    const files = e.target.files;

    try {
      setLoading(true);

      const data = new FormData();

      for (let i = 0; i < files.length; i++) {
        data.append('files', files[i]);
        data.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UNSIGNED_PRESET);
      }

      const uploadRes = await axios.post(
        import.meta.env.VITE_CLOUDINARY_URL,
        data
      );

      const uploadedImages = uploadRes.data.map((file) => file.secure_url);
      console.log(uploadedImages)
      setImages(uploadedImages);
      setImage(uploadedImages[0]);
    } catch (err) {
      console.error("Error uploading images", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Upload Images to Cloudinary</h1>
      <input type="file" onChange={uploadImages} multiple />
      {loading && <p>Uploading...</p>}
      {images.length > 0 && (
        <div>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Uploaded ${index + 1}`} style={{ width: '300px', marginRight: '10px' }} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MultipleUploadImages;
