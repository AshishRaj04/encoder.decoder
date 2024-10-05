const conf = {
  appwriteURL: String(process.env.APPWRITE_URL),
  appwriteProject_ID: String(process.env.APPWRITE_PROJECT_ID),
  database_ID: String(DATABASE_ID),
  collection_ID: String(COLLECTION_ID),
  bucket_ID: String(BUCKET_ID),
};

export default conf;
