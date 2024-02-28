import axios from "axios";

const DeleteCloudinaryImage = async (publicId, folder) => {
  try {
    const cloudinaryParams = {
      folder: folder,
      public_id: publicId,
      api_key: import.meta.env.VITE_CLOUDINARY_APIKEY,
      api_secret: import.meta.env.VITE_CLOUDINARY_APISECRET,
    };
    console.log(cloudinaryParams);
    const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_NAME}/image/destroy`;

    const response = await axios.delete(cloudinaryUrl, { params: cloudinaryParams });

    if (response.data.result === 'ok') {
      console.log(`Cloudinary image with public ID ${publicId} deleted`);
    } else {
      console.error(`Failed to delete Cloudinary image`, response.data);
    }
  } catch (error) {
    console.error(`Error deleting Cloudinary image`, error);
  }
};

export default DeleteCloudinaryImage;
