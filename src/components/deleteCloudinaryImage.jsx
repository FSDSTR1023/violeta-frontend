import axios from "axios";

const instanceaxios = axios.create({
  withCredentials: true,
});

const deleteCloudinaryImage = async (publicId, folder) => {
  try {
    const cloudinaryParams = {
      public_id: folder ? `${folder}/${publicId}` : publicId,
      api_key: import.meta.env.VITE_CLOUDINARY_APIKEY,
      api_secret: import.meta.env.VITE_CLOUDINARY_APISECRET,
    };
    const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_NAME}/image/destroy`;

    await instanceaxios.delete(cloudinaryUrl, {}, { params: cloudinaryParams });

    console.log(`Cloudinary image with public ID ${publicId} deleted`);
  } catch (error) {
    console.error(`Error deleting Cloudinary image`, error);
  }
};

export default deleteCloudinaryImage;
