import { StoreAPI } from "../data-sources/store-api";

export interface Context {
  dataSources: {
    storeApi: StoreAPI;
  };
}
