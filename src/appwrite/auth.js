import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setProject(conf.appwriteProject_ID);
    this.account = new Account(this.client);
  }
}

const authService = new AuthService();

export default authService;
