import { Resolvers } from "../generated/graphql";

const resolvers: Resolvers = {
  Customer: {
    orders: async (parent, _args, { dataSources }) =>
      dataSources.storeApi.getUserCarts(parent.id),
  },
  Order: {
    deliveryDate: () => new Date().toString(),
  },
  Mutation: {
    placeOrder: async (_parent, { input }, { dataSources }) => {
      const cart = await dataSources.storeApi.createCart(
        1,
        input.deliveryDate,
        [],
      );

      return {
        order: cart,
        success: true,
        code: 200,
      };
    },
  },
  Query: {
    customer: async (_parent, { id }, { dataSources }) => {
      const user = await dataSources.storeApi.getUser(id);

      return {
        ...user,
        id: user.id.toString(),
        firstName: user.name.firstname,
        orders: [],
      };
    },
    order: async (_parent, { id }, { dataSources }) =>
      dataSources.storeApi.getCart(id),
    orders: async (_parent, _args, { dataSources }) =>
      dataSources.storeApi.getCarts(),
  },
};

export default resolvers;
