const conf = {
  appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProject_ID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  database_ID: String(import.meta.env.VITE_DATABASE_ID),
  collection_ID: String(import.meta.env.VITE_COLLECTION_ID),
  bucket_ID: String(import.meta.env.VITE_BUCKET_ID),
  tinyMCE_key: String(import.meta.env.VITE_TINYMCE_API),
  secretAPIKey: String(import.meta.env.VITE_SECRET_API_KEY)
};

export default conf;
