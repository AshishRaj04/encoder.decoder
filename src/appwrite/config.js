import conf from "../conf/conf.js";
import { Client, Databases, Storage, Query , ID} from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProject_ID);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.database_ID,
        conf.collection_ID,
        slug
      );
    } catch (error) {
      console.error("Appwrite service :: getPost() :: ", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("is_published", true)]) {
    try {
      return await this.databases.listDocuments(
        conf.database_ID,
        conf.collection_ID,
        queries
      );
    } catch (error) {
      console.error("Appwrite service :: getPosts() :: ", error);
      return false;
    }
  }

  async createPost({
    title,
    content,
    slug,
    author,
    date,
    tags,
    excerpt,
    is_published,
    featuredImage,
  }) {
    try {
      return await this.databases.createDocument(
        conf.database_ID,
        conf.collection_ID,
        slug,
        {
          title,
          content,
          author,
          date,
          tags,
          excerpt,
          is_published,
          featuredImage,
        }
      );
    } catch (error) {
      console.error("Appwrite service :: createPost() :: ", error);
      return false;
    }
  }

  async updatePost(
    slug,
    { title, content, date, excerpt, is_published, featuredImage }
  ) {
    try {
      return await this.databases.updateDocument(
        conf.database_ID,
        conf.collection_ID,
        slug,
        {
          title,
          content,
          date,
          excerpt,
          is_published,
          featuredImage,
        }
      );
    } catch (error) {
      console.error("Appwrite service :: updatePost() :: ", error);
    }
  }
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.database_ID,
        conf.collection_ID,
        slug
      );
      return true;
    } catch (error) {
      console.error("Appwrite service :: deletePost() :: ", error);
    }
  }

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(conf.bucket_ID, ID.unique(), file);
    } catch (error) {
      console.error("Appwrite service :: uploadFile() :: ", error);
      return false;
    }
  }

  async deleteFile(fileID) {
    try {
      return await this.bucket.deleteFile(conf.bucket_ID, fileID);
    } catch (error) {
      console.error("Appwrite service :: deleteFile() :: ", error);
      return false;
    }
  }

  previewFile(fileID) {
    return this.bucket.getFilePreview(conf.bucket_ID, fileID).href;
  }
}

const service = new Service()
export default service;