import { RESTDataSource } from "@apollo/datasource-rest";
import { Cart } from "../models/cart";
import { User } from "../models/user";

export class StoreAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://fakestoreapi.com/";
  }

  getUser(userId: string | number): Promise<User> {
    return this.get(`users/${userId}`);
  }
}
