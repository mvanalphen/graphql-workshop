import { RESTDataSource } from "@apollo/datasource-rest";
import { Cart } from "../models/cart";
import { User } from "../models/user";

export class StoreAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://fakestoreapi.com/";
  }

  getCarts(): Promise<Cart[]> {
    return this.get("carts");
  }

  getCart(cartId: string | number): Promise<Cart> {
    return this.get(`carts/${cartId}`);
  }

  createCart(
    userId: string | number,
    date: string,
    products: string[],
  ): Promise<Cart> {
    return this.post("carts", {
      body: {
        userId,
        date,
        products,
      },
    });
  }

  getUserCarts(userId: string | number): Promise<Cart[]> {
    return this.get(`carts/user/${userId}`);
  }

  getUser(userId: string | number): Promise<User> {
    return this.get(`users/${userId}`);
  }
}
