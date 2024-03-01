import {Cloudinary} from "@cloudinary/url-gen";

const DeleteCloudinaryImage = async (publicId, folder) => {
  try {
    Cloudinary.config({
      folder: folder,
      cloud_name: import.meta.env.VITE_CLOUDINARY_NAME,
      api_key: import.meta.env.VITE_CLOUDINARY_APIKEY,
      api_secret: import.meta.env.VITE_CLOUDINARY_APISECRET,
    });

    Cloudinary.uploader.destroy(publicId, function(result) { console.log(result) });

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
