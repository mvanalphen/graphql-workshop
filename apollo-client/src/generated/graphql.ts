import gql from "graphql-tag";
import * as VueApolloComposable from "@vue/apollo-composable";
import type * as VueCompositionApi from "vue";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  _Any: { input: any; output: any };
  federation__FieldSet: { input: any; output: any };
  federation__Policy: { input: any; output: any };
  federation__Scope: { input: any; output: any };
  link__Import: { input: any; output: any };
};

export type Customer = {
  __typename?: "Customer";
  firstName?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  lastName?: Maybe<Scalars["String"]["output"]>;
  orders: Array<Order>;
};

export type Mutation = {
  __typename?: "Mutation";
  placeOrder: PlaceOrderResponse;
};

export type MutationPlaceOrderArgs = {
  input: PlaceOrderInput;
};

export type Order = {
  __typename?: "Order";
  customer: Customer;
  deliveryDate: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
};

export type PlaceOrderInput = {
  deliveryDate: Scalars["String"]["input"];
};

export type PlaceOrderResponse = {
  __typename?: "PlaceOrderResponse";
  code: Scalars["Int"]["output"];
  order?: Maybe<Order>;
  success: Scalars["Boolean"]["output"];
};

export type Query = {
  __typename?: "Query";
  _service: _Service;
  customer?: Maybe<Customer>;
  order?: Maybe<Order>;
  orders: Array<Order>;
};

export type QueryCustomerArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryOrderArgs = {
  id: Scalars["ID"]["input"];
};

export type _Service = {
  __typename?: "_Service";
  sdl?: Maybe<Scalars["String"]["output"]>;
};

export enum Link__Purpose {
  /** `EXECUTION` features provide metadata necessary for operation execution. */
  EXECUTION = "EXECUTION",
  /** `SECURITY` features provide metadata necessary to securely resolve fields. */
  SECURITY = "SECURITY",
}

export type TestMutationOperationMutationVariables = Exact<{
  input: PlaceOrderInput;
}>;

export type TestMutationOperationMutation = {
  __typename?: "Mutation";
  placeOrder: {
    __typename?: "PlaceOrderResponse";
    success: boolean;
    code: number;
    order?: { __typename?: "Order"; id: string; deliveryDate: string } | null;
  };
};

export type TestQueryOperationQueryVariables = Exact<{
  orderId: Scalars["ID"]["input"];
  customerId: Scalars["ID"]["input"];
}>;

export type TestQueryOperationQuery = {
  __typename?: "Query";
  order?: { __typename?: "Order"; id: string; deliveryDate: string } | null;
  customer?: {
    __typename?: "Customer";
    id: string;
    firstName?: string | null;
    orders: Array<{ __typename?: "Order"; id: string; deliveryDate: string }>;
  } | null;
};

export const TestMutationOperationDocument = gql`
  mutation TestMutationOperation($input: PlaceOrderInput!) {
    placeOrder(input: $input) {
      order {
        id
        deliveryDate
      }
      success
      code
    }
  }
`;

/**
 * __useTestMutationOperationMutation__
 *
 * To run a mutation, you first call `useTestMutationOperationMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useTestMutationOperationMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useTestMutationOperationMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useTestMutationOperationMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        TestMutationOperationMutation,
        TestMutationOperationMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          TestMutationOperationMutation,
          TestMutationOperationMutationVariables
        >
      > = {},
) {
  return VueApolloComposable.useMutation<
    TestMutationOperationMutation,
    TestMutationOperationMutationVariables
  >(TestMutationOperationDocument, options);
}
export type TestMutationOperationMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    TestMutationOperationMutation,
    TestMutationOperationMutationVariables
  >;
export const TestQueryOperationDocument = gql`
  query TestQueryOperation($orderId: ID!, $customerId: ID!) {
    order(id: $orderId) {
      id
      deliveryDate
    }
    customer(id: $customerId) {
      id
      firstName
      orders {
        id
        deliveryDate
      }
    }
  }
`;

/**
 * __useTestQueryOperationQuery__
 *
 * To run a query within a Vue component, call `useTestQueryOperationQuery` and pass it any options that fit your needs.
 * When your component renders, `useTestQueryOperationQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useTestQueryOperationQuery({
 *   orderId: // value for 'orderId'
 *   customerId: // value for 'customerId'
 * });
 */
export function useTestQueryOperationQuery(
  variables:
    | TestQueryOperationQueryVariables
    | VueCompositionApi.Ref<TestQueryOperationQueryVariables>
    | ReactiveFunction<TestQueryOperationQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        TestQueryOperationQuery,
        TestQueryOperationQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          TestQueryOperationQuery,
          TestQueryOperationQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          TestQueryOperationQuery,
          TestQueryOperationQueryVariables
        >
      > = {},
) {
  return VueApolloComposable.useQuery<
    TestQueryOperationQuery,
    TestQueryOperationQueryVariables
  >(TestQueryOperationDocument, variables, options);
}
export function useTestQueryOperationLazyQuery(
  variables?:
    | TestQueryOperationQueryVariables
    | VueCompositionApi.Ref<TestQueryOperationQueryVariables>
    | ReactiveFunction<TestQueryOperationQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        TestQueryOperationQuery,
        TestQueryOperationQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          TestQueryOperationQuery,
          TestQueryOperationQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          TestQueryOperationQuery,
          TestQueryOperationQueryVariables
        >
      > = {},
) {
  return VueApolloComposable.useLazyQuery<
    TestQueryOperationQuery,
    TestQueryOperationQueryVariables
  >(TestQueryOperationDocument, variables, options);
}
export type TestQueryOperationQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    TestQueryOperationQuery,
    TestQueryOperationQueryVariables
  >;
