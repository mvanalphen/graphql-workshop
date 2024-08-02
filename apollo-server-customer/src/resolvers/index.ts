import { Resolvers } from "../generated/graphql";

const resolvers: Resolvers = {
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
  },
};

export default resolvers;
