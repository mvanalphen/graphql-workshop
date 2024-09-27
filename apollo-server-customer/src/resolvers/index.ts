import { Resolvers } from "../generated/graphql";

const resolvers: Resolvers = {
  Customer: {
    __resolveReference: async (reference, { dataSources }) => {
      const user = await dataSources.storeApi.getUser(reference.id);

      return {
        ...reference,
        ...user,
        id: user.id.toString(),
        firstName: user.name.firstname,
      };
    },
    isActive: ({ orders }) => {
      return orders.length > 0;
    },
  },
  Query: {
    customer: async (_parent, { id }, { dataSources }) => {
      const user = await dataSources.storeApi.getUser(id);

      return {
        ...user,
        id: user.id.toString(),
        firstName: user.name.firstname,
      };
    },
  },
};

export default resolvers;
