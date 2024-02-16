export const deleteCloudinaryImage = async (ruta) => {
  try {
    const deleteImage = ruta.imageUrl;
    const publicId = deleteImage.split('/').pop().split('.')[0];
    await axios.delete(deleteImage, {
      params: {
        public_id: publicId,
        api_key: import.meta.env.VITE_CLOUDINARY_APIKEY,
        api_secret: import.meta.env.VITE_CLOUDINARY_APISECRET,
      },
    });

    console.log(`Cloudinary image with public ID ${publicId} deleted`);
  } catch (error) {
    console.error(`Error deleting Cloudinary image`, error);
  }
};
