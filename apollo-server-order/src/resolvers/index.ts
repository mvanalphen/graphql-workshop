import { Resolvers } from "../generated/graphql";

const resolvers: Resolvers = {
  Customer: {
    __resolveReference: (reference) => reference,
    orders: async (reference, _args, { dataSources }) => {
      const result = await dataSources.storeApi.getUserCarts(reference.id);

      return result.map((cart) => ({
        ...reference,
        ...cart,
        customer: {
          id: cart.userId,
        },
      }));
    },
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
        order: {
          ...cart,
          customer: {
            id: cart.userId,
          },
        },
        success: true,
        code: 200,
      };
    },
  },
  Query: {
    order: async (_parent, { id }, { dataSources }) => {
      const cart = await dataSources.storeApi.getCart(id);

      return {
        ...cart,
        customer: {
          id: cart.userId,
        },
      };
    },
    orders: async (_parent, _args, { dataSources }) => {
      const result = await dataSources.storeApi.getCarts();

      return result.map((cart) => ({
        ...cart,
        customer: {
          id: cart.userId,
        },
      }));
    },
  },
};

export default resolvers;
