import { GraphQLResolveInfo } from "graphql";
import { CustomerEntityRepresentation } from "../models/customer-entity-representation";
import { OrderEntityRepresentation } from "../models/order-entity-representation";
import { Context } from "../models/context";
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
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  _FieldSet: { input: any; output: any };
};

export class Customer {
  id: Scalars["ID"]["output"];
  orders: Array<Order>;
}

export class Mutation {
  placeOrder: PlaceOrderResponse;
}

export type MutationPlaceOrderArgs = {
  input: PlaceOrderInput;
};

export class Order {
  customer?: Maybe<Customer>;
  deliveryDate: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
}

export type PlaceOrderInput = {
  deliveryDate: Scalars["String"]["input"];
};

export class PlaceOrderResponse {
  code: Scalars["Int"]["output"];
  order?: Maybe<Order>;
  success: Scalars["Boolean"]["output"];
}

export class Query {
  order?: Maybe<Order>;
  orders: Array<Order>;
}

export type QueryOrderArgs = {
  id: Scalars["ID"]["input"];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ReferenceResolver<TResult, TReference, TContext> = (
  reference: TReference,
  context: TContext,
  info?: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

type ScalarCheck<T, S> = S extends true ? T : NullableCheck<T, S>;
type NullableCheck<T, S> =
  Maybe<T> extends T ? Maybe<ListCheck<NonNullable<T>, S>> : ListCheck<T, S>;
type ListCheck<T, S> = T extends (infer U)[]
  ? NullableCheck<U, S>[]
  : GraphQLRecursivePick<T, S>;
export type GraphQLRecursivePick<T, S> = {
  [K in keyof T & keyof S]: ScalarCheck<T[K], S[K]>;
};

export type Resolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {},
> = ResolverFn<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info?: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info?: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info?: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Customer: ResolverTypeWrapper<CustomerEntityRepresentation>;
  ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
  Mutation: ResolverTypeWrapper<{}>;
  Order: ResolverTypeWrapper<OrderEntityRepresentation>;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  PlaceOrderInput: PlaceOrderInput;
  PlaceOrderResponse: ResolverTypeWrapper<
    Omit<PlaceOrderResponse, "order"> & {
      order?: Maybe<ResolversTypes["Order"]>;
    }
  >;
  Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
  Query: ResolverTypeWrapper<{}>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Customer: CustomerEntityRepresentation;
  ID: Scalars["ID"]["output"];
  Mutation: {};
  Order: OrderEntityRepresentation;
  String: Scalars["String"]["output"];
  PlaceOrderInput: PlaceOrderInput;
  PlaceOrderResponse: Omit<PlaceOrderResponse, "order"> & {
    order?: Maybe<ResolversParentTypes["Order"]>;
  };
  Int: Scalars["Int"]["output"];
  Boolean: Scalars["Boolean"]["output"];
  Query: {};
}>;

export type CustomerResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["Customer"] = ResolversParentTypes["Customer"],
> = ResolversObject<{
  __resolveReference?: ReferenceResolver<
    Maybe<ResolversTypes["Customer"]>,
    { __typename: "Customer" } & GraphQLRecursivePick<ParentType, { id: true }>,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  orders?: Resolver<Array<ResolversTypes["Order"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"],
> = ResolversObject<{
  placeOrder?: Resolver<
    ResolversTypes["PlaceOrderResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationPlaceOrderArgs, "input">
  >;
}>;

export type OrderResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["Order"] = ResolversParentTypes["Order"],
> = ResolversObject<{
  __resolveReference?: ReferenceResolver<
    Maybe<ResolversTypes["Order"]>,
    { __typename: "Order" } & GraphQLRecursivePick<ParentType, { id: true }>,
    ContextType
  >;
  customer?: Resolver<
    Maybe<ResolversTypes["Customer"]>,
    ParentType,
    ContextType
  >;
  deliveryDate?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PlaceOrderResponseResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["PlaceOrderResponse"] = ResolversParentTypes["PlaceOrderResponse"],
> = ResolversObject<{
  code?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes["Order"]>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = ResolversObject<{
  order?: Resolver<
    Maybe<ResolversTypes["Order"]>,
    ParentType,
    ContextType,
    RequireFields<QueryOrderArgs, "id">
  >;
  orders?: Resolver<Array<ResolversTypes["Order"]>, ParentType, ContextType>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  Customer?: CustomerResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  PlaceOrderResponse?: PlaceOrderResponseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
}>;
