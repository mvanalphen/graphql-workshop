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
  Date: { input: any; output: any };
  JSON: { input: any; output: any };
  Object: { input: any; output: any };
  _FieldSet: { input: any; output: any };
};

export type AcquiringStorePreference = {
  __typename?: "AcquiringStorePreference";
  complexNumber?: Maybe<Scalars["String"]["output"]>;
  sapId?: Maybe<Scalars["String"]["output"]>;
};

export type AcquiringStorePreferenceInput = {
  complexNumber?: InputMaybe<Scalars["String"]["input"]>;
  sapId?: InputMaybe<Scalars["String"]["input"]>;
};

export type ActionPeriod = {
  __typename?: "ActionPeriod";
  endDate: Scalars["String"]["output"];
  notification?: Maybe<Notification>;
  startDate: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
};

export type AddBasketLineInput = {
  line: BasketLineInput;
  type?: InputMaybe<BasketType>;
};

export type AddBasketLineResult = Basket | Error;

export type AddBasketLinesInput = {
  lines: Array<BasketLineInput>;
  type?: InputMaybe<BasketType>;
};

export type AddBasketLinesResult = Basket | Error;

export type AddProductListItemInput = {
  product: ProductListProductInput;
  quantity?: InputMaybe<ProductQuantityInput>;
};

export type Address = {
  __typename?: "Address";
  addition?: Maybe<Scalars["String"]["output"]>;
  city?: Maybe<Scalars["String"]["output"]>;
  country?: Maybe<CountryEnum>;
  houseNumber?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated use houseNumber instead */
  nr?: Maybe<Scalars["String"]["output"]>;
  postalCode?: Maybe<Scalars["String"]["output"]>;
  street?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated use addition instead */
  suffix?: Maybe<Scalars["String"]["output"]>;
  typeCode?: Maybe<AddressTypeEnum>;
};

export enum AddressTypeEnum {
  BILLING = "BILLING",
  DELIVERY = "DELIVERY",
  ESTABLISHMENT = "ESTABLISHMENT",
  HOME = "HOME",
}

export type AdjustedSearchTerm = {
  __typename?: "AdjustedSearchTerm";
  key?: Maybe<Scalars["String"]["output"]>;
  terms?: Maybe<Array<Maybe<SearchTerm>>>;
};

export type Allergy = {
  __typename?: "Allergy";
  /**  The allergy identifier.  */
  id?: Maybe<Scalars["Int"]["output"]>;
  /**  he allergy name/title.  */
  name?: Maybe<Scalars["String"]["output"]>;
};

export type Alternative = {
  __typename?: "Alternative";
  /** List of alternatives */
  alternatives?: Maybe<Array<Maybe<Product>>>;
  /** SKU of the product used to retrieve the alternatives */
  sku?: Maybe<Scalars["String"]["output"]>;
};

/** SKU and category pair to retrieve alternatives for */
export type AlternativesInput = {
  /** Parent category name of the product used to retrieve the alternatives */
  category?: InputMaybe<Scalars["String"]["input"]>;
  /** SKU of the product used to retrieve the alternatives */
  sku?: InputMaybe<Scalars["String"]["input"]>;
};

export type AmendOrderInput = {
  includeEcommerceBasket?: InputMaybe<Scalars["Boolean"]["input"]>;
  orderId: Scalars["Float"]["input"];
};

export type AuthorDetails = {
  __typename?: "AuthorDetails";
  awards: Array<AuthorDetailsAwards>;
  biography: Scalars["String"]["output"];
  certificates: Array<AuthorDetailsCertificates>;
  education: Array<AuthorDetailsEducation>;
  facts: Array<Scalars["String"]["output"]>;
  jobTitle: Scalars["String"]["output"];
  socials: Array<AuthorDetailsSocials>;
};

export type AuthorDetailsAwards = {
  __typename?: "AuthorDetailsAwards";
  issueDate?: Maybe<Scalars["String"]["output"]>;
  issuer: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export type AuthorDetailsCertificates = {
  __typename?: "AuthorDetailsCertificates";
  issueDate?: Maybe<Scalars["String"]["output"]>;
  issuer: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
};

export type AuthorDetailsEducation = {
  __typename?: "AuthorDetailsEducation";
  degree?: Maybe<Scalars["String"]["output"]>;
  fieldOfStudy?: Maybe<Scalars["String"]["output"]>;
  school: Scalars["String"]["output"];
};

export type AuthorDetailsSocials = {
  __typename?: "AuthorDetailsSocials";
  label: Scalars["String"]["output"];
  type: SocialMediaType;
  url: Scalars["String"]["output"];
};

export type AuthorProfile = {
  __typename?: "AuthorProfile";
  authorDetailPageSlug?: Maybe<Scalars["String"]["output"]>;
  customerID?: Maybe<Scalars["ID"]["output"]>;
  details?: Maybe<AuthorDetails>;
  hasAuthorDetailPage?: Maybe<Scalars["Boolean"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  image?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  verified?: Maybe<Scalars["Boolean"]["output"]>;
};

export enum Availability {
  AVAILABLE = "AVAILABLE",
  TEMPORARILY_UNAVAILABLE = "TEMPORARILY_UNAVAILABLE",
  UNAVAILABLE = "UNAVAILABLE",
}

export type AvgProfiling = {
  __typename?: "AvgProfiling";
  isAllowed?: Maybe<Scalars["Boolean"]["output"]>;
};

export type AvgProfilingInput = {
  isAllowed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type B2BInfo = {
  __typename?: "B2BInfo";
  balance?: Maybe<Balance>;
  billingEmailAddress?: Maybe<Scalars["String"]["output"]>;
  businessPartnerNumber?: Maybe<Scalars["String"]["output"]>;
  chamberOfCommerceDetails?: Maybe<ChamberOfCommerceDetails>;
  companyName?: Maybe<Scalars["String"]["output"]>;
  creditDetails?: Maybe<CreditDetails>;
  debtorNumber?: Maybe<Scalars["String"]["output"]>;
  invoice?: Maybe<Invoice>;
  paymentMethod?: Maybe<Scalars["String"]["output"]>;
};

/** Duplicating the CDMCustomer to make status non mandatory because of data issue with sub accounts where status does not exist */
export type B2BSubCustomer = {
  __typename?: "B2BSubCustomer";
  b2bDetails?: Maybe<Cdmb2BDetails>;
  contactInformation?: Maybe<CdmContactInformation>;
  customerId: Scalars["String"]["output"];
  status?: Maybe<CustomerStatusEnum>;
  username: Scalars["String"]["output"];
};

export type B2BSubInfo = {
  __typename?: "B2BSubInfo";
  b2bMasterDetails?: Maybe<MasterDetails>;
  branchName?: Maybe<Scalars["String"]["output"]>;
};

export type B2bContactInfo = {
  __typename?: "B2bContactInfo";
  contactGender?: Maybe<Scalars["String"]["output"]>;
  contactInitials?: Maybe<Scalars["String"]["output"]>;
  contactPrefix?: Maybe<Scalars["String"]["output"]>;
  contactSurname?: Maybe<Scalars["String"]["output"]>;
  contactTitle?: Maybe<Scalars["String"]["output"]>;
  contactTitle1?: Maybe<Scalars["String"]["output"]>;
  telephoneNumber?: Maybe<Scalars["String"]["output"]>;
};

export type B2bDetails = {
  __typename?: "B2bDetails";
  b2bSubDetails?: Maybe<B2bSubDetails>;
};

export type B2bSubDetails = {
  __typename?: "B2bSubDetails";
  active: Scalars["Boolean"]["output"];
  branchName?: Maybe<Scalars["String"]["output"]>;
};

export type Badge = {
  __typename?: "Badge";
  alt?: Maybe<Scalars["String"]["output"]>;
  image?: Maybe<Scalars["String"]["output"]>;
};

export type Balance = {
  __typename?: "Balance";
  balanceLastUpdate?: Maybe<Scalars["String"]["output"]>;
  creditLimit?: Maybe<Scalars["String"]["output"]>;
  outstandingBalance?: Maybe<Scalars["String"]["output"]>;
};

export type Basket = {
  __typename?: "Basket";
  basketContext?: Maybe<BasketContext>;
  calculateTotals?: Maybe<CalculateResult>;
  calculatedPrice?: Maybe<CalculatedPrice>;
  calculation?: Maybe<CalculationResult>;
  /** States if a basket has changed after creation. Will be null for non AMEND_ORDER baskets */
  contentsChanged?: Maybe<Scalars["Boolean"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  lines?: Maybe<Array<Maybe<BasketLine>>>;
  order?: Maybe<Order>;
  orderId?: Maybe<Scalars["Float"]["output"]>;
  totalProductCount?: Maybe<Scalars["Int"]["output"]>;
  type?: Maybe<BasketType>;
  vagueTerms?: Maybe<Array<Maybe<VagueTerm>>>;
  version?: Maybe<Scalars["String"]["output"]>;
};

export type BasketCalculateTotalsArgs = {
  calculateSummary?: InputMaybe<Scalars["Boolean"]["input"]>;
  date?: InputMaybe<Scalars["String"]["input"]>;
  storeId?: InputMaybe<Scalars["String"]["input"]>;
};

export type BasketCalculatedPriceArgs = {
  input: CheckoutBasketInput;
};

export type BasketCalculationArgs = {
  calculateSummary?: InputMaybe<Scalars["Boolean"]["input"]>;
  date?: InputMaybe<Scalars["String"]["input"]>;
  shippingCosts?: InputMaybe<MoneyTypeInput>;
  storeId?: InputMaybe<Scalars["String"]["input"]>;
  voucherCodes?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type BasketContext = {
  __typename?: "BasketContext";
  shippingCosts?: Maybe<Scalars["Int"]["output"]>;
};

export type BasketLine = {
  __typename?: "BasketLine";
  details?: Maybe<Product>;
  id?: Maybe<Scalars["String"]["output"]>;
  isAvailable?: Maybe<Scalars["Boolean"]["output"]>;
  /**
   * @deprecated details no longer support query parameters. Use product() instead
   * If you want a certain field like the availability to be based on a certain context, pass the parameter to that field instead.
   */
  lastModified?: Maybe<Scalars["String"]["output"]>;
  product?: Maybe<Product>;
  quantity?: Maybe<Scalars["Float"]["output"]>;
  sku?: Maybe<Scalars["String"]["output"]>;
};

export type BasketLineDetailsArgs = {
  cutoffDate?: InputMaybe<Scalars["String"]["input"]>;
  date?: InputMaybe<Scalars["String"]["input"]>;
  storeId?: InputMaybe<Scalars["String"]["input"]>;
};

export type BasketLineInput = {
  quantity: Scalars["Float"]["input"];
  sku: Scalars["String"]["input"];
};

export type BasketProduct = {
  __typename?: "BasketProduct";
  id?: Maybe<Scalars["String"]["output"]>;
  lastModified?: Maybe<Scalars["String"]["output"]>;
  quantity?: Maybe<Scalars["Float"]["output"]>;
  sku?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated We only have pieces as unit, will be removed in the future */
  unit?: Maybe<Scalars["String"]["output"]>;
};

export type BasketResult = Basket | Error;

export enum BasketType {
  AMENDORDER = "AMENDORDER",
  ECOMMERCE = "ECOMMERCE",
}

export type BasketTypeQueryResult = BasketTypeResult | Error;

export type BasketTypeResult = {
  __typename?: "BasketTypeResult";
  orderId?: Maybe<Scalars["Float"]["output"]>;
  type: BasketType;
};

export type Breadcrumb = {
  __typename?: "Breadcrumb";
  friendlyUrl?: Maybe<Scalars["String"]["output"]>;
  link: Scalars["String"]["output"];
  seoUrl?: Maybe<Scalars["String"]["output"]>;
  text: Scalars["String"]["output"];
};

export type Browser = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  version?: InputMaybe<Scalars["String"]["input"]>;
};

export type BuyingStampsBalance = {
  __typename?: "BuyingStampsBalance";
  amountOfFullCards?: Maybe<Scalars["Int"]["output"]>;
  amountOfStamps?: Maybe<Scalars["Float"]["output"]>;
  amountOfStampsPerCard?: Maybe<Scalars["Float"]["output"]>;
  monetaryValue?: Maybe<Scalars["Float"]["output"]>;
};

export type BuyingStampsBalanceInput = {
  amountOfFullCards?: InputMaybe<Scalars["Int"]["input"]>;
  amountOfStamps?: InputMaybe<Scalars["Float"]["input"]>;
  amountOfStampsPerCard?: InputMaybe<Scalars["Float"]["input"]>;
  monetaryValue?: InputMaybe<Scalars["Float"]["input"]>;
};

export type BuyingStampsCampaign = {
  __typename?: "BuyingStampsCampaign";
  actionPeriods?: Maybe<Array<Maybe<ActionPeriod>>>;
  active: Scalars["Boolean"]["output"];
  balance?: Maybe<BuyingStampsBalance>;
  campaignCode: Scalars["String"]["output"];
  campaignData: CampaignData;
  endDate: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  startDate: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
};

export type CdmAddress = {
  __typename?: "CDMAddress";
  apartment?: Maybe<Scalars["String"]["output"]>;
  city?: Maybe<Scalars["String"]["output"]>;
  countryCode?: Maybe<Scalars["String"]["output"]>;
  postalCode?: Maybe<Scalars["String"]["output"]>;
  street?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  unit?: Maybe<Scalars["String"]["output"]>;
};

export type CdmAddressInput = {
  apartment?: InputMaybe<Scalars["String"]["input"]>;
  city?: InputMaybe<Scalars["String"]["input"]>;
  countryCode?: InputMaybe<Scalars["String"]["input"]>;
  postalCode?: InputMaybe<Scalars["String"]["input"]>;
  street?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  unit?: InputMaybe<Scalars["String"]["input"]>;
};

export type Cdmb2BDetails = {
  __typename?: "CDMB2BDetails";
  b2bInfo?: Maybe<B2BInfo>;
  b2bSubInfo?: Maybe<B2BSubInfo>;
  billingReference?: Maybe<Scalars["String"]["output"]>;
};

export type Cdmb2BDetailsInput = {
  b2bInfo?: InputMaybe<Cdmb2BInfoInput>;
  b2bSubInfo?: InputMaybe<Cdmb2BSubInfoInput>;
  billingReference?: InputMaybe<Scalars["String"]["input"]>;
};

export type Cdmb2BInfoInput = {
  billingEmailAddress?: InputMaybe<Scalars["String"]["input"]>;
  invoice?: InputMaybe<CdmInvoiceInput>;
};

export type Cdmb2BSubInfoInput = {
  branchName?: InputMaybe<Scalars["String"]["input"]>;
};

export type CdmContactInformation = {
  __typename?: "CDMContactInformation";
  addresses?: Maybe<Array<Maybe<CdmAddress>>>;
  dateOfBirth?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  gender?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<CdmName>;
  telephones?: Maybe<Array<Maybe<Telephone>>>;
};

export type CdmCustomer = {
  __typename?: "CDMCustomer";
  activeDeliverySubscription?: Maybe<DeliverySubscriptionDetails>;
  b2bDetails?: Maybe<Cdmb2BDetails>;
  contactInformation?: Maybe<CdmContactInformation>;
  creationDate: Scalars["String"]["output"];
  customerId: Scalars["String"]["output"];
  customerType: CustomerTypeEnum;
  deletionDate?: Maybe<Scalars["String"]["output"]>;
  deletionSource?: Maybe<Scalars["String"]["output"]>;
  foodcoach?: Maybe<Foodcoach>;
  loyalty?: Maybe<Loyalty>;
  notificareId?: Maybe<Scalars["String"]["output"]>;
  preference?: Maybe<Preference>;
  registrationSource?: Maybe<Scalars["String"]["output"]>;
  status: CustomerStatusEnum;
  subAccounts?: Maybe<Array<Maybe<B2BSubCustomer>>>;
  username: Scalars["String"]["output"];
};

export type CdmInvoiceInput = {
  pdf?: InputMaybe<Scalars["Boolean"]["input"]>;
  xml?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CdmName = {
  __typename?: "CDMName";
  firstName?: Maybe<Scalars["String"]["output"]>;
  lastName?: Maybe<Scalars["String"]["output"]>;
  middleName?: Maybe<Scalars["String"]["output"]>;
};

export type CdmNameInput = {
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  middleName?: InputMaybe<Scalars["String"]["input"]>;
};

export type CdmPreferenceInput = {
  communication?: InputMaybe<CommunicationPreferenceInput>;
  dietary?: InputMaybe<DietaryPreferencesInput>;
  newsletter?: InputMaybe<NewsletterPreferencesInput>;
  personalization?: InputMaybe<PersonalizationPreferencesInput>;
  pushNotifications?: InputMaybe<PushNotificationPreferencesInput>;
  store?: InputMaybe<StorePreferenceInput>;
  testPanel?: InputMaybe<TestPanelPreferencesInput>;
};

export type CalculateInput = {
  orderId?: InputMaybe<Scalars["String"]["input"]>;
  products?: InputMaybe<Array<InputMaybe<ProductInput>>>;
  referenceDate: Scalars["String"]["input"];
  shippingCosts?: InputMaybe<Scalars["Int"]["input"]>;
  storeId?: InputMaybe<Scalars["Int"]["input"]>;
  voucherCodes?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type CalculateItemSurcharge = {
  __typename?: "CalculateItemSurcharge";
  type: SurchargeType;
  value: Scalars["Int"]["output"];
};

export type CalculateItems = {
  __typename?: "CalculateItems";
  basePrice?: Maybe<Scalars["Int"]["output"]>;
  capturePriceOnPick?: Maybe<Scalars["Boolean"]["output"]>;
  context?: Maybe<Context>;
  deposit?: Maybe<ItemDeposit>;
  discount?: Maybe<Scalars["Int"]["output"]>;
  linePriceExDiscount?: Maybe<Scalars["Int"]["output"]>;
  linePriceIncDiscount?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  /** Returns price information of the provided item */
  price?: Maybe<Price>;
  /** @deprecated Use price instead */
  pricePerUnit?: Maybe<PricePerUnit>;
  promotions?: Maybe<Array<Maybe<ItemPromotion>>>;
  quantity?: Maybe<Scalars["Float"]["output"]>;
  requestLineId?: Maybe<Scalars["String"]["output"]>;
  shippingCosts?: Maybe<Scalars["Int"]["output"]>;
  shippingTaxAmount?: Maybe<Scalars["Int"]["output"]>;
  sku?: Maybe<Scalars["String"]["output"]>;
  surcharges?: Maybe<Array<CalculateItemSurcharge>>;
  tax?: Maybe<TaxGroup>;
  totalPrice?: Maybe<Scalars["Int"]["output"]>;
  unitPrice?: Maybe<Scalars["Int"]["output"]>;
};

/** calculate(request: CalculateInput): CalculateResult */
export type CalculatePromotion = {
  __typename?: "CalculatePromotion";
  discount?: Maybe<Scalars["Int"]["output"]>;
  errorMessage?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  isValid?: Maybe<Scalars["Boolean"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  scope?: Maybe<PromotionScope>;
  type?: Maybe<Scalars["String"]["output"]>;
  voucherCode?: Maybe<Scalars["String"]["output"]>;
};

export type CalculateResult = {
  __typename?: "CalculateResult";
  freeGifts?: Maybe<Array<Maybe<FreeGift>>>;
  items?: Maybe<Array<Maybe<CalculateItems>>>;
  lines?: Maybe<Array<Maybe<LineDetails>>>;
  minimumOrderValue?: Maybe<MinimumOrderValue>;
  orderId?: Maybe<Scalars["String"]["output"]>;
  promotions?: Maybe<Array<Maybe<CalculatePromotion>>>;
  totals?: Maybe<CalculateTotals>;
};

export type CalculateSurcharges = {
  __typename?: "CalculateSurcharges";
  singleUsePlastic: Scalars["Int"]["output"];
  totalSurcharges: Scalars["Int"]["output"];
};

export type CalculateTotals = {
  __typename?: "CalculateTotals";
  deposit?: Maybe<DeliveredDeposits>;
  discount?: Maybe<Scalars["Int"]["output"]>;
  discounts?: Maybe<Discounts>;
  fullTax?: Maybe<Scalars["Int"]["output"]>;
  gross?: Maybe<Scalars["Int"]["output"]>;
  itemSubtotal?: Maybe<Scalars["Int"]["output"]>;
  itemTotal?: Maybe<Scalars["Int"]["output"]>;
  itemsDeposit?: Maybe<Scalars["Int"]["output"]>;
  itemsDepositGroups?: Maybe<Array<Maybe<ItemDepositGroup>>>;
  itemsDiscount?: Maybe<Scalars["Int"]["output"]>;
  net?: Maybe<Scalars["Int"]["output"]>;
  nonItemTotal?: Maybe<Scalars["Int"]["output"]>;
  orderDiscount?: Maybe<Scalars["Int"]["output"]>;
  reducedTax?: Maybe<Scalars["Int"]["output"]>;
  shippingCosts?: Maybe<Scalars["Int"]["output"]>;
  shippingDiscount?: Maybe<Scalars["Int"]["output"]>;
  surcharges?: Maybe<CalculateSurcharges>;
  tax?: Maybe<Scalars["Int"]["output"]>;
  taxes?: Maybe<Taxes>;
  total?: Maybe<Scalars["Int"]["output"]>;
  totalToPay?: Maybe<Scalars["Int"]["output"]>;
};

export type CalculatedDeposit = {
  __typename?: "CalculatedDeposit";
  bags?: Maybe<MoneyType>;
  crates?: Maybe<MoneyType>;
  items?: Maybe<MoneyType>;
  totalDeposit?: Maybe<MoneyType>;
};

export type CalculatedDiscounts = {
  __typename?: "CalculatedDiscounts";
  items?: Maybe<MoneyType>;
  itemsExcludingDiscountFromVouchers?: Maybe<MoneyType>;
  order?: Maybe<MoneyType>;
  shipping?: Maybe<MoneyType>;
  totalDiscounts?: Maybe<MoneyType>;
};

export type CalculatedItemDeposit = {
  __typename?: "CalculatedItemDeposit";
  name?: Maybe<Scalars["String"]["output"]>;
  quantity?: Maybe<Scalars["Int"]["output"]>;
  sku?: Maybe<Scalars["String"]["output"]>;
  unitPrice?: Maybe<MoneyType>;
};

export type CalculatedItemPromotion = {
  __typename?: "CalculatedItemPromotion";
  description?: Maybe<Scalars["String"]["output"]>;
  discount?: Maybe<MoneyType>;
  id?: Maybe<Scalars["String"]["output"]>;
  scope?: Maybe<PromotionScope>;
  type?: Maybe<Scalars["String"]["output"]>;
  voucherCode?: Maybe<Scalars["String"]["output"]>;
};

export type CalculatedItemSurcharge = {
  __typename?: "CalculatedItemSurcharge";
  type: SurchargeType;
  value: MoneyType;
};

export type CalculatedItems = {
  __typename?: "CalculatedItems";
  basePrice?: Maybe<MoneyType>;
  capturePriceOnPick?: Maybe<Scalars["Boolean"]["output"]>;
  context?: Maybe<Context>;
  deposit?: Maybe<CalculatedItemDeposit>;
  linePriceExDiscount?: Maybe<MoneyType>;
  linePriceIncDiscount?: Maybe<MoneyType>;
  name?: Maybe<Scalars["String"]["output"]>;
  pricePerUnit?: Maybe<CalculatedPricePerUnit>;
  promotions?: Maybe<Array<Maybe<CalculatedItemPromotion>>>;
  quantity?: Maybe<Scalars["Float"]["output"]>;
  requestLineId?: Maybe<Scalars["String"]["output"]>;
  shippingCosts?: Maybe<MoneyType>;
  shippingTaxAmount?: Maybe<MoneyType>;
  sku?: Maybe<Scalars["String"]["output"]>;
  surcharges: Array<CalculatedItemSurcharge>;
  tax?: Maybe<CalculatedTaxGroup>;
  totalPrice?: Maybe<MoneyType>;
  unitPrice?: Maybe<MoneyType>;
};

export type CalculatedMinimumOrderValue = {
  __typename?: "CalculatedMinimumOrderValue";
  hdAdditionalAmountNeeded?: Maybe<MoneyType>;
  hdMinimumOrderValue?: Maybe<MoneyType>;
  hdReached?: Maybe<Scalars["Boolean"]["output"]>;
  orderValue?: Maybe<MoneyType>;
  pupAdditionalAmountNeeded?: Maybe<MoneyType>;
  pupMinimumOrderValue?: Maybe<MoneyType>;
  pupReached?: Maybe<Scalars["Boolean"]["output"]>;
};

export type CalculatedPrice = {
  __typename?: "CalculatedPrice";
  freeGifts: Array<CalculatedPriceFreeGift>;
  items: Array<CalculatedPriceItem>;
  minimumOrderValue: CalculatedPriceMinimumOrderValue;
  orderPromotions: Array<CalculatedPricePromotion>;
  shipping: CalculatedPriceShipping;
  totals: CalculatedPriceTotals;
};

export type CalculatedPriceDeposit = {
  __typename?: "CalculatedPriceDeposit";
  quantity: Scalars["Int"]["output"];
  sku: Scalars["String"]["output"];
  unitPrice: Scalars["Float"]["output"];
};

export type CalculatedPriceDepositGroup = {
  __typename?: "CalculatedPriceDepositGroup";
  description: Scalars["String"]["output"];
  quantity: Scalars["Int"]["output"];
  total: Scalars["Float"]["output"];
};

export type CalculatedPriceFreeGift = {
  __typename?: "CalculatedPriceFreeGift";
  details: Product;
  promotions: Array<CalculatedPricePromotion>;
  quantity: Scalars["Int"]["output"];
  sku: Scalars["String"]["output"];
};

export type CalculatedPriceInput = {
  crates: Scalars["Int"]["input"];
  customerId: Scalars["String"]["input"];
  lines: Array<CalculatedPriceLineInput>;
  orderId?: InputMaybe<Scalars["Float"]["input"]>;
  referenceDate: Scalars["String"]["input"];
  shippingCosts: Scalars["Float"]["input"];
  storeId: Scalars["String"]["input"];
  voucherCodes: Array<Scalars["String"]["input"]>;
};

export type CalculatedPriceItem = {
  __typename?: "CalculatedPriceItem";
  deposit?: Maybe<CalculatedPriceDeposit>;
  linePriceExDiscount: Scalars["Float"]["output"];
  linePriceIncDiscount: Scalars["Float"]["output"];
  pricePerUnit: CalculatedPricePricePerUnit;
  promotions: Array<CalculatedPricePromotion>;
  quantity: Scalars["Int"]["output"];
  requestLineId: Scalars["String"]["output"];
  shippingCosts: Scalars["Float"]["output"];
  shippingTaxAmount: Scalars["Float"]["output"];
  sku: Scalars["String"]["output"];
  tax: CalculatedPriceTax;
  unit: ProductUnit;
  unitPrice: Scalars["Float"]["output"];
};

export type CalculatedPriceLineInput = {
  lineId: Scalars["String"]["input"];
  quantity: Scalars["Int"]["input"];
  sku: Scalars["String"]["input"];
  unit: Scalars["String"]["input"];
};

export type CalculatedPriceMinimumOrderValue = {
  __typename?: "CalculatedPriceMinimumOrderValue";
  hdAdditionalAmountNeeded: Scalars["Float"]["output"];
  hdMinimumOrderValue: Scalars["Float"]["output"];
  hdReached: Scalars["Boolean"]["output"];
  orderValue: Scalars["Float"]["output"];
  pupAdditionalAmountNeeded: Scalars["Float"]["output"];
  pupMinimumOrderValue: Scalars["Float"]["output"];
  pupReached: Scalars["Boolean"]["output"];
};

export type CalculatedPricePerUnit = {
  __typename?: "CalculatedPricePerUnit";
  price?: Maybe<MoneyType>;
  quantity?: Maybe<Scalars["Float"]["output"]>;
  unit?: Maybe<Scalars["String"]["output"]>;
};

export type CalculatedPricePricePerUnit = {
  __typename?: "CalculatedPricePricePerUnit";
  price?: Maybe<Scalars["Float"]["output"]>;
  quantity?: Maybe<Scalars["String"]["output"]>;
  unit?: Maybe<DisplayUnit>;
};

export type CalculatedPricePromotion = {
  __typename?: "CalculatedPricePromotion";
  description: Scalars["String"]["output"];
  discount?: Maybe<Scalars["Float"]["output"]>;
  id: Scalars["String"]["output"];
  scope?: Maybe<Scalars["String"]["output"]>;
  type: Scalars["String"]["output"];
  voucherCode?: Maybe<Scalars["String"]["output"]>;
};

export type CalculatedPriceShipping = {
  __typename?: "CalculatedPriceShipping";
  promotions: Array<CalculatedPricePromotion>;
  taxes: CalculatedPriceTaxes;
};

export type CalculatedPriceTax = {
  __typename?: "CalculatedPriceTax";
  amount: Scalars["Float"]["output"];
  code: CalculatedPriceTaxCode;
};

export enum CalculatedPriceTaxCode {
  FULL = "FULL",
  NO_TAX = "NO_TAX",
  REDUCED = "REDUCED",
  UNKNOWN = "UNKNOWN",
}

export type CalculatedPriceTaxes = {
  __typename?: "CalculatedPriceTaxes";
  groups: Array<CalculatedPriceTax>;
  totalTaxes: Scalars["Float"]["output"];
};

export type CalculatedPriceTotals = {
  __typename?: "CalculatedPriceTotals";
  deposit: CalculatedPriceTotalsDeposit;
  discounts: CalculatedPriceTotalsDiscount;
  itemSubtotal: Scalars["Float"]["output"];
  itemTotal: Scalars["Float"]["output"];
  itemsDepositGroups: Array<CalculatedPriceDepositGroup>;
  nonItemTotal: Scalars["Float"]["output"];
  shippingCosts: Scalars["Float"]["output"];
  taxes: CalculatedPriceTaxes;
  totalToPay: Scalars["Float"]["output"];
};

export type CalculatedPriceTotalsDeposit = {
  __typename?: "CalculatedPriceTotalsDeposit";
  crates: Scalars["Float"]["output"];
  items: Scalars["Float"]["output"];
  totalDeposit: Scalars["Float"]["output"];
};

export type CalculatedPriceTotalsDiscount = {
  __typename?: "CalculatedPriceTotalsDiscount";
  items: Scalars["Float"]["output"];
  itemsExcludingDiscountFromVouchers: Scalars["Float"]["output"];
  order: Scalars["Float"]["output"];
  shipping: Scalars["Float"]["output"];
  totalDiscounts: Scalars["Float"]["output"];
};

/** calculateOrder(request: CalculationInput): CalculationResult */
export type CalculatedPromotion = {
  __typename?: "CalculatedPromotion";
  discount?: Maybe<MoneyType>;
  id?: Maybe<Scalars["String"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  scope?: Maybe<PromotionScope>;
  type?: Maybe<Scalars["String"]["output"]>;
  voucherCode?: Maybe<Scalars["String"]["output"]>;
};

export type CalculatedSurcharges = {
  __typename?: "CalculatedSurcharges";
  singleUsePlastic: MoneyType;
  totalSurcharges: MoneyType;
};

export type CalculatedTaxGroup = {
  __typename?: "CalculatedTaxGroup";
  amount?: Maybe<MoneyType>;
  code?: Maybe<TaxCode>;
};

export type CalculatedTaxes = {
  __typename?: "CalculatedTaxes";
  groups?: Maybe<Array<Maybe<CalculatedTaxGroup>>>;
  totalTaxes?: Maybe<MoneyType>;
};

export type CalculatedTotals = {
  __typename?: "CalculatedTotals";
  deposit?: Maybe<CalculatedDeposit>;
  discounts?: Maybe<CalculatedDiscounts>;
  itemSubtotal?: Maybe<MoneyType>;
  itemTotal?: Maybe<MoneyType>;
  itemsDepositGroups?: Maybe<Array<Maybe<ItemDepositByGroup>>>;
  nonItemTotal?: Maybe<MoneyType>;
  shippingCosts?: Maybe<MoneyType>;
  surcharges: CalculatedSurcharges;
  taxes?: Maybe<CalculatedTaxes>;
  totalToPay?: Maybe<MoneyType>;
};

export type CalculationInput = {
  orderId?: InputMaybe<Scalars["String"]["input"]>;
  products?: InputMaybe<Array<InputMaybe<ProductInput>>>;
  referenceDate: Scalars["String"]["input"];
  shippingCosts?: InputMaybe<MoneyTypeInput>;
  storeId?: InputMaybe<Scalars["Int"]["input"]>;
  voucherCodes?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type CalculationResult = {
  __typename?: "CalculationResult";
  freeGifts?: Maybe<Array<Maybe<FreeGift>>>;
  items?: Maybe<Array<Maybe<CalculatedItems>>>;
  minimumOrderValue?: Maybe<CalculatedMinimumOrderValue>;
  orderId?: Maybe<Scalars["String"]["output"]>;
  promotions?: Maybe<Array<Maybe<CalculatedPromotion>>>;
  totals?: Maybe<CalculatedTotals>;
};

/** scalar JSON */
export type Campaign = {
  __typename?: "Campaign";
  actionPeriods?: Maybe<Array<Maybe<ActionPeriod>>>;
  active: Scalars["Boolean"]["output"];
  campaignCode: Scalars["String"]["output"];
  campaignData: CampaignData;
  endDate: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  notification?: Maybe<LoyaltyCampaignNotification>;
  startDate: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
};

export type CampaignData = {
  __typename?: "CampaignData";
  aboutText?: Maybe<Scalars["String"]["output"]>;
  accountId?: Maybe<Scalars["String"]["output"]>;
  bannerImage?: Maybe<Scalars["String"]["output"]>;
  bottomImage?: Maybe<Scalars["String"]["output"]>;
  detailImage?: Maybe<Scalars["String"]["output"]>;
  numberOfFreeStamps?: Maybe<Scalars["Int"]["output"]>;
  numberOfPointsPerStamp?: Maybe<Scalars["Int"]["output"]>;
  numberOfStampsFullCard?: Maybe<Scalars["Int"]["output"]>;
  numberOfStampsPerCard?: Maybe<Scalars["Int"]["output"]>;
  promotionId?: Maybe<Scalars["String"]["output"]>;
  redeemFlow?: Maybe<Scalars["String"]["output"]>;
  redemptionType?: Maybe<Scalars["String"]["output"]>;
  stampImage?: Maybe<Scalars["String"]["output"]>;
  stampType?: Maybe<Scalars["String"]["output"]>;
  stampsNeededForRedemption?: Maybe<Array<Maybe<Scalars["Int"]["output"]>>>;
  termsAndConditionsUrl?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type CancelOrderInput = {
  orderChannel: OrderChannel;
  orderId: Scalars["Float"]["input"];
};

export type CancelOrderResponse = {
  __typename?: "CancelOrderResponse";
  orderId: Scalars["Float"]["output"];
  query?: Maybe<Query>;
};

export type Category = {
  __typename?: "Category";
  displayOrder?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  leafNode?: Maybe<Scalars["Boolean"]["output"]>;
  level?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  path?: Maybe<Scalars["String"]["output"]>;
  seoUrl?: Maybe<Scalars["String"]["output"]>;
  topNode?: Maybe<Scalars["Boolean"]["output"]>;
};

export type CategoryMapping = {
  __typename?: "CategoryMapping";
  categoryMappingMap?: Maybe<Scalars["String"]["output"]>;
};

export type CategoryTile = {
  __typename?: "CategoryTile";
  catId?: Maybe<Scalars["String"]["output"]>;
  count?: Maybe<Scalars["Int"]["output"]>;
  displayOrder?: Maybe<Scalars["Float"]["output"]>;
  friendlyUrl: Scalars["String"]["output"];
  imageLink?: Maybe<Scalars["String"]["output"]>;
  link: Scalars["String"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  seoUrl?: Maybe<Scalars["String"]["output"]>;
  subtitle?: Maybe<Scalars["String"]["output"]>;
};

export type ChamberOfCommerceDetails = {
  __typename?: "ChamberOfCommerceDetails";
  chamberNumber?: Maybe<Scalars["String"]["output"]>;
  chamberOfCommerceLastUpdate?: Maybe<Scalars["String"]["output"]>;
  classPersonnel?: Maybe<Scalars["String"]["output"]>;
  contactInfo?: Maybe<B2bContactInfo>;
  domainName?: Maybe<Scalars["String"]["output"]>;
  establishmentNumber?: Maybe<Scalars["String"]["output"]>;
  foundingDate?: Maybe<FoundingDate>;
  indicationBankruptcy?: Maybe<Scalars["Boolean"]["output"]>;
  indicationDip?: Maybe<Scalars["Boolean"]["output"]>;
  indicationOrganisationCode?: Maybe<Scalars["String"]["output"]>;
  kvkNumber?: Maybe<Scalars["String"]["output"]>;
  legalFormCode?: Maybe<Scalars["String"]["output"]>;
  personnel?: Maybe<Scalars["String"]["output"]>;
  primarySbiCode?: Maybe<Scalars["String"]["output"]>;
  secondarySbiCode1?: Maybe<Scalars["String"]["output"]>;
  secondarySbiCode2?: Maybe<Scalars["String"]["output"]>;
  tradeName45?: Maybe<Scalars["String"]["output"]>;
};

export type Characteristic = {
  __typename?: "Characteristic";
  name?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["String"]["output"]>;
};

export type Characteristics = {
  __typename?: "Characteristics";
  freshness?: Maybe<Characteristic>;
  logo?: Maybe<Characteristic>;
  tags?: Maybe<Characteristic>;
};

export enum ChargeType {
  CRATE_DEPOSIT = "CRATE_DEPOSIT",
  ITEM_DEPOSIT = "ITEM_DEPOSIT",
  PLASTIC_BAG_DEPOSIT = "PLASTIC_BAG_DEPOSIT",
}

export type CheckPostalCodeResponse = {
  __typename?: "CheckPostalCodeResponse";
  homeDeliveryAvailable: Scalars["Boolean"]["output"];
};

export type CheckoutBasketInput = {
  customerId: Scalars["String"]["input"];
  referenceDate: Scalars["String"]["input"];
  shippingCosts: Scalars["Float"]["input"];
  storeId: Scalars["String"]["input"];
  voucherCodes: Array<Scalars["String"]["input"]>;
};

export type CheckoutCheckAddressInput = {
  houseNumber: Scalars["String"]["input"];
  postalCode: Scalars["String"]["input"];
};

export type CheckoutCheckAddressResult = {
  __typename?: "CheckoutCheckAddressResult";
  city: Scalars["String"]["output"];
  houseFrom: Scalars["Int"]["output"];
  houseTo: Scalars["Int"]["output"];
  parity: HouseNumberParity;
  postalCode: Scalars["String"]["output"];
  street: Scalars["String"]["output"];
};

export type CheckoutCreateSessionInput = {
  autofillSession?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CheckoutDeliveryPeriod = {
  __typename?: "CheckoutDeliveryPeriod";
  available: Scalars["Boolean"]["output"];
  cutoffDateTime?: Maybe<Scalars["String"]["output"]>;
  endDateTime: Scalars["String"]["output"];
  priceExDiscount: MoneyType;
  priceIncDiscount: MoneyType;
  primaryTag?: Maybe<DeliveryPeriodTag>;
  startDateTime: Scalars["String"]["output"];
  tags: Array<DeliveryPeriodTag>;
};

export type CheckoutDeliveryPeriodDay = {
  __typename?: "CheckoutDeliveryPeriodDay";
  date: Scalars["String"]["output"];
  deliveryPeriods: Array<CheckoutDeliveryPeriod>;
  hasAvailableDeliveryPeriods: Scalars["Boolean"]["output"];
  highestPrice: MoneyType;
  lowestPrice: MoneyType;
};

export type CheckoutOrder = {
  __typename?: "CheckoutOrder";
  billingAddress: Address;
  deliveryAddress: Address;
  deliveryPeriod: ReservedDeliveryPeriod;
  fulfilmentType: OrderFulfilmentType;
  orderId: Scalars["Float"]["output"];
  /** @deprecated Use storeV2 */
  store: Store;
  storeId: Scalars["String"]["output"];
  storeV2: StoreV2;
};

export type CheckoutOrderSession = {
  __typename?: "CheckoutOrderSession";
  /** @deprecated Use collectionStoreV2 */
  collectionStore?: Maybe<Store>;
  collectionStoreId?: Maybe<Scalars["String"]["output"]>;
  collectionStoreV2?: Maybe<StoreV2>;
  customerId: Scalars["String"]["output"];
  deliveryAddress?: Maybe<Address>;
  deliveryPeriod: ReservedDeliveryPeriod;
  fulfilmentType: OrderFulfilmentType;
  /** @deprecated Use homeDeliveryStoreV2 */
  homeDeliveryStore?: Maybe<Store>;
  homeDeliveryStoreId?: Maybe<Scalars["String"]["output"]>;
  homeDeliveryStoreV2?: Maybe<StoreV2>;
  items: Array<CheckoutOrderSessionItem>;
  orderId: Scalars["Float"]["output"];
  voucherCodes: Array<Scalars["String"]["output"]>;
};

export type CheckoutOrderSessionItem = {
  __typename?: "CheckoutOrderSessionItem";
  quantity: Scalars["Int"]["output"];
  sku: Scalars["String"]["output"];
  unit: ProductUnit;
};

export type CheckoutPlaceOrderInput = {
  orderChannel: OrderChannel;
};

export type CheckoutPlaceOrderResponse = {
  __typename?: "CheckoutPlaceOrderResponse";
  order: CheckoutOrder;
  query?: Maybe<Query>;
};

export type CheckoutPreference = {
  __typename?: "CheckoutPreference";
  digitalStamps?: Maybe<Scalars["Boolean"]["output"]>;
  printReceipt?: Maybe<Scalars["Boolean"]["output"]>;
  promotionStamps?: Maybe<Scalars["Boolean"]["output"]>;
  purchaseStamps?: Maybe<Scalars["Boolean"]["output"]>;
};

export type CheckoutPreferences = {
  __typename?: "CheckoutPreferences";
  printReceipt?: Maybe<Scalars["Boolean"]["output"]>;
  promotionStamps?: Maybe<Scalars["Boolean"]["output"]>;
};

export type CheckoutPreferencesInput = {
  printReceipt?: InputMaybe<Scalars["Boolean"]["input"]>;
  promotionStamps?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CheckoutSession = {
  __typename?: "CheckoutSession";
  /** @deprecated Use acquiringStoreV2 */
  acquiringStore?: Maybe<Store>;
  acquiringStoreId?: Maybe<Scalars["String"]["output"]>;
  acquiringStoreV2?: Maybe<StoreV2>;
  billingAddress?: Maybe<Address>;
  /** @deprecated Use collectionStoreV2 */
  collectionStore?: Maybe<Store>;
  collectionStoreId?: Maybe<Scalars["String"]["output"]>;
  collectionStoreV2?: Maybe<StoreV2>;
  customerId: Scalars["String"]["output"];
  customerType: CustomerType;
  deliveryAddress?: Maybe<Address>;
  deliveryPeriod?: Maybe<ReservedDeliveryPeriod>;
  fulfilmentType?: Maybe<OrderFulfilmentType>;
  /** @deprecated Use homeDeliveryStoreV2 */
  homeDeliveryStore?: Maybe<Store>;
  homeDeliveryStoreId?: Maybe<Scalars["String"]["output"]>;
  homeDeliveryStoreV2?: Maybe<StoreV2>;
  linkedSapId?: Maybe<Scalars["String"]["output"]>;
  voucherCodes?: Maybe<Array<Scalars["String"]["output"]>>;
};

export type CheckoutStore = {
  __typename?: "CheckoutStore";
  address: Address;
  addressName: Scalars["String"]["output"];
  distance: Scalars["Int"]["output"];
  locationType: Scalars["String"]["output"];
  phoneBusiness: Scalars["String"]["output"];
  sapStoreID: Scalars["String"]["output"];
  time: Scalars["Int"]["output"];
  uuid: Scalars["String"]["output"];
};

export type CheckoutStoresInput = {
  deliveryDate?: InputMaybe<Scalars["String"]["input"]>;
  fulfilmentType?: InputMaybe<OrderFulfilmentType>;
  postalCode?: InputMaybe<Scalars["String"]["input"]>;
};

export type CheckoutUpdateOrderInput = {
  orderChannel: OrderChannel;
  orderId: Scalars["Float"]["input"];
};

export type CheckoutUpdateOrderResponse = {
  __typename?: "CheckoutUpdateOrderResponse";
  orderId: Scalars["Float"]["output"];
  query?: Maybe<Query>;
};

export type ClearBasketResponse = {
  __typename?: "ClearBasketResponse";
  query?: Maybe<Query>;
  success: Scalars["Boolean"]["output"];
};

export type CommunicationInput = {
  isNewsletterAllowed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CommunicationPreference = {
  __typename?: "CommunicationPreference";
  deliveryNote?: Maybe<Scalars["String"]["output"]>;
};

export type CommunicationPreferenceInput = {
  deliveryNote?: InputMaybe<Scalars["String"]["input"]>;
};

export type Company = {
  __typename?: "Company";
  /** Additional contact details for the company */
  contact?: Maybe<CompanyContact>;
  /** Official domain name of the company */
  domainName?: Maybe<Scalars["String"]["output"]>;
  /** Official establishment date of the company */
  establishmentDate?: Maybe<Scalars["String"]["output"]>;
  /** For the Netherlands, this is the KvK number */
  externalId?: Maybe<Scalars["String"]["output"]>;
  /** Official trading name of the company */
  name?: Maybe<Scalars["String"]["output"]>;
  /** Official telephone number of the company */
  telephoneNumber?: Maybe<Scalars["String"]["output"]>;
};

export type CompanyContact = {
  __typename?: "CompanyContact";
  email?: Maybe<Scalars["String"]["output"]>;
};

export type ContactInformation = {
  __typename?: "ContactInformation";
  addresses?: Maybe<Array<Maybe<Address>>>;
};

export type ContactInformationInput = {
  addresses?: InputMaybe<Array<InputMaybe<CdmAddressInput>>>;
  dateOfBirth?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  gender?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<CdmNameInput>;
  telephones?: InputMaybe<Array<InputMaybe<TelephoneInput>>>;
};

export type Context = {
  __typename?: "Context";
  cutOffDate?: Maybe<Scalars["String"]["output"]>;
  date?: Maybe<Scalars["String"]["output"]>;
  storeId?: Maybe<Scalars["String"]["output"]>;
};

export type Country = {
  __typename?: "Country";
  code?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

export enum CountryEnum {
  BE = "BE",
  DE = "DE",
  NL = "NL",
}

export type CountryInput = {
  code?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateBasketResult = Basket | Error;

export type CreateCheckoutSessionResponse = {
  __typename?: "CreateCheckoutSessionResponse";
  query?: Maybe<Query>;
  session: CheckoutSession;
};

export type CreateCustomerInput = {
  /** This end point will be used only for B2C and B2BRegular customer type */
  customerType: CustomerCreationType;
  preference?: InputMaybe<CdmPreferenceInput>;
  /** is customer agreed to terms and condition */
  termsAndConditionsECommerce: Scalars["Boolean"]["input"];
  /** Should be a valid email */
  username: Scalars["String"]["input"];
};

export type CreateCustomerOutput = {
  __typename?: "CreateCustomerOutput";
  customerId: Scalars["String"]["output"];
  customerType: CustomerTypeEnum;
};

export type CreateLoyaltyProfileRequest = {
  birthDate?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  password: Scalars["String"]["input"];
  privacyStatementAccepted?: InputMaybe<Scalars["Boolean"]["input"]>;
  termsAndConditionsAccepted?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CreateLoyaltyProfileResponse = {
  __typename?: "CreateLoyaltyProfileResponse";
  customerId: Scalars["String"]["output"];
};

export type CreateProductListInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  isPublic?: InputMaybe<Scalars["Boolean"]["input"]>;
  labels?: InputMaybe<Array<Scalars["String"]["input"]>>;
  title: Scalars["String"]["input"];
};

export type CreditDetails = {
  __typename?: "CreditDetails";
  creditExposure?: Maybe<MoneyType>;
  creditLimit?: Maybe<MoneyType>;
  paymentMethod?: Maybe<Scalars["String"]["output"]>;
  spendLimit?: Maybe<MoneyType>;
};

export type CreditWorthiness = {
  __typename?: "CreditWorthiness";
  allowedToOrder?: Maybe<Scalars["Boolean"]["output"]>;
  creditworthy?: Maybe<Scalars["Boolean"]["output"]>;
  spendLimit?: Maybe<SpendLimit>;
};

export type CreditWorthinessCheckError = IError & {
  __typename?: "CreditWorthinessCheckError";
  errorMessage: Scalars["String"]["output"];
  exceededAmount: MoneyType;
  friendlyHeader: Scalars["String"]["output"];
  friendlyMessage: Scalars["String"]["output"];
  reason: ErrorReason;
  spendLimit: MoneyType;
};

export type CrossSellProductSearchInput = {
  bloomreachCookieId?: InputMaybe<Scalars["String"]["input"]>;
  currentUrl?: InputMaybe<Scalars["String"]["input"]>;
  previousUrl?: InputMaybe<Scalars["String"]["input"]>;
};

export type CrossSellProducts = {
  __typename?: "CrossSellProducts";
  productsResultList?: Maybe<SearchProductList>;
};

export type CrossSellsInput = {
  exclusions?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sku?: InputMaybe<Scalars["String"]["input"]>;
  skuFilter?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type Customer = {
  __typename?: "Customer";
  b2bDetails?: Maybe<B2bDetails>;
  contactInformation: ContactInformation;
  id: Scalars["String"]["output"];
  name: Name;
  subAccounts?: Maybe<Array<Maybe<Customer>>>;
  username: Scalars["String"]["output"];
};

export type CustomerAllergies = {
  __typename?: "CustomerAllergies";
  allergiesConfigured: Scalars["Boolean"]["output"];
  long?: Maybe<Scalars["String"]["output"]>;
  prompt: CustomerAllergiesPrompt;
  short?: Maybe<Scalars["String"]["output"]>;
  showConfigureDietaryPreferencesPrompt: Scalars["Boolean"]["output"];
  showProductContainsMatchingAllergiesPrompt: Scalars["Boolean"]["output"];
};

export type CustomerAllergiesPrompt = {
  __typename?: "CustomerAllergiesPrompt";
  action: Scalars["String"]["output"];
  text: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export enum CustomerCreationType {
  B2BREGULAR = "B2BREGULAR",
  B2C = "B2C",
  NEWSLETTER = "NEWSLETTER",
}

export type CustomerDigitalStamps = {
  __typename?: "CustomerDigitalStamps";
  digitalStamps?: Maybe<Array<Maybe<DigitalStamps>>>;
  optInStatus: OptInStatusEnum;
};

export enum CustomerSegment {
  B2B = "B2B",
  B2C = "B2C",
}

export enum CustomerStatusEnum {
  Active = "Active",
  Deleted = "Deleted",
  Suspended = "Suspended",
}

export enum CustomerType {
  B2BMASTER = "B2BMASTER",
  B2BREGULAR = "B2BREGULAR",
  B2BSUB = "B2BSUB",
  B2C = "B2C",
  NEWSLETTER = "NEWSLETTER",
}

export enum CustomerTypeEnum {
  B2BMASTER = "B2BMASTER",
  B2BREGULAR = "B2BREGULAR",
  B2BSUB = "B2BSUB",
  B2C = "B2C",
  NEWSLETTER = "NEWSLETTER",
}

export enum CustomerUpdateStatusEnum {
  Active = "Active",
  Suspended = "Suspended",
}

export type DateTime = {
  __typename?: "DateTime";
  array?: Maybe<Array<Maybe<Scalars["Int"]["output"]>>>;
  date?: Maybe<Scalars["Int"]["output"]>;
  day?: Maybe<Scalars["String"]["output"]>;
  dayShort?: Maybe<Scalars["String"]["output"]>;
  hour?: Maybe<Scalars["String"]["output"]>;
  isToday?: Maybe<Scalars["Boolean"]["output"]>;
  iso?: Maybe<Scalars["String"]["output"]>;
  minute?: Maybe<Scalars["String"]["output"]>;
  month?: Maybe<Scalars["String"]["output"]>;
  monthNumber?: Maybe<Scalars["Int"]["output"]>;
  monthShort?: Maybe<Scalars["String"]["output"]>;
  originalDate?: Maybe<Scalars["String"]["output"]>;
  relative?: Maybe<Scalars["String"]["output"]>;
  second?: Maybe<Scalars["String"]["output"]>;
  time?: Maybe<Scalars["String"]["output"]>;
  weekday?: Maybe<Scalars["String"]["output"]>;
  year?: Maybe<Scalars["Int"]["output"]>;
};

export type DeleteCheckoutSessionResponse = {
  __typename?: "DeleteCheckoutSessionResponse";
  deleted: Scalars["Boolean"]["output"];
};

export type DeleteUserInput = {
  password: Scalars["String"]["input"];
};

export type DeleteUserPayload = Payload & {
  __typename?: "DeleteUserPayload";
  status: StatusEnum;
};

export type DeliveredDeposits = {
  __typename?: "DeliveredDeposits";
  bags?: Maybe<Scalars["Int"]["output"]>;
  crates?: Maybe<Scalars["Int"]["output"]>;
  items?: Maybe<Scalars["Int"]["output"]>;
  totalDeposit?: Maybe<Scalars["Int"]["output"]>;
};

export enum DeliveryPeriodTag {
  ALREADY_IN_YOUR_AREA = "ALREADY_IN_YOUR_AREA",
  ENVIRONMENTALLY_FRIENDLY = "ENVIRONMENTALLY_FRIENDLY",
  UNKNOWN = "UNKNOWN",
}

export type DeliverySubscriptionDetails = {
  __typename?: "DeliverySubscriptionDetails";
  deliverySubscriptionId?: Maybe<Scalars["String"]["output"]>;
  duration?: Maybe<Scalars["String"]["output"]>;
  endDate?: Maybe<Scalars["Date"]["output"]>;
  startDate?: Maybe<Scalars["Date"]["output"]>;
  weekDays?: Maybe<Scalars["String"]["output"]>;
};

export type Deposit = {
  __typename?: "Deposit";
  category: Scalars["String"]["output"];
  categoryDisplayOrder: Scalars["Int"]["output"];
  chargeType: ChargeType;
  description: Scalars["String"]["output"];
  sku: Scalars["String"]["output"];
  unitPrice: MoneyType;
};

export enum DepositChargeType {
  CRATE_DEPOSIT = "CRATE_DEPOSIT",
  ITEM_DEPOSIT = "ITEM_DEPOSIT",
  PLASTIC_BAG_DEPOSIT = "PLASTIC_BAG_DEPOSIT",
}

export enum DepositDescription {
  BEER_CRATE = "BEER_CRATE",
  BEER_KEG = "BEER_KEG",
  BOTTLE = "BOTTLE",
  CRATE = "CRATE",
  OTHER = "OTHER",
  PLASTIC_BAG = "PLASTIC_BAG",
  UNKNOWN = "UNKNOWN",
}

export type DietaryInfo = {
  __typename?: "DietaryInfo";
  name?: Maybe<Scalars["String"]["output"]>;
};

export type DietaryPreference = {
  __typename?: "DietaryPreference";
  active?: Maybe<Scalars["Boolean"]["output"]>;
  noCelery?: Maybe<Scalars["Boolean"]["output"]>;
  noCrustacean?: Maybe<Scalars["Boolean"]["output"]>;
  noEgg?: Maybe<Scalars["Boolean"]["output"]>;
  noFish?: Maybe<Scalars["Boolean"]["output"]>;
  noGluten?: Maybe<Scalars["Boolean"]["output"]>;
  noLactose?: Maybe<Scalars["Boolean"]["output"]>;
  noLupin?: Maybe<Scalars["Boolean"]["output"]>;
  noMilk?: Maybe<Scalars["Boolean"]["output"]>;
  noMolluscs?: Maybe<Scalars["Boolean"]["output"]>;
  noMustard?: Maybe<Scalars["Boolean"]["output"]>;
  noPeanut?: Maybe<Scalars["Boolean"]["output"]>;
  noSesame?: Maybe<Scalars["Boolean"]["output"]>;
  noSoy?: Maybe<Scalars["Boolean"]["output"]>;
  noSulphites?: Maybe<Scalars["Boolean"]["output"]>;
  noTreenut?: Maybe<Scalars["Boolean"]["output"]>;
  noWheat?: Maybe<Scalars["Boolean"]["output"]>;
};

export type DietaryPreferenceInput = {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  noCelery?: InputMaybe<Scalars["Boolean"]["input"]>;
  noCrustacean?: InputMaybe<Scalars["Boolean"]["input"]>;
  noEgg?: InputMaybe<Scalars["Boolean"]["input"]>;
  noFish?: InputMaybe<Scalars["Boolean"]["input"]>;
  noGluten?: InputMaybe<Scalars["Boolean"]["input"]>;
  noLactose?: InputMaybe<Scalars["Boolean"]["input"]>;
  noLupin?: InputMaybe<Scalars["Boolean"]["input"]>;
  noMilk?: InputMaybe<Scalars["Boolean"]["input"]>;
  noMolluscs?: InputMaybe<Scalars["Boolean"]["input"]>;
  noMustard?: InputMaybe<Scalars["Boolean"]["input"]>;
  noPeanut?: InputMaybe<Scalars["Boolean"]["input"]>;
  noSesame?: InputMaybe<Scalars["Boolean"]["input"]>;
  noSoy?: InputMaybe<Scalars["Boolean"]["input"]>;
  noSulphites?: InputMaybe<Scalars["Boolean"]["input"]>;
  noTreenut?: InputMaybe<Scalars["Boolean"]["input"]>;
  noWheat?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type DietaryPreferencesInput = {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  noCelery?: InputMaybe<Scalars["Boolean"]["input"]>;
  noCrustacean?: InputMaybe<Scalars["Boolean"]["input"]>;
  noEgg?: InputMaybe<Scalars["Boolean"]["input"]>;
  noFish?: InputMaybe<Scalars["Boolean"]["input"]>;
  noGluten?: InputMaybe<Scalars["Boolean"]["input"]>;
  noLactose?: InputMaybe<Scalars["Boolean"]["input"]>;
  noLupin?: InputMaybe<Scalars["Boolean"]["input"]>;
  noMilk?: InputMaybe<Scalars["Boolean"]["input"]>;
  noMolluscs?: InputMaybe<Scalars["Boolean"]["input"]>;
  noMustard?: InputMaybe<Scalars["Boolean"]["input"]>;
  noPeanut?: InputMaybe<Scalars["Boolean"]["input"]>;
  noSesame?: InputMaybe<Scalars["Boolean"]["input"]>;
  noSoy?: InputMaybe<Scalars["Boolean"]["input"]>;
  noSulphites?: InputMaybe<Scalars["Boolean"]["input"]>;
  noTreenut?: InputMaybe<Scalars["Boolean"]["input"]>;
  noWheat?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type DigitalStamps = {
  __typename?: "DigitalStamps";
  campaignId: Scalars["String"]["output"];
  numberStamps: Scalars["Int"]["output"];
};

export type DigitalStampsPreferences = {
  __typename?: "DigitalStampsPreferences";
  optIn?: Maybe<Scalars["Boolean"]["output"]>;
};

export type DigitalStampsPreferencesInput = {
  optIn?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Discounts = {
  __typename?: "Discounts";
  items?: Maybe<Scalars["Int"]["output"]>;
  itemsExcludingDiscountFromVouchers?: Maybe<Scalars["Int"]["output"]>;
  order?: Maybe<Scalars["Int"]["output"]>;
  shipping?: Maybe<Scalars["Int"]["output"]>;
  totalDiscounts?: Maybe<Scalars["Int"]["output"]>;
};

export type DisplayAd = {
  __typename?: "DisplayAd";
  adgroupId?: Maybe<Scalars["Int"]["output"]>;
  advertiserId?: Maybe<Scalars["Int"]["output"]>;
  auctionId: Scalars["String"]["output"];
  campaignId?: Maybe<Scalars["Int"]["output"]>;
  creative?: Maybe<DisplayAdCreative>;
  position?: Maybe<Scalars["Int"]["output"]>;
  ranking?: Maybe<Scalars["Int"]["output"]>;
};

export type DisplayAdAlignment = {
  __typename?: "DisplayAdAlignment";
  textElements?: Maybe<Scalars["String"]["output"]>;
};

export type DisplayAdCta = {
  __typename?: "DisplayAdCTA";
  action?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type DisplayAdColors = {
  __typename?: "DisplayAdColors";
  adBackground?: Maybe<Scalars["String"]["output"]>;
  cta?: Maybe<Scalars["String"]["output"]>;
  ctaBackground?: Maybe<Scalars["String"]["output"]>;
  textElements?: Maybe<Scalars["String"]["output"]>;
};

export type DisplayAdCreative = {
  __typename?: "DisplayAdCreative";
  advertiserName?: Maybe<Scalars["String"]["output"]>;
  cta?: Maybe<DisplayAdCta>;
  destinationURL?: Maybe<Scalars["String"]["output"]>;
  headline?: Maybe<Scalars["String"]["output"]>;
  productId?: Maybe<Scalars["Int"]["output"]>;
  styling?: Maybe<DisplayAdStyling>;
  subline?: Maybe<Scalars["String"]["output"]>;
};

export type DisplayAdStyling = {
  __typename?: "DisplayAdStyling";
  alignment?: Maybe<DisplayAdAlignment>;
  backgroundImage?: Maybe<Scalars["String"]["output"]>;
  colors?: Maybe<DisplayAdColors>;
  packshotURL?: Maybe<Scalars["String"]["output"]>;
};

export type DisplayAdsCategories = {
  __typename?: "DisplayAdsCategories";
  displayAds?: Maybe<Array<Maybe<DisplayAd>>>;
};

export type DisplayAdsCategoriesInput = {
  category: Scalars["String"]["input"];
  fallbackPositions: Scalars["Int"]["input"];
  platform: Scalars["String"]["input"];
  positions: Scalars["Int"]["input"];
  subcategory?: InputMaybe<Scalars["String"]["input"]>;
};

export type DisplayAdsClickEventInput = {
  auctionId: Scalars["String"]["input"];
};

export type DisplayAdsEventResult = {
  __typename?: "DisplayAdsEventResult";
  message?: Maybe<Scalars["String"]["output"]>;
};

export type DisplayAdsPlacement = {
  __typename?: "DisplayAdsPlacement";
  displayAds?: Maybe<Array<Maybe<DisplayAd>>>;
};

export type DisplayAdsPlacementInput = {
  fallbackPositions: Scalars["Int"]["input"];
  page: Scalars["Int"]["input"];
  platform: Scalars["String"]["input"];
  positions: Scalars["Int"]["input"];
};

export type DisplayAdsSearchterm = {
  __typename?: "DisplayAdsSearchterm";
  displayAds?: Maybe<Array<Maybe<DisplayAd>>>;
};

export type DisplayAdsSearchtermInput = {
  fallbackPositions: Scalars["Int"]["input"];
  platform: Scalars["String"]["input"];
  positions: Scalars["Int"]["input"];
  searchterm: Scalars["String"]["input"];
};

export type DisplayAdsShowingEventInput = {
  auctionId: Scalars["String"]["input"];
  ranking: Scalars["Int"]["input"];
};

export type DisplayAdsViewableImpressionEventInput = {
  auctionId: Scalars["String"]["input"];
  inView: Scalars["Boolean"]["input"];
  ranking: Scalars["Int"]["input"];
  /** Timestamp of event in ISO-8601 format */
  timestamp: Scalars["String"]["input"];
};

export enum DisplayUnit {
  GRAMS = "GRAMS",
  KILOGRAMS = "KILOGRAMS",
  LITERS = "LITERS",
  PIECES = "PIECES",
  UNKNOWN = "UNKNOWN",
}

export type Eta = {
  __typename?: "ETA";
  etaDeliveryWindow: TimeWindow;
  orderId: Scalars["String"]["output"];
  projectedStops: Scalars["Int"]["output"];
  state: EtaState;
  targetDeliveryWindow: TimeWindow;
};

export enum EtaState {
  LIVE = "LIVE",
  PLANNED = "PLANNED",
}

export type EarlierBoughtLine = {
  __typename?: "EarlierBoughtLine";
  orderdate?: Maybe<Scalars["String"]["output"]>;
  product?: Maybe<Product>;
  quantity?: Maybe<Scalars["Int"]["output"]>;
  sku?: Maybe<Scalars["String"]["output"]>;
};

export type EmptyBasket = {
  __typename?: "EmptyBasket";
  succeeded: Scalars["Boolean"]["output"];
};

export type EmptyBasketResult = EmptyBasket | Error;

export type Engine = {
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type Error = IError & {
  __typename?: "Error";
  errorMessage: Scalars["String"]["output"];
  friendlyHeader: Scalars["String"]["output"];
  friendlyMessage: Scalars["String"]["output"];
  reason: ErrorReason;
};

export enum ErrorDetail {
  /**
   * The deadline expired before the operation could complete.
   *
   * For operations that change the state of the system, this error
   * may be returned even if the operation has completed successfully.
   * For example, a successful response from a server could have been
   * delayed long enough for the deadline to expire.
   *
   * HTTP Mapping: 504 Gateway Timeout
   * Error Type: UNAVAILABLE
   */
  DEADLINE_EXCEEDED = "DEADLINE_EXCEEDED",
  /**
   * The server detected that the client is exhibiting a behavior that
   * might be generating excessive load.
   *
   * HTTP Mapping: 429 Too Many Requests or 420 Enhance Your Calm
   * Error Type: UNAVAILABLE
   */
  ENHANCE_YOUR_CALM = "ENHANCE_YOUR_CALM",
  /**
   * The requested field is not found in the schema.
   *
   * This differs from `NOT_FOUND` in that `NOT_FOUND` should be used when a
   * query is valid, but is unable to return a result (if, for example, a
   * specific video id doesn't exist). `FIELD_NOT_FOUND` is intended to be
   * returned by the server to signify that the requested field is not known to exist.
   * This may be returned in lieu of failing the entire query.
   * See also `PERMISSION_DENIED` for cases where the
   * requested field is invalid only for the given user or class of users.
   *
   * HTTP Mapping: 404 Not Found
   * Error Type: BAD_REQUEST
   */
  FIELD_NOT_FOUND = "FIELD_NOT_FOUND",
  /**
   * The client specified an invalid argument.
   *
   * Note that this differs from `FAILED_PRECONDITION`.
   * `INVALID_ARGUMENT` indicates arguments that are problematic
   * regardless of the state of the system (e.g., a malformed file name).
   *
   * HTTP Mapping: 400 Bad Request
   * Error Type: BAD_REQUEST
   */
  INVALID_ARGUMENT = "INVALID_ARGUMENT",
  /**
   * The provided cursor is not valid.
   *
   * The most common usage for this error is when a client is paginating
   * through a list that uses stateful cursors. In that case, the provided
   * cursor may be expired.
   *
   * HTTP Mapping: 404 Not Found
   * Error Type: NOT_FOUND
   */
  INVALID_CURSOR = "INVALID_CURSOR",
  /**
   * Unable to perform operation because a required resource is missing.
   *
   * Example: Client is attempting to refresh a list, but the specified
   * list is expired. This requires an action by the client to get a new list.
   *
   * If the user is simply trying GET a resource that is not found,
   * use the NOT_FOUND error type. FAILED_PRECONDITION.MISSING_RESOURCE
   * is to be used particularly when the user is performing an operation
   * that requires a particular resource to exist.
   *
   * HTTP Mapping: 400 Bad Request or 500 Internal Server Error
   * Error Type: FAILED_PRECONDITION
   */
  MISSING_RESOURCE = "MISSING_RESOURCE",
  /**
   * Service Error.
   *
   * There is a problem with an upstream service.
   *
   * This may be returned if a gateway receives an unknown error from a service
   * or if a service is unreachable.
   * If a request times out which waiting on a response from a service,
   * `DEADLINE_EXCEEDED` may be returned instead.
   * If a service returns a more specific error Type, the specific error Type may
   * be returned instead.
   *
   * HTTP Mapping: 502 Bad Gateway
   * Error Type: UNAVAILABLE
   */
  SERVICE_ERROR = "SERVICE_ERROR",
  /**
   * Request failed due to network errors.
   *
   * HTTP Mapping: 503 Unavailable
   * Error Type: UNAVAILABLE
   */
  TCP_FAILURE = "TCP_FAILURE",
  /**
   * Request throttled based on server concurrency limits.
   *
   * HTTP Mapping: 503 Unavailable
   * Error Type: UNAVAILABLE
   */
  THROTTLED_CONCURRENCY = "THROTTLED_CONCURRENCY",
  /**
   * Request throttled based on server CPU limits
   *
   * HTTP Mapping: 503 Unavailable.
   * Error Type: UNAVAILABLE
   */
  THROTTLED_CPU = "THROTTLED_CPU",
  /**
   * The operation is not implemented or is not currently supported/enabled.
   *
   * HTTP Mapping: 501 Not Implemented
   * Error Type: BAD_REQUEST
   */
  UNIMPLEMENTED = "UNIMPLEMENTED",
  /**
   * Unknown error.
   *
   * This error should only be returned when no other error detail applies.
   * If a client sees an unknown errorDetail, it will be interpreted as UNKNOWN.
   *
   * HTTP Mapping: 500 Internal Server Error
   */
  UNKNOWN = "UNKNOWN",
}

export enum ErrorReason {
  AMEND_ORDER_BASKET_EXISTS = "AMEND_ORDER_BASKET_EXISTS",
  BASKET_NOT_FOUND = "BASKET_NOT_FOUND",
  CREDIT_WORTHINESS_EXCEEDED = "CREDIT_WORTHINESS_EXCEEDED",
  GENERAL_ERROR = "GENERAL_ERROR",
  MOV_NOT_REACHED = "MOV_NOT_REACHED",
  ORDER_CLOSED = "ORDER_CLOSED",
  ORDER_ID_MISSING = "ORDER_ID_MISSING",
  ORDER_NOT_FOUND = "ORDER_NOT_FOUND",
  ORDER_PAST_CUTOFF = "ORDER_PAST_CUTOFF",
}

export enum ErrorType {
  /**
   * Bad Request.
   *
   * There is a problem with the request.
   * Retrying the same request is not likely to succeed.
   * An example would be a query or argument that cannot be deserialized.
   *
   * HTTP Mapping: 400 Bad Request
   */
  BAD_REQUEST = "BAD_REQUEST",
  /**
   * The operation was rejected because the system is not in a state
   * required for the operation's execution.  For example, the directory
   * to be deleted is non-empty, an rmdir operation is applied to
   * a non-directory, etc.
   *
   * Service implementers can use the following guidelines to decide
   * between `FAILED_PRECONDITION` and `UNAVAILABLE`:
   *
   * - Use `UNAVAILABLE` if the client can retry just the failing call.
   * - Use `FAILED_PRECONDITION` if the client should not retry until
   * the system state has been explicitly fixed.  E.g., if an "rmdir"
   *      fails because the directory is non-empty, `FAILED_PRECONDITION`
   * should be returned since the client should not retry unless
   * the files are deleted from the directory.
   *
   * HTTP Mapping: 400 Bad Request or 500 Internal Server Error
   */
  FAILED_PRECONDITION = "FAILED_PRECONDITION",
  /**
   * Internal error.
   *
   * An unexpected internal error was encountered. This means that some
   * invariants expected by the underlying system have been broken.
   * This error code is reserved for serious errors.
   *
   * HTTP Mapping: 500 Internal Server Error
   */
  INTERNAL = "INTERNAL",
  /**
   * The requested entity was not found.
   *
   * This could apply to a resource that has never existed (e.g. bad resource id),
   * or a resource that no longer exists (e.g. cache expired.)
   *
   * Note to server developers: if a request is denied for an entire class
   * of users, such as gradual feature rollout or undocumented allowlist,
   * `NOT_FOUND` may be used. If a request is denied for some users within
   * a class of users, such as user-based access control, `PERMISSION_DENIED`
   * must be used.
   *
   * HTTP Mapping: 404 Not Found
   */
  NOT_FOUND = "NOT_FOUND",
  /**
   * The caller does not have permission to execute the specified
   * operation.
   *
   * `PERMISSION_DENIED` must not be used for rejections
   * caused by exhausting some resource or quota.
   * `PERMISSION_DENIED` must not be used if the caller
   * cannot be identified (use `UNAUTHENTICATED`
   * instead for those errors).
   *
   * This error Type does not imply the
   * request is valid or the requested entity exists or satisfies
   * other pre-conditions.
   *
   * HTTP Mapping: 403 Forbidden
   */
  PERMISSION_DENIED = "PERMISSION_DENIED",
  /**
   * The request does not have valid authentication credentials.
   *
   * This is intended to be returned only for routes that require
   * authentication.
   *
   * HTTP Mapping: 401 Unauthorized
   */
  UNAUTHENTICATED = "UNAUTHENTICATED",
  /**
   * Currently Unavailable.
   *
   * The service is currently unavailable.  This is most likely a
   * transient condition, which can be corrected by retrying with
   * a backoff.
   *
   * HTTP Mapping: 503 Unavailable
   */
  UNAVAILABLE = "UNAVAILABLE",
  /**
   * Unknown error.
   *
   * For example, this error may be returned when
   * an error code received from another address space belongs to
   * an error space that is not known in this address space.  Also
   * errors raised by APIs that do not return enough error information
   * may be converted to this error.
   *
   * If a client sees an unknown errorType, it will be interpreted as UNKNOWN.
   * Unknown errors MUST NOT trigger any special behavior. These MAY be treated
   * by an implementation as being equivalent to INTERNAL.
   *
   * When possible, a more specific error should be provided.
   *
   * HTTP Mapping: 520 Unknown Error
   */
  UNKNOWN = "UNKNOWN",
}

export type Establishment = {
  __typename?: "Establishment";
  address?: Maybe<Address>;
  company?: Maybe<Company>;
  /** This is the id which is set by webservices nl */
  externalId?: Maybe<Scalars["String"]["output"]>;
  /** Unique identifier which will always be present.  This is companyExternalId_establishmentId in most cases, but can be companyExternalId when the establishmentId is not present */
  id: Scalars["String"]["output"];
};

export type EstablishmentDetails = {
  __typename?: "EstablishmentDetails";
  address?: Maybe<Address>;
  company?: Maybe<Company>;
  /** This is the id which is set by webservices nl */
  externalId?: Maybe<Scalars["String"]["output"]>;
  /** Unique identifier which will always be present.  This is companyExternalId_establishmentId in most cases, but can be companyExternalId when the establishmentId is not present */
  id: Scalars["String"]["output"];
};

export type Facet = Node & {
  __typename?: "Facet";
  children?: Maybe<Array<Maybe<Facet>>>;
  count: Scalars["Int"]["output"];
  friendlyUrl: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  key: Scalars["String"]["output"];
  link?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  parent?: Maybe<Scalars["String"]["output"]>;
  selected: Scalars["Boolean"]["output"];
  seoUrl?: Maybe<Scalars["String"]["output"]>;
  thematicAisle?: Maybe<Scalars["Boolean"]["output"]>;
};

export type FacetGroup = {
  __typename?: "FacetGroup";
  displayName: Scalars["String"]["output"];
  key: Scalars["String"]["output"];
  multiSelect: Scalars["Boolean"]["output"];
  tooltip?: Maybe<Tooltip>;
  values: Array<Facet>;
};

export type FavoriteRecipesListItem = {
  __typename?: "FavoriteRecipesListItem";
  /** Id of the recipe list item */
  id?: Maybe<Scalars["String"]["output"]>;
  /** Index used to order the items */
  orderIndex?: Maybe<Scalars["Int"]["output"]>;
  /** Id of the recipe */
  recipeId?: Maybe<Scalars["String"]["output"]>;
  /** Corresponding recipe id for the list item */
  recipeListId?: Maybe<Scalars["String"]["output"]>;
};

export type FindAuthorsInput = {
  customerIds?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  ids?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  marketingProfilesOnly?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Foodcoach = {
  __typename?: "Foodcoach";
  active?: Maybe<Scalars["Boolean"]["output"]>;
};

export type FoundingDate = {
  __typename?: "FoundingDate";
  day?: Maybe<Scalars["String"]["output"]>;
  month?: Maybe<Scalars["String"]["output"]>;
  year?: Maybe<Scalars["String"]["output"]>;
};

export type FreeGift = {
  __typename?: "FreeGift";
  details?: Maybe<Product>;
  id?: Maybe<Scalars["String"]["output"]>;
  quantity?: Maybe<Scalars["Float"]["output"]>;
  sku?: Maybe<Scalars["String"]["output"]>;
};

export enum GenderEnum {
  FEMALE = "FEMALE",
  MALE = "MALE",
}

export type HomeScreenOffers = {
  __typename?: "HomeScreenOffers";
  birthdayOffers?: Maybe<Array<Maybe<LoyaltyPromotion>>>;
  freeOffers?: Maybe<Array<Maybe<LoyaltyPromotion>>>;
  otherOffers?: Maybe<Array<Maybe<LoyaltyPromotion>>>;
  redeemOffers?: Maybe<Array<Maybe<LoyaltyPromotion>>>;
  savingOffers?: Maybe<Array<Maybe<LoyaltyPromotion>>>;
  welcomeOffers?: Maybe<Array<Maybe<LoyaltyPromotion>>>;
};

export type HomeStorePreference = {
  __typename?: "HomeStorePreference";
  city?: Maybe<Scalars["String"]["output"]>;
  complexNumber?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  storeDetails?: Maybe<StoreDetails>;
};

export type HomeStorePreferenceInput = {
  city?: InputMaybe<Scalars["String"]["input"]>;
  complexNumber?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type HorizontalFacet = {
  __typename?: "HorizontalFacet";
  count: Scalars["Int"]["output"];
  friendlyUrl: Scalars["String"]["output"];
  link: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  selected: Scalars["Boolean"]["output"];
};

export type HorizontalFilter = {
  __typename?: "HorizontalFilter";
  displayName?: Maybe<Scalars["String"]["output"]>;
  navigationState?: Maybe<Scalars["String"]["output"]>;
};

export enum HouseNumberParity {
  EVEN = "EVEN",
  ODD = "ODD",
}

export type IError = {
  errorMessage: Scalars["String"]["output"];
  friendlyHeader: Scalars["String"]["output"];
  friendlyMessage: Scalars["String"]["output"];
  reason: ErrorReason;
};

export type Image = {
  __typename?: "Image";
  baseName?: Maybe<Scalars["String"]["output"]>;
  height?: Maybe<Scalars["Int"]["output"]>;
  view?: Maybe<Scalars["String"]["output"]>;
  width?: Maybe<Scalars["Int"]["output"]>;
};

export type InputState = {
  affinityToken?: InputMaybe<Scalars["String"]["input"]>;
  chatKey?: InputMaybe<Scalars["String"]["input"]>;
  postSequence?: InputMaybe<Scalars["Int"]["input"]>;
  sessionId?: InputMaybe<Scalars["String"]["input"]>;
  transcriptId?: InputMaybe<Scalars["String"]["input"]>;
};

export type IntentBody = {
  __typename?: "IntentBody";
  query?: Maybe<Scalars["String"]["output"]>;
  responseId?: Maybe<Scalars["String"]["output"]>;
  responseMessages: Array<Maybe<ResponseMessage>>;
};

export type IntentRequest = {
  customerId: Scalars["String"]["input"];
  event?: InputMaybe<Scalars["String"]["input"]>;
  platform?: InputMaybe<Platform>;
  query?: InputMaybe<Scalars["String"]["input"]>;
  responseReview?: InputMaybe<ResponseReview>;
  review?: InputMaybe<Review>;
  source: Scalars["String"]["input"];
  state?: InputMaybe<InputState>;
};

export type IntentResponse = {
  __typename?: "IntentResponse";
  agentAvailable?: Maybe<Scalars["Boolean"]["output"]>;
  body?: Maybe<IntentBody>;
  source?: Maybe<Scalars["String"]["output"]>;
  state?: Maybe<State>;
};

export type Invoice = {
  __typename?: "Invoice";
  pdf?: Maybe<Scalars["Boolean"]["output"]>;
  xml?: Maybe<Scalars["Boolean"]["output"]>;
};

export type Item = {
  auctionId: Scalars["String"]["input"];
  quantity: Scalars["Int"]["input"];
  sku: Scalars["String"]["input"];
};

export type ItemDeposit = {
  __typename?: "ItemDeposit";
  name?: Maybe<Scalars["String"]["output"]>;
  quantity?: Maybe<Scalars["Int"]["output"]>;
  sku?: Maybe<Scalars["String"]["output"]>;
  unitPrice?: Maybe<Scalars["Int"]["output"]>;
};

export type ItemDepositByGroup = {
  __typename?: "ItemDepositByGroup";
  description?: Maybe<Scalars["String"]["output"]>;
  quantity?: Maybe<Scalars["Int"]["output"]>;
  total?: Maybe<MoneyType>;
};

export type ItemDepositGroup = {
  __typename?: "ItemDepositGroup";
  description?: Maybe<Scalars["String"]["output"]>;
  quantity?: Maybe<Scalars["Int"]["output"]>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type ItemInput = {
  quantity: Scalars["Int"]["input"];
  sku: Scalars["String"]["input"];
  unit: ProductUnit;
};

export type ItemPromotion = {
  __typename?: "ItemPromotion";
  description?: Maybe<Scalars["String"]["output"]>;
  discount?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  scope?: Maybe<PromotionScope>;
  type?: Maybe<Scalars["String"]["output"]>;
  voucherCode?: Maybe<Scalars["String"]["output"]>;
};

export type KeyValue = {
  __typename?: "KeyValue";
  key: Scalars["String"]["output"];
  value: Scalars["Object"]["output"];
};

export type LineDetails = {
  __typename?: "LineDetails";
  discount?: Maybe<Scalars["Int"]["output"]>;
  gross?: Maybe<Scalars["Int"]["output"]>;
  lineId?: Maybe<Scalars["String"]["output"]>;
  net?: Maybe<Scalars["Int"]["output"]>;
  sku?: Maybe<Scalars["String"]["output"]>;
  total?: Maybe<Scalars["Int"]["output"]>;
};

export type ListFollowStatusResponse = {
  __typename?: "ListFollowStatusResponse";
  isFollowing?: Maybe<Scalars["Boolean"]["output"]>;
  listId: Scalars["ID"]["output"];
};

export type LiveSearch = {
  __typename?: "LiveSearch";
  productDimensions?: Maybe<LiveSearchProductDimensions>;
  productNavigation?: Maybe<LiveSearchProductNavigation>;
  products?: Maybe<Array<Maybe<LiveSearchProducts>>>;
  recipeNavigation?: Maybe<LiveSearchRecipeNavigation>;
  recipes?: Maybe<Array<Maybe<LiveSearchRecipes>>>;
};

export type LiveSearchProductDimensions = {
  __typename?: "LiveSearchProductDimensions";
  suggestions?: Maybe<Array<Maybe<LiveSearchProductSuggestions>>>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type LiveSearchProductNavArray = {
  __typename?: "LiveSearchProductNavArray";
  dimensionName?: Maybe<Scalars["String"]["output"]>;
  displayName?: Maybe<Scalars["String"]["output"]>;
  multiSelect?: Maybe<Scalars["Boolean"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  refinements?: Maybe<Array<Maybe<LiveSearchProductRefinements>>>;
};

export type LiveSearchProductNavigation = {
  __typename?: "LiveSearchProductNavigation";
  navigation?: Maybe<Array<Maybe<LiveSearchProductNavArray>>>;
};

export type LiveSearchProductRefinements = {
  __typename?: "LiveSearchProductRefinements";
  count?: Maybe<Scalars["Int"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  multiSelect?: Maybe<Scalars["Boolean"]["output"]>;
  navigationState?: Maybe<Scalars["String"]["output"]>;
};

export type LiveSearchProductSuggestions = {
  __typename?: "LiveSearchProductSuggestions";
  label?: Maybe<Scalars["String"]["output"]>;
  navigationState?: Maybe<Scalars["String"]["output"]>;
  secondaryText?: Maybe<Scalars["String"]["output"]>;
};

export type LiveSearchProducts = {
  __typename?: "LiveSearchProducts";
  brand?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  image?: Maybe<Scalars["String"]["output"]>;
  price?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type LiveSearchRecipeNavArray = {
  __typename?: "LiveSearchRecipeNavArray";
  dimensionName?: Maybe<Scalars["String"]["output"]>;
  displayName?: Maybe<Scalars["String"]["output"]>;
  multiSelect?: Maybe<Scalars["Boolean"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

export type LiveSearchRecipeNavigation = {
  __typename?: "LiveSearchRecipeNavigation";
  navigation?: Maybe<Array<Maybe<LiveSearchRecipeNavArray>>>;
};

export type LiveSearchRecipes = {
  __typename?: "LiveSearchRecipes";
  id?: Maybe<Scalars["String"]["output"]>;
  image?: Maybe<Scalars["String"]["output"]>;
  numberOfIngredients?: Maybe<Scalars["String"]["output"]>;
  numberOfPersons?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  totalTime?: Maybe<Scalars["String"]["output"]>;
};

export type LongPollingMessages = {
  __typename?: "LongPollingMessages";
  messageBodies: Array<MessageBody>;
  sequence: Scalars["Int"]["output"];
};

export type Loyalty = {
  __typename?: "Loyalty";
  buyingStampsPreference?: Maybe<Scalars["String"]["output"]>;
  loyaltyMainCards?: Maybe<Array<Maybe<LoyaltyCard>>>;
  loyaltyOnly?: Maybe<Scalars["Boolean"]["output"]>;
  loyaltySubCards?: Maybe<Array<Maybe<LoyaltyCard>>>;
  lprCustomerStatus?: Maybe<Scalars["String"]["output"]>;
};

export type LoyaltyAddress = {
  __typename?: "LoyaltyAddress";
  apartment?: Maybe<Scalars["String"]["output"]>;
  city?: Maybe<Scalars["String"]["output"]>;
  country?: Maybe<Country>;
  number?: Maybe<Scalars["String"]["output"]>;
  postalCode?: Maybe<Scalars["String"]["output"]>;
  postalCodeExtension?: Maybe<Scalars["String"]["output"]>;
  street?: Maybe<Scalars["String"]["output"]>;
};

export type LoyaltyAddressInput = {
  apartment?: InputMaybe<Scalars["String"]["input"]>;
  city?: InputMaybe<Scalars["String"]["input"]>;
  country?: InputMaybe<CountryInput>;
  number?: InputMaybe<Scalars["String"]["input"]>;
  postalCode?: InputMaybe<Scalars["String"]["input"]>;
  postalCodeExtension?: InputMaybe<Scalars["String"]["input"]>;
  street?: InputMaybe<Scalars["String"]["input"]>;
};

export type LoyaltyBalance = {
  __typename?: "LoyaltyBalance";
  balance?: Maybe<Scalars["Int"]["output"]>;
  cardId?: Maybe<Scalars["String"]["output"]>;
};

export type LoyaltyCampaignNotification = {
  __typename?: "LoyaltyCampaignNotification";
  buttons?: Maybe<Array<Maybe<LoyaltyCampaignNotificationButton>>>;
  endDate?: Maybe<Scalars["String"]["output"]>;
  header?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  image?: Maybe<LoyaltyCampaignNotificationImage>;
  message?: Maybe<Scalars["String"]["output"]>;
  pages?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  prio?: Maybe<Scalars["Int"]["output"]>;
  startDate?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
};

export type LoyaltyCampaignNotificationButton = {
  __typename?: "LoyaltyCampaignNotificationButton";
  cssClass?: Maybe<Scalars["String"]["output"]>;
  text?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type LoyaltyCampaignNotificationImage = {
  __typename?: "LoyaltyCampaignNotificationImage";
  defaultImage?: Maybe<Scalars["String"]["output"]>;
};

export type LoyaltyCard = {
  __typename?: "LoyaltyCard";
  cardNumber?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
};

export type LoyaltyCardObj = {
  __typename?: "LoyaltyCardObj";
  number?: Maybe<Scalars["String"]["output"]>;
};

export type LoyaltyName = {
  __typename?: "LoyaltyName";
  familyName?: Maybe<Scalars["String"]["output"]>;
  givenName?: Maybe<Scalars["String"]["output"]>;
  middleName?: Maybe<Scalars["String"]["output"]>;
};

export type LoyaltyNameInput = {
  familyName?: InputMaybe<Scalars["String"]["input"]>;
  givenName?: InputMaybe<Scalars["String"]["input"]>;
  middleName?: InputMaybe<Scalars["String"]["input"]>;
};

export type LoyaltyPhoneInput = {
  countryCode: Scalars["Int"]["input"];
  number: Scalars["String"]["input"];
};

export type LoyaltyProCardInput = {
  active?: InputMaybe<Scalars["Int"]["input"]>;
  cardNumber: Scalars["String"]["input"];
};

export type LoyaltyProduct = {
  __typename?: "LoyaltyProduct";
  images?: Maybe<Array<Maybe<Image>>>;
  name?: Maybe<Scalars["String"]["output"]>;
  netContent?: Maybe<Scalars["String"]["output"]>;
  sku?: Maybe<Scalars["String"]["output"]>;
  weightMeasure?: Maybe<Scalars["String"]["output"]>;
};

export type LoyaltyPromotion = {
  __typename?: "LoyaltyPromotion";
  active?: Maybe<Scalars["Boolean"]["output"]>;
  balance?: Maybe<Scalars["Float"]["output"]>;
  burnPointsAmount?: Maybe<Scalars["Int"]["output"]>;
  buyItemsAmount?: Maybe<Scalars["Int"]["output"]>;
  canBeRedeemed?: Maybe<Scalars["Boolean"]["output"]>;
  categories?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  companyCode?: Maybe<Scalars["String"]["output"]>;
  contactInfo?: Maybe<Scalars["String"]["output"]>;
  creationTime?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  details?: Maybe<PromotionDetails>;
  employeePromotion?: Maybe<Scalars["Boolean"]["output"]>;
  eurosDiscount?: Maybe<Scalars["Float"]["output"]>;
  expirationDate?: Maybe<Scalars["String"]["output"]>;
  externalId?: Maybe<Scalars["String"]["output"]>;
  extraMoneyAmount?: Maybe<Scalars["Float"]["output"]>;
  id: Scalars["String"]["output"];
  image?: Maybe<Scalars["String"]["output"]>;
  incentiveVersion?: Maybe<Scalars["String"]["output"]>;
  largeImage?: Maybe<Scalars["Boolean"]["output"]>;
  locations?: Maybe<Array<Maybe<PromotionLocation>>>;
  minimumSpent?: Maybe<Scalars["Float"]["output"]>;
  numberOfVouchersAvailable?: Maybe<Scalars["Int"]["output"]>;
  originalBurnPointsAmount?: Maybe<Scalars["Int"]["output"]>;
  originalPrice?: Maybe<Scalars["Float"]["output"]>;
  packingState?: Maybe<PackingState>;
  percentageDiscount?: Maybe<Scalars["Float"]["output"]>;
  personalizedEndDate?: Maybe<Scalars["String"]["output"]>;
  personalizedStartDate?: Maybe<Scalars["String"]["output"]>;
  pointAmount?: Maybe<Scalars["Int"]["output"]>;
  pointType?: Maybe<Scalars["String"]["output"]>;
  points?: Maybe<Scalars["Int"]["output"]>;
  promotionTag?: Maybe<LoyaltyPromotionTag>;
  promotionType?: Maybe<Scalars["String"]["output"]>;
  redeemed?: Maybe<Scalars["Boolean"]["output"]>;
  redemptionLimitCode?: Maybe<Scalars["String"]["output"]>;
  spendIncrement?: Maybe<Scalars["Float"]["output"]>;
  spendType?: Maybe<Scalars["String"]["output"]>;
  startDate?: Maybe<Scalars["String"]["output"]>;
  tag?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  vouchersAvailable?: Maybe<Scalars["Boolean"]["output"]>;
};

export type LoyaltyPromotionTag = {
  __typename?: "LoyaltyPromotionTag";
  stack?: Maybe<Scalars["String"]["output"]>;
  text?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
};

export type LoyaltyTelephone = {
  __typename?: "LoyaltyTelephone";
  countryCode?: Maybe<Scalars["Int"]["output"]>;
  number?: Maybe<Scalars["String"]["output"]>;
  primary?: Maybe<Scalars["Boolean"]["output"]>;
  typeCode?: Maybe<Scalars["String"]["output"]>;
};

export type LoyaltyVoucher = {
  __typename?: "LoyaltyVoucher";
  creationTimestamp: Scalars["String"]["output"];
  failureCode?: Maybe<Scalars["String"]["output"]>;
  numberVouchers: Scalars["Int"]["output"];
  status: Scalars["String"]["output"];
  transactionUuid: Scalars["String"]["output"];
  voucherPromotion: LoyaltyVoucherPromotion;
};

export type LoyaltyVoucherDetails = {
  __typename?: "LoyaltyVoucherDetails";
  redeemUrl?: Maybe<Scalars["String"]["output"]>;
  transactionStatus: Scalars["String"]["output"];
  voucherCodes?: Maybe<Array<VoucherCode>>;
  voucherPromotion: LoyaltyVoucherPromotion;
};

export type LoyaltyVoucherHowItWorks = {
  __typename?: "LoyaltyVoucherHowItWorks";
  steps?: Maybe<Array<Scalars["String"]["output"]>>;
};

export type LoyaltyVoucherPromotion = {
  __typename?: "LoyaltyVoucherPromotion";
  companyCode: Scalars["String"]["output"];
  discountValue?: Maybe<Scalars["Float"]["output"]>;
  externalPromotionId: Scalars["String"]["output"];
  howItWorks?: Maybe<LoyaltyVoucherHowItWorks>;
  largeImage?: Maybe<Scalars["Boolean"]["output"]>;
  originalPrice?: Maybe<Scalars["Float"]["output"]>;
  productImage: Scalars["String"]["output"];
  productUrl: Scalars["String"]["output"];
  tag?: Maybe<Scalars["String"]["output"]>;
  termsAndConditions?: Maybe<LoyaltyVoucherTermsAndConditions>;
  title: Scalars["String"]["output"];
};

export type LoyaltyVoucherTermsAndConditions = {
  __typename?: "LoyaltyVoucherTermsAndConditions";
  terms?: Maybe<Array<Scalars["String"]["output"]>>;
};

export type MasterDetails = {
  __typename?: "MasterDetails";
  email?: Maybe<Scalars["String"]["output"]>;
  gender?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<CdmName>;
  paymentMethod?: Maybe<Scalars["String"]["output"]>;
};

export type MessageBody = {
  __typename?: "MessageBody";
  highScoreLabel?: Maybe<Scalars["String"]["output"]>;
  lowScoreLabel?: Maybe<Scalars["String"]["output"]>;
  onClickEvent?: Maybe<Scalars["String"]["output"]>;
  payload?: Maybe<Array<Maybe<KeyValue>>>;
  suggestions?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  text?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  type: MessageType;
  url?: Maybe<Scalars["String"]["output"]>;
  variant?: Maybe<Scalars["String"]["output"]>;
};

export enum MessageType {
  CustomPayload = "CustomPayload",
  Link = "Link",
  Review = "Review",
  SimpleResponse = "SimpleResponse",
  Suggestion = "Suggestion",
  Unknown = "Unknown",
}

export type MinimumOrderValue = {
  __typename?: "MinimumOrderValue";
  hdAdditionalAmountNeeded?: Maybe<Scalars["Int"]["output"]>;
  hdMinimumOrderValue?: Maybe<Scalars["Int"]["output"]>;
  hdReached?: Maybe<Scalars["Boolean"]["output"]>;
  orderValue?: Maybe<Scalars["Int"]["output"]>;
  pupAdditionalAmountNeeded?: Maybe<Scalars["Int"]["output"]>;
  pupMinimumOrderValue?: Maybe<Scalars["Int"]["output"]>;
  pupReached?: Maybe<Scalars["Boolean"]["output"]>;
};

export type MoneyType = {
  __typename?: "MoneyType";
  amount?: Maybe<Scalars["String"]["output"]>;
  currency?: Maybe<Scalars["String"]["output"]>;
};

export type MoneyTypeInput = {
  amount: Scalars["String"]["input"];
  currency: Scalars["String"]["input"];
};

/** Operations that can alter the state of the data */
export type Mutation = {
  __typename?: "Mutation";
  addBasketLine: AddBasketLineResult;
  addBasketLines: AddBasketLinesResult;
  addProductListItem?: Maybe<ProductList>;
  addToFavoriteRecipeList?: Maybe<FavoriteRecipesListItem>;
  cancelOrder: CancelOrderResponse;
  checkoutPlaceOrder: CheckoutPlaceOrderResponse;
  checkoutUpdateOrder: CheckoutUpdateOrderResponse;
  clearBasket: ClearBasketResponse;
  createAmendOrderBasket: CreateBasketResult;
  createCheckoutSession: CreateCheckoutSessionResponse;
  /**
   * Create B2BRegular or B2C user with username, customerType and terms&Condition.
   * Currently used in auth0 registration flow
   */
  createCustomer: CreateCustomerOutput;
  createLoyaltyProfile?: Maybe<CreateLoyaltyProfileResponse>;
  createProductList?: Maybe<ProductList>;
  deleteCheckoutSession: DeleteCheckoutSessionResponse;
  deleteProductList?: Maybe<Scalars["Boolean"]["output"]>;
  deleteProductListItem?: Maybe<ProductList>;
  deleteProductListItemBySku?: Maybe<ProductList>;
  /**
   * Delete the customer in CDM\
   * Possible error states that can be returned:
   * + TECHNICAL_ERROR: Any unexpected problem. eg. API timeout
   * + USER_NOT_AUTHORIZED The username + password in the request was invalid
   */
  deleteUser: DeleteUserPayload;
  displayAdsClickEvent: DisplayAdsEventResult;
  displayAdsShowingEvent: DisplayAdsEventResult;
  displayAdsViewableImpressionEvent: DisplayAdsEventResult;
  emptyBasket: EmptyBasketResult;
  followList: Scalars["Boolean"]["output"];
  /**
   * Request to update the payment method for the CDM user set by the public-gateway header\
   * Possible error states that can be returned:
   * + TECHNICAL_ERROR: If authorization fails, or any unexpected problems. eg. API timeout
   */
  paymentMethodUpdate: PaymentMethodUpdatePayload;
  registerB2bSubUser: RegisterB2bSubUserOutput;
  /**
   * Creates a new Business to Business user in CDM via ESB\
   * Possible error states that can be returned:
   * + VALIDATION_ERROR: Input object failed to validate. See the errorSubCodes for more information on why
   * + COMPANY_NOT_FOUND: The company in the input message was not found
   * + TECHNICAL_ERROR: Any unexpected problem. eg. API timeout
   */
  registerB2bUser: Registerb2bUserPayload;
  /**
   * Creates a new Business to Consumer user in CDM via ESB\
   * Possible error states that can be returned:
   * + VALIDATION_ERROR: Input object failed to validate. See the errorSubCodes for more information on why
   * + COMPANY_NOT_FOUND: The company in the input message was not found
   * + TECHNICAL_ERROR: Any unexpected problem. eg. API timeout
   */
  registerB2cUser: Registerb2cUserPayload;
  removeBasketLine: RemoveBasketLineResult;
  removeBasketLines: RemoveBasketLinesResult;
  removeBasketProduct: RemoveBasketProductResponse;
  removeFromFavoriteRecipeList?: Maybe<Scalars["Boolean"]["output"]>;
  removeVoucherCodesFromCheckoutSession: RemoveVoucherCodesFromCheckoutSessionResponse;
  reserveCheckoutDeliveryPeriod: ReserveCheckoutDeliveryPeriodResponse;
  reserveCheckoutOrderDeliveryPeriod: ReserveCheckoutOrderDeliveryPeriodResponse;
  reserveVouchers?: Maybe<Scalars["Boolean"]["output"]>;
  returnDeposits: ReturnedDepositsResponse;
  saveAddressToCheckoutSession: SaveAddressToCheckoutSessionResponse;
  saveAmendOrderBasket: SaveAmendOrderBasketResult;
  saveFulfilmentTypeToCheckoutSession: SaveFulfilmentTypeToCheckoutSessionResponse;
  saveOrder: SaveOrderResponse;
  saveStoreToCheckoutOrderSession: SaveStoreToCheckoutOrderSessionResponse;
  saveStoreToCheckoutSession: SaveStoreToCheckoutSessionResponse;
  saveVoucherCodesToCheckoutSession: SaveVoucherCodesToCheckoutSessionResponse;
  setCheckoutPrereservedDeliveryPeriod: SetCheckoutPrereservedDeliveryPeriodResponse;
  setCurrentBasket: SetCurrentBasketResult;
  setUserState?: Maybe<UserState>;
  sponsoredProductAddToBasketEvent: SponsoredProductEventResult;
  sponsoredProductAmendOrderEvent: SponsoredProductEventResult;
  sponsoredProductClickEvent: SponsoredProductEventResult;
  swapBasketLine: SwapBasketLineResult;
  unfollowList: Scalars["Boolean"]["output"];
  unpackCustomerPromotions?: Maybe<Array<Maybe<LoyaltyPromotion>>>;
  updateBasketLineQuantity: UpdateBasketLineQuantityResult;
  updateBasketProductQuantity: UpdateBasketProductQuantityResponse;
  /**
   * Updates the customer preferences in CDM\
   * Possible error states that can be returned:
   * + TECHNICAL_ERROR: Any unexpected problem. eg. API timeout
   */
  updateCustomer: UpdateCustomerPayload;
  updateLoyaltyProfile?: Maybe<UpdateLoyaltyProfileResponse>;
  /**
   * Updates the customer preferences in CDM\
   * Possible error states that can be returned:
   * + TECHNICAL_ERROR: Any unexpected problem. eg. API timeout
   */
  updatePreferences: UpdatePreferencesPayload;
  updateProductList?: Maybe<ProductList>;
  updateProductListItems?: Maybe<ProductList>;
  updateRating?: Maybe<Rating>;
  /**
   * Updates the sub customer by b2b master in CDM\
   * Possible error states that can be returned:
   * + TECHNICAL_ERROR: Any unexpected problem. eg. API timeout
   */
  updateSubByMaster: UpdateCustomerPayload;
  /**
   * Updates the customer username in CDM\
   * Possible error states that can be returned:
   * + TECHNICAL_ERROR: Any unexpected problem. eg. API timeout
   * + USER_NOT_AUTHORIZED The username + password in the request was invalid
   */
  updateUsername: UpdateUsernamePayload;
};

/** Operations that can alter the state of the data */
export type MutationAddBasketLineArgs = {
  input: AddBasketLineInput;
};

/** Operations that can alter the state of the data */
export type MutationAddBasketLinesArgs = {
  input: AddBasketLinesInput;
};

/** Operations that can alter the state of the data */
export type MutationAddProductListItemArgs = {
  input: AddProductListItemInput;
  listId: Scalars["String"]["input"];
};

/** Operations that can alter the state of the data */
export type MutationAddToFavoriteRecipeListArgs = {
  recipeId: Scalars["String"]["input"];
};

/** Operations that can alter the state of the data */
export type MutationCancelOrderArgs = {
  input: CancelOrderInput;
};

/** Operations that can alter the state of the data */
export type MutationCheckoutPlaceOrderArgs = {
  input: CheckoutPlaceOrderInput;
};

/** Operations that can alter the state of the data */
export type MutationCheckoutUpdateOrderArgs = {
  input: CheckoutUpdateOrderInput;
};

/** Operations that can alter the state of the data */
export type MutationCreateAmendOrderBasketArgs = {
  input: AmendOrderInput;
};

/** Operations that can alter the state of the data */
export type MutationCreateCheckoutSessionArgs = {
  input?: InputMaybe<CheckoutCreateSessionInput>;
};

/** Operations that can alter the state of the data */
export type MutationCreateCustomerArgs = {
  input?: InputMaybe<CreateCustomerInput>;
};

/** Operations that can alter the state of the data */
export type MutationCreateLoyaltyProfileArgs = {
  request: CreateLoyaltyProfileRequest;
};

/** Operations that can alter the state of the data */
export type MutationCreateProductListArgs = {
  input?: InputMaybe<CreateProductListInput>;
};

/** Operations that can alter the state of the data */
export type MutationDeleteProductListArgs = {
  listId: Scalars["String"]["input"];
};

/** Operations that can alter the state of the data */
export type MutationDeleteProductListItemArgs = {
  listId: Scalars["String"]["input"];
  listItemId: Scalars["String"]["input"];
};

/** Operations that can alter the state of the data */
export type MutationDeleteProductListItemBySkuArgs = {
  listId: Scalars["String"]["input"];
  sku: Scalars["String"]["input"];
};

/** Operations that can alter the state of the data */
export type MutationDeleteUserArgs = {
  customerId: Scalars["String"]["input"];
  deleteUserInput?: InputMaybe<DeleteUserInput>;
};

/** Operations that can alter the state of the data */
export type MutationDisplayAdsClickEventArgs = {
  input: DisplayAdsClickEventInput;
};

/** Operations that can alter the state of the data */
export type MutationDisplayAdsShowingEventArgs = {
  input: DisplayAdsShowingEventInput;
};

/** Operations that can alter the state of the data */
export type MutationDisplayAdsViewableImpressionEventArgs = {
  input: DisplayAdsViewableImpressionEventInput;
};

/** Operations that can alter the state of the data */
export type MutationEmptyBasketArgs = {
  type?: InputMaybe<BasketType>;
};

/** Operations that can alter the state of the data */
export type MutationFollowListArgs = {
  listId: Scalars["ID"]["input"];
};

/** Operations that can alter the state of the data */
export type MutationPaymentMethodUpdateArgs = {
  input?: InputMaybe<PaymentMethodUpdateInput>;
};

/** Operations that can alter the state of the data */
export type MutationRegisterB2bSubUserArgs = {
  input?: InputMaybe<RegisterB2bSubUserInput>;
};

/** Operations that can alter the state of the data */
export type MutationRegisterB2bUserArgs = {
  input?: InputMaybe<RegisterB2bUserInput>;
};

/** Operations that can alter the state of the data */
export type MutationRegisterB2cUserArgs = {
  input?: InputMaybe<RegisterB2cUserInput>;
};

/** Operations that can alter the state of the data */
export type MutationRemoveBasketLineArgs = {
  input: RemoveBasketLineInput;
};

/** Operations that can alter the state of the data */
export type MutationRemoveBasketLinesArgs = {
  input: RemoveBasketLinesInput;
};

/** Operations that can alter the state of the data */
export type MutationRemoveBasketProductArgs = {
  input: RemoveBasketProductInput;
};

/** Operations that can alter the state of the data */
export type MutationRemoveFromFavoriteRecipeListArgs = {
  recipeId: Scalars["String"]["input"];
};

/** Operations that can alter the state of the data */
export type MutationRemoveVoucherCodesFromCheckoutSessionArgs = {
  input: RemoveVoucherCodesFromCheckoutSessionInput;
};

/** Operations that can alter the state of the data */
export type MutationReserveCheckoutDeliveryPeriodArgs = {
  input: ReserveCheckoutDeliveryPeriodInput;
};

/** Operations that can alter the state of the data */
export type MutationReserveCheckoutOrderDeliveryPeriodArgs = {
  input: ReserveCheckoutOrderDeliveryPeriodInput;
};

/** Operations that can alter the state of the data */
export type MutationReserveVouchersArgs = {
  request: ReserveLoyaltyVoucherRequest;
};

/** Operations that can alter the state of the data */
export type MutationReturnDepositsArgs = {
  hash?: InputMaybe<Scalars["String"]["input"]>;
  input: ReturnDepositsInput;
};

/** Operations that can alter the state of the data */
export type MutationSaveAddressToCheckoutSessionArgs = {
  input: SaveAddressToCheckoutSessionInput;
};

/** Operations that can alter the state of the data */
export type MutationSaveFulfilmentTypeToCheckoutSessionArgs = {
  input: SaveFulfilmentTypeToCheckoutSessionInput;
};

/** Operations that can alter the state of the data */
export type MutationSaveOrderArgs = {
  input: SaveOrderInput;
};

/** Operations that can alter the state of the data */
export type MutationSaveStoreToCheckoutOrderSessionArgs = {
  input: SaveStoreToCheckoutOrderSessionInput;
};

/** Operations that can alter the state of the data */
export type MutationSaveStoreToCheckoutSessionArgs = {
  input: SaveStoreToCheckoutSessionInput;
};

/** Operations that can alter the state of the data */
export type MutationSaveVoucherCodesToCheckoutSessionArgs = {
  input: SaveVoucherCodesToCheckoutSessionInput;
};

/** Operations that can alter the state of the data */
export type MutationSetCheckoutPrereservedDeliveryPeriodArgs = {
  input: SetCheckoutPrereservedDeliveryPeriodInput;
};

/** Operations that can alter the state of the data */
export type MutationSetCurrentBasketArgs = {
  input: SetCurrentBasketInput;
};

/** Operations that can alter the state of the data */
export type MutationSetUserStateArgs = {
  state: UserStateInput;
};

/** Operations that can alter the state of the data */
export type MutationSponsoredProductAddToBasketEventArgs = {
  input: SponsoredProductAddToBasketEventInput;
};

/** Operations that can alter the state of the data */
export type MutationSponsoredProductAmendOrderEventArgs = {
  input: SponsoredProductAmendOrderEventInput;
};

/** Operations that can alter the state of the data */
export type MutationSponsoredProductClickEventArgs = {
  input: SponsoredProductClickEventInput;
};

/** Operations that can alter the state of the data */
export type MutationSwapBasketLineArgs = {
  input: SwapBasketLineInput;
};

/** Operations that can alter the state of the data */
export type MutationUnfollowListArgs = {
  listId: Scalars["ID"]["input"];
};

/** Operations that can alter the state of the data */
export type MutationUpdateBasketLineQuantityArgs = {
  input: UpdateBasketLineQuantityInput;
};

/** Operations that can alter the state of the data */
export type MutationUpdateBasketProductQuantityArgs = {
  input: UpdateBasketProductQuantityInput;
};

/** Operations that can alter the state of the data */
export type MutationUpdateCustomerArgs = {
  customer?: InputMaybe<UpdateCustomerInput>;
  customerId: Scalars["String"]["input"];
};

/** Operations that can alter the state of the data */
export type MutationUpdateLoyaltyProfileArgs = {
  request: UpdateLoyaltyProfileRequest;
};

/** Operations that can alter the state of the data */
export type MutationUpdatePreferencesArgs = {
  customerId: Scalars["String"]["input"];
  preferences?: InputMaybe<UpdatePreferencesInput>;
};

/** Operations that can alter the state of the data */
export type MutationUpdateProductListArgs = {
  input?: InputMaybe<UpdateProductListInput>;
  listId: Scalars["String"]["input"];
};

/** Operations that can alter the state of the data */
export type MutationUpdateProductListItemsArgs = {
  input: Array<UpdateProductListItemInput>;
  listId: Scalars["String"]["input"];
};

/** Operations that can alter the state of the data */
export type MutationUpdateRatingArgs = {
  score: Scalars["Int"]["input"];
  sku: Scalars["String"]["input"];
};

/** Operations that can alter the state of the data */
export type MutationUpdateSubByMasterArgs = {
  customer?: InputMaybe<UpdateSubByMasterInput>;
  masterId: Scalars["String"]["input"];
  subId: Scalars["String"]["input"];
};

/** Operations that can alter the state of the data */
export type MutationUpdateUsernameArgs = {
  customerId: Scalars["String"]["input"];
  usernameInput?: InputMaybe<UpdateUsernameInput>;
};

export type Name = {
  __typename?: "Name";
  firstName?: Maybe<Scalars["String"]["output"]>;
  lastName?: Maybe<Scalars["String"]["output"]>;
  middleName?: Maybe<Scalars["String"]["output"]>;
};

export type NewsletterPreference = {
  __typename?: "NewsletterPreference";
  extras?: Maybe<Scalars["Boolean"]["output"]>;
  foodcoach?: Maybe<Scalars["Boolean"]["output"]>;
  inspiration?: Maybe<Scalars["Boolean"]["output"]>;
  marketing?: Maybe<Scalars["Boolean"]["output"]>;
  marketingBelgium?: Maybe<Scalars["Boolean"]["output"]>;
  /** @deprecated Newsletter promotion no longer used */
  promotion?: Maybe<Scalars["Boolean"]["output"]>;
};

export type NewsletterPreferenceInput = {
  extras?: InputMaybe<Scalars["Boolean"]["input"]>;
  foodcoach?: InputMaybe<Scalars["Boolean"]["input"]>;
  inspiration?: InputMaybe<Scalars["Boolean"]["input"]>;
  marketing?: InputMaybe<Scalars["Boolean"]["input"]>;
  marketingBelgium?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type NewsletterPreferencesInput = {
  extras?: InputMaybe<Scalars["Boolean"]["input"]>;
  foodcoach?: InputMaybe<Scalars["Boolean"]["input"]>;
  inspiration?: InputMaybe<Scalars["Boolean"]["input"]>;
  marketing?: InputMaybe<Scalars["Boolean"]["input"]>;
  marketingBelgium?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type NewsletterSubscription = {
  __typename?: "NewsletterSubscription";
  key?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["String"]["output"]>;
};

export type NewsletterSubscriptionPreference = {
  __typename?: "NewsletterSubscriptionPreference";
  newsletterSubscriptionList?: Maybe<Array<Maybe<NewsletterSubscription>>>;
};

export type Node = {
  id: Scalars["ID"]["output"];
};

export type Notification = {
  __typename?: "Notification";
  image: Scalars["String"]["output"];
  message: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export type NutriScore = {
  __typename?: "NutriScore";
  url: Scalars["String"]["output"];
  value: Scalars["String"]["output"];
};

export type NutritionsTable = {
  __typename?: "NutritionsTable";
  columns?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  rows?: Maybe<Array<Maybe<Array<Maybe<Scalars["String"]["output"]>>>>>;
};

export type OpenOrder = {
  __typename?: "OpenOrder";
  address?: Maybe<Address>;
  /** @deprecated use cutOff instead (DateTime) */
  firstCutOffDateTimeFormatted?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated use orderUUID instead */
  id?: Maybe<Scalars["String"]["output"]>;
  orderId?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated use orderId instead */
  orderNumber?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated use deliverDate instead (DateTime) */
  orderStartDateCompleteFormatted?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated use deliverDate instead (DateTime) */
  orderStartDateFormatted?: Maybe<Scalars["String"]["output"]>;
  orderUUID?: Maybe<Scalars["String"]["output"]>;
  slot?: Maybe<Slot>;
};

export enum OperationType {
  ADD = "ADD",
  REMOVE = "REMOVE",
  REPLACE = "REPLACE",
}

export enum OptInStatusEnum {
  NO = "NO",
  NOT_ANSWERED = "NOT_ANSWERED",
  YES = "YES",
}

export type Order = {
  __typename?: "Order";
  calculatedTotals: OrderCalculatedTotals;
  calculation?: Maybe<CalculationResult>;
  collection?: Maybe<OrderCollection>;
  customerId: Scalars["String"]["output"];
  delivery?: Maybe<OrderDelivery>;
  deliveryDate: Scalars["String"]["output"];
  freeGifts: Array<OrderFreeGift>;
  fulfilmentData: OrderFulfilmentData;
  fulfilmentType: OrderFulfilmentType;
  hasAgeRestrictedItems: Scalars["Boolean"]["output"];
  itemLevelDeposits: Array<OrderDeposit>;
  items: Array<OrderItem>;
  orderId: Scalars["Float"]["output"];
  orderLevelDeposits: Array<OrderDeposit>;
  orderLevelPromotions: Array<OrderPromotion>;
  orderTracking?: Maybe<OrderTracking>;
  paymentMethod?: Maybe<PaymentMethod>;
  payments: Array<Payment>;
  progress: OrderProgress;
  progressHelpers: OrderProgressHelpers;
  promotions: Array<OrderPromotion>;
  shippingStatus?: Maybe<ShippingStatus>;
  totals: OrderTotals;
};

export type OrderCalculatedDepositGroup = {
  __typename?: "OrderCalculatedDepositGroup";
  description: Scalars["String"]["output"];
  quantity: Scalars["Int"]["output"];
  total: MoneyType;
};

export type OrderCalculatedDiscounts = {
  __typename?: "OrderCalculatedDiscounts";
  items: MoneyType;
  itemsExcludingDiscountFromVouchers: MoneyType;
  order: MoneyType;
  shipping: MoneyType;
  totalDiscounts: MoneyType;
  voucherCodeProductPromotions: MoneyType;
};

export type OrderCalculatedTax = {
  __typename?: "OrderCalculatedTax";
  code: CalculatedPriceTaxCode;
  total: MoneyType;
};

export type OrderCalculatedTaxes = {
  __typename?: "OrderCalculatedTaxes";
  groups: Array<OrderCalculatedTax>;
  totalTaxes: MoneyType;
};

export type OrderCalculatedTotalDeposits = {
  __typename?: "OrderCalculatedTotalDeposits";
  totalDeposit: MoneyType;
  totalReturnedDeposit: MoneyType;
};

export type OrderCalculatedTotals = {
  __typename?: "OrderCalculatedTotals";
  deposit: OrderCalculatedTotalDeposits;
  discounts: OrderCalculatedDiscounts;
  itemSubtotal: MoneyType;
  itemTotal: MoneyType;
  itemsDepositGroups: Array<OrderCalculatedDepositGroup>;
  nonItemTotal: MoneyType;
  returnedDepositGroups: Array<OrderCalculatedDepositGroup>;
  shippingCosts: MoneyType;
  surcharges: MoneyType;
  taxes: OrderCalculatedTaxes;
  totalToPay: MoneyType;
};

export enum OrderChannel {
  CALL_CENTER = "CALL_CENTER",
  MOBILE_APP = "MOBILE_APP",
  MOBILE_WEB = "MOBILE_WEB",
  PUNCH_OUT = "PUNCH_OUT",
  WEB = "WEB",
}

export type OrderCollection = {
  __typename?: "OrderCollection";
  billingAddress?: Maybe<Address>;
  collectionPoint?: Maybe<OrderCollectionPoint>;
  endTime?: Maybe<Scalars["String"]["output"]>;
  priceLine?: Maybe<Scalars["String"]["output"]>;
  reservationId?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated use startTime endTime properties instead */
  slotId?: Maybe<Scalars["String"]["output"]>;
  startTime?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated Use storeV2 */
  store?: Maybe<Store>;
  storeId?: Maybe<Scalars["String"]["output"]>;
  storeV2?: Maybe<StoreV2>;
};

export type OrderCollectionPoint = {
  __typename?: "OrderCollectionPoint";
  address: Address;
  email: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  lastName: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  phoneNumber: Scalars["String"]["output"];
};

export type OrderCount = {
  __typename?: "OrderCount";
  count: Scalars["Int"]["output"];
};

export type OrderDelivery = {
  __typename?: "OrderDelivery";
  address?: Maybe<Address>;
  endTime?: Maybe<Scalars["String"]["output"]>;
  linkedSapId?: Maybe<Scalars["String"]["output"]>;
  priceLine?: Maybe<Scalars["String"]["output"]>;
  reservationId?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated use startTime endTime properties instead */
  slotId?: Maybe<Scalars["String"]["output"]>;
  startTime?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated Use storeV2 */
  store?: Maybe<Store>;
  storeId?: Maybe<Scalars["String"]["output"]>;
  storeV2?: Maybe<StoreV2>;
};

export type OrderDeposit = {
  __typename?: "OrderDeposit";
  description: DepositDescription;
  lineNumber: Scalars["Int"]["output"];
  /** @deprecated Eventually we will only use lineNumber */
  omsInternalLineNumber: Scalars["Int"]["output"];
  quantity: Scalars["Int"]["output"];
  sku: Scalars["String"]["output"];
  unitPrice: MoneyType;
};

export type OrderFreeGift = {
  __typename?: "OrderFreeGift";
  details?: Maybe<Product>;
  hidden: Scalars["Boolean"]["output"];
  lineId: Scalars["String"]["output"];
  lineNumber: Scalars["Int"]["output"];
  promotions: Array<OrderPromotion>;
  quantity: Scalars["Int"]["output"];
  sku: Scalars["String"]["output"];
};

export type OrderFulfilmentData = {
  __typename?: "OrderFulfilmentData";
  displayAddress: Address;
  endTime: Scalars["String"]["output"];
  priceLine?: Maybe<Scalars["String"]["output"]>;
  reservationId: Scalars["String"]["output"];
  startTime: Scalars["String"]["output"];
  /** @deprecated Use storeV2 */
  store: Store;
  storeId: Scalars["String"]["output"];
  storeV2: StoreV2;
};

export enum OrderFulfilmentType {
  COLLECTION = "COLLECTION",
  HOME_DELIVERY = "HOME_DELIVERY",
}

export type OrderItem = {
  __typename?: "OrderItem";
  ageRestriction?: Maybe<Scalars["Int"]["output"]>;
  available: Scalars["Boolean"]["output"];
  basePrice: MoneyType;
  deposits: Array<OrderDeposit>;
  details?: Maybe<Product>;
  lineId: Scalars["String"]["output"];
  lineNumber: Scalars["Int"]["output"];
  linePriceExDiscount: MoneyType;
  linePriceIncDiscount: MoneyType;
  name: Scalars["String"]["output"];
  omsInternalLineNumber: Scalars["Int"]["output"];
  pricePerUnit?: Maybe<OrderPricePerUnit>;
  promotions: Array<OrderPromotion>;
  quantity: Scalars["Int"]["output"];
  shippingCosts: MoneyType;
  shippingTax: OrderTax;
  sku: Scalars["String"]["output"];
  substitution: OrderSubstitution;
  surcharges: Array<Surcharge>;
  tax: OrderTax;
  unit: ProductUnit;
};

export type OrderOptions = {
  includeOmsLineNumbers?: InputMaybe<Scalars["Boolean"]["input"]>;
  mergeItemsWithSameSkuAndPrice?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type OrderPricePerUnit = {
  __typename?: "OrderPricePerUnit";
  price: MoneyType;
  quantity: Scalars["Int"]["output"];
  unit: DisplayUnit;
};

export type OrderProgress = {
  __typename?: "OrderProgress";
  cancellationReasonCode?: Maybe<Scalars["String"]["output"]>;
  collectedTime?: Maybe<Scalars["String"]["output"]>;
  creationTime: Scalars["String"]["output"];
  cutoffTime: Scalars["String"]["output"];
  modificationTime: Scalars["String"]["output"];
  orderChannel: OrderChannel;
  requestType: OrderRequestType;
  status: OrderStatus;
};

export type OrderProgressHelpers = {
  __typename?: "OrderProgressHelpers";
  hasPassedCutoffTime: Scalars["Boolean"]["output"];
  isCancelled: Scalars["Boolean"]["output"];
  isClosed: Scalars["Boolean"]["output"];
  isCompleted: Scalars["Boolean"]["output"];
  isEditable: Scalars["Boolean"]["output"];
};

export type OrderPromotion = {
  __typename?: "OrderPromotion";
  description?: Maybe<Scalars["String"]["output"]>;
  discount?: Maybe<MoneyType>;
  id?: Maybe<Scalars["String"]["output"]>;
  scope?: Maybe<OrderPromotionScope>;
  type?: Maybe<Scalars["String"]["output"]>;
  voucherCode?: Maybe<Scalars["String"]["output"]>;
};

export enum OrderPromotionScope {
  FREE_GIFT = "FREE_GIFT",
  ORDER = "ORDER",
  /** @deprecated Use FREE_GIFT instead */
  ORDER_FREE_GIFT = "ORDER_FREE_GIFT",
  PRODUCT = "PRODUCT",
  /** @deprecated Use FREE_GIFT instead */
  PRODUCT_FREE_GIFT = "PRODUCT_FREE_GIFT",
  SHIPPING = "SHIPPING",
  UNKNOWN = "UNKNOWN",
}

export enum OrderRequestType {
  CANCEL_ORDER = "CANCEL_ORDER",
  CREATE_ORDER = "CREATE_ORDER",
  ORDER_EVENT = "ORDER_EVENT",
  UPDATE_ORDER = "UPDATE_ORDER",
}

export type OrderServiceOrder = {
  __typename?: "OrderServiceOrder";
  calculatedTotals: OrderCalculatedTotals;
  collection?: Maybe<OrderServiceOrderCollection>;
  customerId: Scalars["String"]["output"];
  delivery?: Maybe<OrderServiceOrderDelivery>;
  deliveryDate: Scalars["String"]["output"];
  freeGifts: Array<OrderServiceOrderFreeGift>;
  fulfilmentData: OrderServiceOrderFulfilmentData;
  fulfilmentType: OrderFulfilmentType;
  hasAgeRestrictedItems: Scalars["Boolean"]["output"];
  itemLevelDeposits: Array<OrderServiceOrderDeposit>;
  items: Array<OrderServiceOrderItem>;
  orderId: Scalars["Float"]["output"];
  orderLevelDeposits: Array<OrderServiceOrderDeposit>;
  orderLevelPromotions: Array<OrderServiceOrderPromotion>;
  orderTracking?: Maybe<OrderTracking>;
  paymentMethod?: Maybe<PaymentMethod>;
  payments: Array<Payment>;
  progress: OrderServiceOrderProgress;
  progressHelpers: OrderServiceOrderProgressHelpers;
  promotions: Array<OrderServiceOrderPromotion>;
  shippingStatus?: Maybe<ShippingStatus>;
  totals: OrderServiceOrderTotals;
};

export type OrderServiceOrderCollection = {
  __typename?: "OrderServiceOrderCollection";
  billingAddress?: Maybe<Address>;
  collectionPoint?: Maybe<OrderServiceOrderCollectionPoint>;
  endTime?: Maybe<Scalars["String"]["output"]>;
  priceLine?: Maybe<Scalars["String"]["output"]>;
  reservationId?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated use startTime endTime properties instead */
  slotId?: Maybe<Scalars["String"]["output"]>;
  startTime?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated Use storeV2 */
  store?: Maybe<Store>;
  storeId?: Maybe<Scalars["String"]["output"]>;
  storeV2?: Maybe<StoreV2>;
};

export type OrderServiceOrderCollectionPoint = {
  __typename?: "OrderServiceOrderCollectionPoint";
  address: Address;
  email: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  lastName: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  phoneNumber: Scalars["String"]["output"];
};

export type OrderServiceOrderDelivery = {
  __typename?: "OrderServiceOrderDelivery";
  address?: Maybe<Address>;
  endTime?: Maybe<Scalars["String"]["output"]>;
  linkedSapId?: Maybe<Scalars["String"]["output"]>;
  priceLine?: Maybe<Scalars["String"]["output"]>;
  reservationId?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated use startTime endTime properties instead */
  slotId?: Maybe<Scalars["String"]["output"]>;
  startTime?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated Use storeV2 */
  store?: Maybe<Store>;
  storeId?: Maybe<Scalars["String"]["output"]>;
  storeV2?: Maybe<StoreV2>;
};

export type OrderServiceOrderDeposit = {
  __typename?: "OrderServiceOrderDeposit";
  description: DepositDescription;
  lineNumber: Scalars["Int"]["output"];
  /** @deprecated Eventually we will only use lineNumber */
  omsInternalLineNumber: Scalars["Int"]["output"];
  quantity: Scalars["Int"]["output"];
  sku: Scalars["String"]["output"];
  unitPrice: Scalars["String"]["output"];
};

export type OrderServiceOrderFreeGift = {
  __typename?: "OrderServiceOrderFreeGift";
  details?: Maybe<Product>;
  hidden: Scalars["Boolean"]["output"];
  lineNumber: Scalars["Int"]["output"];
  promotions: Array<OrderServiceOrderPromotion>;
  quantity: Scalars["Int"]["output"];
  sku: Scalars["String"]["output"];
};

export type OrderServiceOrderFulfilmentData = {
  __typename?: "OrderServiceOrderFulfilmentData";
  displayAddress: Address;
  endTime: Scalars["String"]["output"];
  priceLine?: Maybe<Scalars["String"]["output"]>;
  reservationId: Scalars["String"]["output"];
  startTime: Scalars["String"]["output"];
  /** @deprecated Use storeV2 */
  store: Store;
  storeId: Scalars["String"]["output"];
  storeV2: StoreV2;
};

export type OrderServiceOrderItem = {
  __typename?: "OrderServiceOrderItem";
  ageRestriction?: Maybe<Scalars["Int"]["output"]>;
  available: Scalars["Boolean"]["output"];
  basePrice: Scalars["String"]["output"];
  deposits: Array<OrderServiceOrderDeposit>;
  details?: Maybe<Product>;
  lineNumber: Scalars["Int"]["output"];
  linePriceExDiscount: Scalars["String"]["output"];
  linePriceIncDiscount: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  omsInternalLineNumber: Scalars["Int"]["output"];
  pricePerUnit?: Maybe<OrderServiceOrderPricePerUnit>;
  promotions: Array<OrderServiceOrderPromotion>;
  quantity: Scalars["Int"]["output"];
  shippingCosts: Scalars["String"]["output"];
  shippingTax: OrderServiceOrderTax;
  sku: Scalars["String"]["output"];
  substitution: OrderServiceOrderSubstitution;
  surcharges: Array<OrderServiceOrderItemSurcharge>;
  tax: OrderServiceOrderTax;
  unit: ProductUnit;
};

export type OrderServiceOrderItemSurcharge = {
  __typename?: "OrderServiceOrderItemSurcharge";
  type: SurchargeType;
  value: Scalars["String"]["output"];
};

export type OrderServiceOrderOptions = {
  includeOmsLineNumbers?: InputMaybe<Scalars["Boolean"]["input"]>;
  mergeItemsWithSameSkuAndPrice?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type OrderServiceOrderPricePerUnit = {
  __typename?: "OrderServiceOrderPricePerUnit";
  price: Scalars["String"]["output"];
  quantity: Scalars["Int"]["output"];
  unit: DisplayUnit;
};

export type OrderServiceOrderProgress = {
  __typename?: "OrderServiceOrderProgress";
  cancellationReasonCode?: Maybe<Scalars["String"]["output"]>;
  collectedTime?: Maybe<Scalars["String"]["output"]>;
  creationTime: Scalars["String"]["output"];
  cutoffTime: Scalars["String"]["output"];
  modificationTime: Scalars["String"]["output"];
  orderChannel: OrderChannel;
  requestType: OrderRequestType;
  status: OrderStatus;
};

export type OrderServiceOrderProgressHelpers = {
  __typename?: "OrderServiceOrderProgressHelpers";
  hasPassedCutoffTime: Scalars["Boolean"]["output"];
  isCancelled: Scalars["Boolean"]["output"];
  isClosed: Scalars["Boolean"]["output"];
  isCompleted: Scalars["Boolean"]["output"];
  isEditable: Scalars["Boolean"]["output"];
};

export type OrderServiceOrderPromotion = {
  __typename?: "OrderServiceOrderPromotion";
  description?: Maybe<Scalars["String"]["output"]>;
  discount?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  scope?: Maybe<OrderPromotionScope>;
  type?: Maybe<Scalars["String"]["output"]>;
  voucherCode?: Maybe<Scalars["String"]["output"]>;
};

export type OrderServiceOrderShippingTax = {
  __typename?: "OrderServiceOrderShippingTax";
  amount: Scalars["String"]["output"];
  amountAtTaxRate: Scalars["String"]["output"];
  taxTariff: OrderTaxTariff;
};

export type OrderServiceOrderSubstitution = {
  __typename?: "OrderServiceOrderSubstitution";
  isAllowed: Scalars["Boolean"]["output"];
  substituteFor?: Maybe<Scalars["String"]["output"]>;
  substitutedBy?: Maybe<Array<Scalars["String"]["output"]>>;
};

export type OrderServiceOrderSurcharges = {
  __typename?: "OrderServiceOrderSurcharges";
  singleUsePlastic: Scalars["String"]["output"];
  totalSurcharges: Scalars["String"]["output"];
};

export type OrderServiceOrderTax = {
  __typename?: "OrderServiceOrderTax";
  amount: Scalars["String"]["output"];
  taxTariff: OrderTaxTariff;
};

export type OrderServiceOrderTotals = {
  __typename?: "OrderServiceOrderTotals";
  deliveredItemDeposits: Scalars["String"]["output"];
  deliveredOrderDeposits: Scalars["String"]["output"];
  itemDiscounts: Scalars["String"]["output"];
  itemSubtotal: Scalars["String"]["output"];
  orderDiscounts: Scalars["String"]["output"];
  returnedDeposits: Scalars["String"]["output"];
  shippingCosts: Scalars["String"]["output"];
  shippingDiscounts: Scalars["String"]["output"];
  shippingTaxes: Array<OrderServiceOrderShippingTax>;
  surcharges: OrderServiceOrderSurcharges;
  taxes: Array<OrderServiceOrderTax>;
  totalTax: Scalars["String"]["output"];
  totalToPay: Scalars["String"]["output"];
};

export type OrderShippingTax = {
  __typename?: "OrderShippingTax";
  amount: MoneyType;
  amountAtTaxRate: MoneyType;
  taxTariff: OrderTaxTariff;
};

export enum OrderStatus {
  ALLOCATED_TO_VAN = "ALLOCATED_TO_VAN",
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  DISPATCHED = "DISPATCHED",
  NEW = "NEW",
  NO_INITIAL_APPROVAL_RECEIVED_BEFORE_CUTOFF = "NO_INITIAL_APPROVAL_RECEIVED_BEFORE_CUTOFF",
  NO_UPDATE_APPROVAL_RECEIVED_BEFORE_CUTOFF = "NO_UPDATE_APPROVAL_RECEIVED_BEFORE_CUTOFF",
  ON_HOLD_FOR_INITIAL_APPROVAL = "ON_HOLD_FOR_INITIAL_APPROVAL",
  ON_HOLD_FOR_UPDATE_APPROVAL = "ON_HOLD_FOR_UPDATE_APPROVAL",
  OPEN = "OPEN",
  PLACED = "PLACED",
  PLANNED_BUT_NOT_PICKED = "PLANNED_BUT_NOT_PICKED",
  READY_FOR_DELIVERY = "READY_FOR_DELIVERY",
  REJECTED = "REJECTED",
  RETRIEVAL_IN_PROGRESS = "RETRIEVAL_IN_PROGRESS",
  REVIEW_WITH_CUSTOMER = "REVIEW_WITH_CUSTOMER",
  UNCOLLECTED = "UNCOLLECTED",
  WAITING_CUSTOMER = "WAITING_CUSTOMER",
}

export type OrderSubstitution = {
  __typename?: "OrderSubstitution";
  isAllowed: Scalars["Boolean"]["output"];
  substituteFor?: Maybe<Scalars["String"]["output"]>;
  substitutedBy?: Maybe<Array<Scalars["String"]["output"]>>;
};

export type OrderSummary = {
  __typename?: "OrderSummary";
  branchName?: Maybe<Scalars["String"]["output"]>;
  creationTime: Scalars["String"]["output"];
  customerId: Scalars["String"]["output"];
  cutoffTime?: Maybe<Scalars["String"]["output"]>;
  deliveryAddress?: Maybe<Address>;
  deliveryDate: Scalars["String"]["output"];
  emailAddress?: Maybe<Scalars["String"]["output"]>;
  fulfilmentType: OrderFulfilmentType;
  orderId: Scalars["Float"]["output"];
  orderTracking?: Maybe<OrderTracking>;
  reservationId: Scalars["String"]["output"];
  /** @deprecated use shippingCostsMoneyType property instead */
  shippingCosts: Scalars["String"]["output"];
  shippingCostsMoneyType: MoneyType;
  shippingStatus?: Maybe<ShippingStatus>;
  slotEndTime?: Maybe<Scalars["String"]["output"]>;
  slotStartTime: Scalars["String"]["output"];
  status: OrderStatus;
  /** @deprecated Use storeV2 */
  store?: Maybe<Store>;
  storeId?: Maybe<Scalars["String"]["output"]>;
  storeV2?: Maybe<StoreV2>;
  /** @deprecated use totalTaxMoneyType property instead */
  totalTax: Scalars["String"]["output"];
  totalTaxMoneyType: MoneyType;
  /** @deprecated use totalToPayMoneyType property instead */
  totalToPay: Scalars["String"]["output"];
  totalToPayMoneyType: MoneyType;
};

export type OrderSurcharges = {
  __typename?: "OrderSurcharges";
  singleUsePlastic: MoneyType;
  totalSurcharges: MoneyType;
};

export type OrderTax = {
  __typename?: "OrderTax";
  amount: MoneyType;
  taxTariff: OrderTaxTariff;
};

export enum OrderTaxTariff {
  FULL_TAX = "FULL_TAX",
  NO_TAX = "NO_TAX",
  REDUCED_TAX = "REDUCED_TAX",
}

export type OrderTotals = {
  __typename?: "OrderTotals";
  deliveredItemDeposits: MoneyType;
  deliveredOrderDeposits: MoneyType;
  itemDiscounts: MoneyType;
  itemSubtotal: MoneyType;
  orderDiscounts: MoneyType;
  returnedDeposits: MoneyType;
  shippingCosts: MoneyType;
  shippingDiscounts: MoneyType;
  shippingTaxes: Array<OrderShippingTax>;
  surcharges: OrderSurcharges;
  taxes: Array<OrderTax>;
  totalTax: MoneyType;
  totalToPay: MoneyType;
};

export type OrderTracking = {
  __typename?: "OrderTracking";
  trackingCodeRecord?: Maybe<TrackingCodeRecord>;
};

export type OrdersInput = {
  direction?: InputMaybe<SortingDirections>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sortBy?: InputMaybe<OrdersSortingOptions>;
  status?: InputMaybe<Array<OrderStatus>>;
  statusCategory?: InputMaybe<StatusCategory>;
};

export type OrdersResponse = {
  __typename?: "OrdersResponse";
  count: Scalars["Int"]["output"];
  hasNext: Scalars["Boolean"]["output"];
  hasPrevious: Scalars["Boolean"]["output"];
  orders: Array<OrderSummary>;
  page: Scalars["Int"]["output"];
  pageCount: Scalars["Int"]["output"];
  totalCount: Scalars["Int"]["output"];
  totalPages: Scalars["Int"]["output"];
};

export enum OrdersSortingOptions {
  deliveryDate = "deliveryDate",
}

export type Os = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  version?: InputMaybe<Scalars["String"]["input"]>;
};

export enum PackingState {
  NONPACKED = "NONPACKED",
  PACKED = "PACKED",
  UNPACKED = "UNPACKED",
}

export type PaginatedOrdersInput = {
  direction?: InputMaybe<SortingDirections>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sortBy?: InputMaybe<OrdersSortingOptions>;
  status?: InputMaybe<Array<OrderStatus>>;
  statusCategory?: InputMaybe<StatusCategory>;
};

export type PaginatedOrdersResponse = {
  __typename?: "PaginatedOrdersResponse";
  count: Scalars["Int"]["output"];
  hasNext: Scalars["Boolean"]["output"];
  hasPrevious: Scalars["Boolean"]["output"];
  orders: Array<OrderSummary>;
  page: Scalars["Int"]["output"];
  pageCount: Scalars["Int"]["output"];
  totalCount: Scalars["Int"]["output"];
  totalPages: Scalars["Int"]["output"];
};

export type PaginationInput = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  limit: Scalars["Int"]["input"];
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Payload = {
  status: StatusEnum;
};

export type Payment = {
  __typename?: "Payment";
  creationDateTime: Scalars["String"]["output"];
  customerId: Scalars["String"]["output"];
  orderId: Scalars["Float"]["output"];
  paymentId: Scalars["Float"]["output"];
  totalAmountIncTax: Scalars["String"]["output"];
  transactionStatus: TransactionStatus;
  transactions: Array<PaymentTransaction>;
};

export type PaymentLink = {
  __typename?: "PaymentLink";
  amount: PaymentLinkAmount;
  countryCode?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  expiresAt?: Maybe<DateTime>;
  id?: Maybe<Scalars["String"]["output"]>;
  merchantAccount?: Maybe<Scalars["String"]["output"]>;
  reference: Scalars["String"]["output"];
  returnUrl?: Maybe<Scalars["String"]["output"]>;
  reusable?: Maybe<Scalars["Boolean"]["output"]>;
  shopperLocale?: Maybe<Scalars["String"]["output"]>;
  shopperReference?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type PaymentLinkAmount = {
  __typename?: "PaymentLinkAmount";
  currency?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["Int"]["output"]>;
};

export enum PaymentMethod {
  DEBIT_CARD = "DEBIT_CARD",
  SAP_INVOICE = "SAP_INVOICE",
  SEPA_DIRECT_DEBIT = "SEPA_DIRECT_DEBIT",
}

export enum PaymentMethodEnum {
  DIRECT_DEBIT = "DIRECT_DEBIT",
  INVOICE = "INVOICE",
}

export type PaymentMethodUpdateInput = {
  /** The amount of credit that the customer wishes to switch to */
  amount: Scalars["Int"]["input"];
  /** The payment method the customer wishes to switch to */
  paymentMethod: PaymentMethodEnum;
};

export type PaymentMethodUpdatePayload = Payload & {
  __typename?: "PaymentMethodUpdatePayload";
  status: StatusEnum;
};

export type PaymentTransaction = {
  __typename?: "PaymentTransaction";
  amount: Scalars["String"]["output"];
  createdDateTime: Scalars["String"]["output"];
  invoiceDate?: Maybe<Scalars["String"]["output"]>;
  invoiceDocumentRef?: Maybe<Scalars["String"]["output"]>;
  invoiceNumber?: Maybe<Scalars["String"]["output"]>;
  merchantReference: Scalars["String"]["output"];
  method: Scalars["String"]["output"];
  transactionState: Scalars["String"]["output"];
  transactionType: Scalars["String"]["output"];
};

export type PersonalDetailInput = {
  /** Sometimes called Last Name or Surname */
  familyName?: InputMaybe<Scalars["String"]["input"]>;
  /** Intershop is not able to support this being undefined, so this is still required */
  gender?: InputMaybe<GenderEnum>;
  /** Middle name */
  middleName?: InputMaybe<Scalars["String"]["input"]>;
  /** First name */
  name: Scalars["String"]["input"];
  /** Note that the user service will attempt to repair invalid formats to make a valid phone number */
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
};

export type PersonalPromotion = {
  __typename?: "PersonalPromotion";
  customerId?: Maybe<Scalars["String"]["output"]>;
  endDate?: Maybe<Scalars["String"]["output"]>;
  packingState?: Maybe<PackingState>;
  promotionId?: Maybe<Scalars["String"]["output"]>;
  startDate?: Maybe<Scalars["String"]["output"]>;
};

export type PersonalizationPreference = {
  __typename?: "PersonalizationPreference";
  avgEcommerce?: Maybe<Scalars["Boolean"]["output"]>;
  avgFoodCoach?: Maybe<Scalars["Boolean"]["output"]>;
  avgLoyalty?: Maybe<Scalars["Boolean"]["output"]>;
  birthDate?: Maybe<Scalars["Boolean"]["output"]>;
  integrateFoodcoachWithLoyalty?: Maybe<Scalars["Boolean"]["output"]>;
  socialList?: Maybe<Scalars["Boolean"]["output"]>;
};

export type PersonalizationPreferenceInput = {
  avgEcommerce?: InputMaybe<Scalars["Boolean"]["input"]>;
  avgFoodCoach?: InputMaybe<Scalars["Boolean"]["input"]>;
  avgLoyalty?: InputMaybe<Scalars["Boolean"]["input"]>;
  birthDate?: InputMaybe<Scalars["Boolean"]["input"]>;
  integrateFoodcoachWithLoyalty?: InputMaybe<Scalars["Boolean"]["input"]>;
  socialList?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PersonalizationPreferencesInput = {
  avgEcommerce?: InputMaybe<Scalars["Boolean"]["input"]>;
  avgFoodCoach?: InputMaybe<Scalars["Boolean"]["input"]>;
  avgLoyalty?: InputMaybe<Scalars["Boolean"]["input"]>;
  birthDate?: InputMaybe<Scalars["Boolean"]["input"]>;
  integrateFoodcoachWithLoyalty?: InputMaybe<Scalars["Boolean"]["input"]>;
  socialList?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Platform = {
  browser?: InputMaybe<Browser>;
  engine?: InputMaybe<Engine>;
  origin?: InputMaybe<Scalars["String"]["input"]>;
  os?: InputMaybe<Os>;
  type?: InputMaybe<PlatformType>;
};

export type PlatformType = {
  type?: InputMaybe<Scalars["String"]["input"]>;
  vendor?: InputMaybe<Scalars["String"]["input"]>;
};

export type Preference = {
  __typename?: "Preference";
  checkout?: Maybe<CheckoutPreference>;
  communication?: Maybe<CommunicationPreference>;
  dietary?: Maybe<DietaryPreference>;
  newsletter?: Maybe<NewsletterPreference>;
  newsletterSubscription?: Maybe<NewsletterSubscriptionPreference>;
  personalization?: Maybe<PersonalizationPreference>;
  pushNotifications?: Maybe<PushNotificationPreference>;
  store?: Maybe<StorePreference>;
  termsAndConditions?: Maybe<TermsAndConditions>;
  testPanel?: Maybe<TestPanelPreference>;
};

export type Price = {
  __typename?: "Price";
  price?: Maybe<Scalars["Int"]["output"]>;
  pricePerUnit?: Maybe<PricePerUnit>;
  promoPrice?: Maybe<Scalars["Int"]["output"]>;
  sku?: Maybe<Scalars["String"]["output"]>;
};

export type PricePerUnit = {
  __typename?: "PricePerUnit";
  price?: Maybe<Scalars["Int"]["output"]>;
  quantity?: Maybe<Scalars["String"]["output"]>;
  unit?: Maybe<Unit>;
};

export type PrimaryPhoneInput = {
  countryCode?: InputMaybe<Scalars["Int"]["input"]>;
  number?: InputMaybe<Scalars["String"]["input"]>;
};

export type Product = {
  __typename?: "Product";
  /**  List of additional images with resolution 360X360.  */
  additionalImages: Array<ProductImage>;
  /**  Text regarding additives.  */
  additives?: Maybe<Scalars["String"]["output"]>;
  /**  The minimum age of the customer to buy the product. e.g. 18  */
  ageRestriction?: Maybe<Scalars["Int"]["output"]>;
  /**  The alcohol content of the product, expressed as a percentage by volume.  */
  alcoholByVolume?: Maybe<Scalars["Float"]["output"]>;
  /**  Information related to ALLERGIE or ALLERGYADVICE.  */
  allergies: Array<Allergy>;
  /** Alternatives for this product */
  alternatives?: Maybe<Array<Maybe<Product>>>;
  auctionId?: Maybe<Scalars["String"]["output"]>;
  /**
   * Returns availability information of the provided product
   * When a store and/or date are provided, the availability is based on that context
   * If not, it will be based on the reserved slot / order => homestore => default (most restrictive store, date of today)
   */
  availability?: Maybe<ProductAvailability>;
  /**  Description that contains dag Information  */
  badgeDescription?: Maybe<Scalars["String"]["output"]>;
  /**  The sticker images shown on the corners of the product images.  */
  badges: Array<ProductBadge>;
  /**  The brand associated with the product.  */
  brand?: Maybe<Scalars["String"]["output"]>;
  /**  A description or additional details about the brand.  */
  brandDescription?: Maybe<Scalars["String"]["output"]>;
  /**  Quantity of the product in retailset.  */
  bundledProductQuantity?: Maybe<Scalars["Int"]["output"]>;
  /**  canonicalUrl of the product.  */
  canonicalUrl?: Maybe<Scalars["String"]["output"]>;
  categories: Array<Category>;
  /**
   * Use rootCategory instead
   * @deprecated No longer supported
   */
  category?: Maybe<Scalars["String"]["output"]>;
  /** # product characteristics */
  characteristics?: Maybe<Characteristics>;
  /**  cross Sell Product Bloomreach Cookie Id needed for cross sells query  */
  crossSellProductBloomreachCookieId?: Maybe<Scalars["String"]["output"]>;
  /**  cross Sell Product Current Url needed for cross sells query  */
  crossSellProductCurrentUrl?: Maybe<Scalars["String"]["output"]>;
  /**  cross Sell Product Previous Url needed for cross sells query  */
  crossSellProductPreviousUrl?: Maybe<Scalars["String"]["output"]>;
  crossSells?: Maybe<Array<Maybe<Product>>>;
  customerAllergies?: Maybe<CustomerAllergies>;
  /**  Segment Information associated with the product.  */
  customerSegments: Array<Maybe<CustomerSegment>>;
  /**  parameter to be passed to the shopping context resolver in frontstore-api  */
  date?: Maybe<Scalars["String"]["output"]>;
  /**  A detailed and comprehensive description of the product.  */
  description?: Maybe<Scalars["String"]["output"]>;
  /**  Weight of the product when drained  */
  drainedWeight?: Maybe<Scalars["Int"]["output"]>;
  /**  The European Article Number (EAN) barcode assigned to the product.  */
  ean?: Maybe<Scalars["String"]["output"]>;
  /**  Any specific customer segments excluded from accessing or purchasing the product.  */
  excludedCustomerSegments?: Maybe<Scalars["String"]["output"]>;
  /**  Information about the place where the fish are caught.  */
  fishCatchArea?: Maybe<Scalars["String"]["output"]>;
  /**  Information about the origin country of fish.  */
  fishOriginFreeText?: Maybe<Scalars["String"]["output"]>;
  /**  Place of Provenance for fish related product.  */
  fishPlaceOfProvenance?: Maybe<Scalars["String"]["output"]>;
  /**  Flag if a product has a maximum order quantity. Returns true if maxAmount is not 99.  */
  hasMaxOrderQuantityRestriction?: Maybe<Scalars["Boolean"]["output"]>;
  /**  A unique identifier for the product same as sku.  */
  id?: Maybe<Scalars["String"]["output"]>;
  /**  Image of the product.  */
  image?: Maybe<Scalars["String"]["output"]>;
  /** " Images of the product with resolution 720X720.  */
  images: Array<ProductImage>;
  /**  Assortment information of the product.  */
  inAssortment?: Maybe<Scalars["Boolean"]["output"]>;
  /**  A list of the ingredients that this product contains.  */
  ingredients: Array<Scalars["String"]["output"]>;
  /** @deprecated use availability instead */
  isAvailable?: Maybe<Scalars["Boolean"]["output"]>;
  /**  In case of customerSegments specific assortment, is the current customer allowed to buy the product  */
  isExcludedForCustomer?: Maybe<Scalars["Boolean"]["output"]>;
  /**  Is this product a medicine product?  */
  isMedicine?: Maybe<Scalars["Boolean"]["output"]>;
  /** @deprecated use sponsored from search-graphql instead */
  isSponsored?: Maybe<Scalars["Boolean"]["output"]>;
  /**  Product URL.  */
  link?: Maybe<Scalars["String"]["output"]>;
  /**  Mandatory Information related to the Additives.  */
  mandatoryInformation?: Maybe<Scalars["String"]["output"]>;
  /**  The address or contact information of the product's manufacturer.  */
  manufacturer?: Maybe<ProductManufacturer>;
  /**  Disclaimer to inform a customer about a maximum order quantity.  */
  maxOrderQuantityRestrictionDisclaimer?: Maybe<Scalars["String"]["output"]>;
  /**  The net or actual content of the product, excluding any packaging or other materials.  */
  netContent?: Maybe<Scalars["Float"]["output"]>;
  /**  Is this product restricted for nix18 (18+).  */
  nixProduct: Scalars["Boolean"]["output"];
  /**  NutriScore information for the product  */
  nutriScore?: Maybe<NutriScore>;
  /**  Text regarding nutrition claims.  */
  nutritionHealthClaims?: Maybe<Scalars["String"]["output"]>;
  /**  Nutrition information in a table format.  */
  nutritionsTable?: Maybe<NutritionsTable>;
  /**  Information about the origin or source of the product.  */
  origin?: Maybe<Scalars["String"]["output"]>;
  /**  The size of the pack to be displayed.  */
  packSizeDisplay?: Maybe<Scalars["String"]["output"]>;
  /**  Parent Category of the category.  */
  parentCategory?: Maybe<Scalars["String"]["output"]>;
  parentCategoryId?: Maybe<Scalars["String"]["output"]>;
  /** The place of birth of meat related product.  */
  placeOfBirth?: Maybe<Scalars["String"]["output"]>;
  /**  The place of rearing of meat related product.  */
  placeOfRearing?: Maybe<Scalars["String"]["output"]>;
  /**  The place of slaughter of meat related product.  */
  placeOfSlaughter?: Maybe<Scalars["String"]["output"]>;
  /** Instructions or guidelines for preparing and using the product. */
  preparationAndUsage?: Maybe<Scalars["String"]["output"]>;
  /** Returns price information of the provided product */
  price?: Maybe<Price>;
  /** @deprecated use Product.primaryProductBadge and Promotion.primaryBadges instead */
  primaryBadges: Array<Badge>;
  /**  Information about primary product badges  */
  primaryProductBadges: Array<Badge>;
  productAllergens?: Maybe<ProductAllergens>;
  promotions: Array<Promotion>;
  /**  Indicates the allowed or ordered quantity of the product (Quantity options to use in new Kompas quantity picker).  */
  quantityDetails?: Maybe<Quantity>;
  /**
   * " when using kompas cards, use quantityDetails
   * @deprecated No longer supported
   */
  quantityOptions?: Maybe<Array<Maybe<Quantity>>>;
  /**  Information about how to recycle this product.  */
  recycling?: Maybe<Scalars["String"]["output"]>;
  /**  The name of the product as regulated or specified by certain standards.  */
  regulatedProductName?: Maybe<Scalars["String"]["output"]>;
  /**  Sku of replacement.  */
  replacedBy?: Maybe<Scalars["String"]["output"]>;
  /**  Indicates if the product type is retailset.  */
  retailSet: Scalars["Boolean"]["output"];
  /**  The list of retailset products associated with the product.  */
  retailSetProducts: Array<Product>;
  /**  Root level/ display category in the category hierarchy.  */
  rootCategory?: Maybe<Scalars["String"]["output"]>;
  rootCategoryId?: Maybe<Scalars["String"]["output"]>;
  /**  Safety instructions or precautions related to the product.  */
  safety?: Maybe<Scalars["String"]["output"]>;
  /**  Information about safety warning.  */
  safetyWarning?: Maybe<Scalars["String"]["output"]>;
  /**  Indicates whether the product is a sample or not.  */
  sample?: Maybe<Scalars["Boolean"]["output"]>;
  /** @deprecated use Product.secondaryProductBadges and Promotion.secondaryBadges instead */
  secondaryBadges: Array<Badge>;
  /**  Information about primary product badges  */
  secondaryProductBadges: Array<Badge>;
  /**  Number of servings.  */
  servings?: Maybe<Scalars["String"]["output"]>;
  /**  True if pack size display needs to be shown.  */
  showPPS?: Maybe<Scalars["Boolean"]["output"]>;
  /**  A unique identifier for the product.  */
  sku?: Maybe<Scalars["String"]["output"]>;
  sponsored?: Maybe<Scalars["Boolean"]["output"]>;
  /** @deprecated use availability instead */
  status?: Maybe<Scalars["String"]["output"]>;
  /**  Instructions or information about the recommended storage conditions for the product.  */
  storage?: Maybe<Scalars["String"]["output"]>;
  /**  parameter to be passed to the shopping context resolver in frontstore-api  */
  storeId?: Maybe<Scalars["String"]["output"]>;
  /**  It shows the value of packSizeDisplay if ShowPPS is true.  */
  subtitle?: Maybe<Scalars["String"]["output"]>;
  /**  Surcharges for single use plastic.  */
  surcharges: Array<Surcharge>;
  /**  The tax code related to the product.  */
  taxCode?: Maybe<Scalars["String"]["output"]>;
  /**  Information regarding third party logistics.  */
  thirdPartyLogoOtherText?: Maybe<Scalars["String"]["output"]>;
  /**  Thumbnail Image of the product.  */
  thumbnails: Array<ProductImage>;
  /**  The name or title of the product.  */
  title: Scalars["String"]["output"];
  /**  The unit to measure the product. e.g. g, pieces  */
  weightMeasure?: Maybe<Scalars["String"]["output"]>;
  weightStepQuantityMultiplier?: Maybe<Scalars["String"]["output"]>;
};

export type ProductAvailabilityArgs = {
  cutoffDate?: InputMaybe<Scalars["String"]["input"]>;
  referenceDate?: InputMaybe<Scalars["String"]["input"]>;
  storeId?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProductPriceArgs = {
  referenceDate?: InputMaybe<Scalars["String"]["input"]>;
  storeId?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProductPromotionsArgs = {
  referenceDate?: InputMaybe<Scalars["String"]["input"]>;
  storeId?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProductAllergens = {
  __typename?: "ProductAllergens";
  contains: Array<Scalars["String"]["output"]>;
  mayContain: Array<Scalars["String"]["output"]>;
};

export type ProductAvailability = {
  __typename?: "ProductAvailability";
  /** Availability code of the product */
  availability?: Maybe<Availability>;
  /** The cutoff date where the stock limit is based on */
  cutoffDate?: Maybe<Scalars["String"]["output"]>;
  /** Date time on which the product became delisted */
  delistDate?: Maybe<DateTime>;
  /** The EFC where the availabilty and stock are based on */
  efcId?: Maybe<Scalars["String"]["output"]>;
  isAvailable?: Maybe<Scalars["Boolean"]["output"]>;
  /** Customer friendly label */
  label?: Maybe<Scalars["String"]["output"]>;
  /** Reason code why the product has the returned availability code */
  reason?: Maybe<Reason>;
  /** The reference date where availability details are based on */
  referenceDate?: Maybe<Scalars["String"]["output"]>;
  /** Product SKU */
  sku?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  /** If product is nearly out of stock, the limit of how many items can be ordered will be returned */
  stockLimit?: Maybe<Scalars["Int"]["output"]>;
  /** The store where the availabilty and stock are based on */
  storeId?: Maybe<Scalars["String"]["output"]>;
};

export type ProductAvailabilityQuery = {
  /** If provided, specifies the date for stock information */
  cutoffDate?: InputMaybe<Scalars["String"]["input"]>;
  /** efcSapId of the selected EFC availability should be returned. */
  efc?: InputMaybe<Scalars["String"]["input"]>;
  /** If provided, specifies the date for availability */
  referenceDate?: InputMaybe<Scalars["String"]["input"]>;
  /** List of sku's the availability should be fetched */
  skus: Array<InputMaybe<Scalars["String"]["input"]>>;
  /**
   * Store to determine for which EFC availability should be returned if efcSapId is not provided,
   * if store is not provided of all EFCs the most restrictive availability will be returned
   */
  store?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProductBadge = {
  __typename?: "ProductBadge";
  /**  Short description about the badge.  */
  description?: Maybe<Scalars["String"]["output"]>;
  /**  The end date for the badge to be displayed.  */
  endDate?: Maybe<Scalars["String"]["output"]>;
  /**  Name of the badge.  */
  name?: Maybe<Scalars["String"]["output"]>;
  /**  URL of the image.  */
  path?: Maybe<Scalars["String"]["output"]>;
  /**  Position corner to be displayed.  */
  position?: Maybe<Scalars["String"]["output"]>;
  /**  The start date for the badge to be displayed.  */
  startDate?: Maybe<Scalars["String"]["output"]>;
  /**  Type of the badge.  */
  type?: Maybe<Scalars["String"]["output"]>;
};

export type ProductImage = {
  __typename?: "ProductImage";
  /**  Url of the Image.  */
  image?: Maybe<Scalars["String"]["output"]>;
  /**  View of the Image.  */
  type?: Maybe<Scalars["String"]["output"]>;
};

export type ProductInput = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  quantity?: InputMaybe<Scalars["Float"]["input"]>;
  sku?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProductList = {
  __typename?: "ProductList";
  /** The author of the product list(public profile) */
  author?: Maybe<AuthorProfile>;
  /** The predicate function to check if a SKU is associated with the list */
  containsSKU: Scalars["Boolean"]["output"];
  /** The list of delisted product items associated with the product list */
  delistedItems: Array<Product>;
  /** The description of the product list */
  description?: Maybe<Scalars["String"]["output"]>;
  /** The count of the followers of the product list */
  followersCount: Scalars["Int"]["output"];
  /** Indicates if the list reached its limit of products */
  hasReachedProductLimit: Scalars["Boolean"]["output"];
  /** The unique identifier of the product list */
  id: Scalars["ID"]["output"];
  /** The image of the product list */
  image?: Maybe<ProductListImage>;
  /** The follow status of the product list by the invoking customer */
  isFollowedByMe?: Maybe<Scalars["Boolean"]["output"]>;
  isFollowing?: Maybe<Scalars["Boolean"]["output"]>;
  /** Publicity status of the list */
  isPublic: Scalars["Boolean"]["output"];
  /** The list of product items associated with the product list */
  items: Array<ProductListItem>;
  /** Labels the product list associated with */
  labels: Array<Scalars["String"]["output"]>;
  /** The count of the products of the product list */
  productsCount: Scalars["Int"]["output"];
  /** The list of all skus associated with the product list(populated only for SMART lists) */
  skus: Array<Scalars["String"]["output"]>;
  /** The thumbnail of the product list */
  thumbnail?: Maybe<ProductListThumbnail>;
  /** The title of the product list */
  title: Scalars["String"]["output"];
  /** The type of the product list(supported types - CUSTOMER, FAVORITE, JUMBO, SMART) */
  type: ProductListType;
  /** The web url of the product list */
  webUrl?: Maybe<Scalars["String"]["output"]>;
};

export type ProductListContainsSkuArgs = {
  sku: Scalars["String"]["input"];
};

export type ProductListItemsArgs = {
  pagination?: InputMaybe<PaginationInput>;
};

export type ProductListAuthor = {
  __typename?: "ProductListAuthor";
  customerId?: Maybe<Scalars["ID"]["output"]>;
  image?: Maybe<Scalars["String"]["output"]>;
  isVerified: Scalars["Boolean"]["output"];
  name: Scalars["String"]["output"];
  profileId?: Maybe<Scalars["ID"]["output"]>;
};

export type ProductListImage = {
  __typename?: "ProductListImage";
  height: Scalars["Int"]["output"];
  url: Scalars["String"]["output"];
  width: Scalars["Int"]["output"];
};

export type ProductListItem = {
  __typename?: "ProductListItem";
  id: Scalars["String"]["output"];
  orderIndex: Scalars["Int"]["output"];
  product: Product;
  quantity: ProductQuantity;
  sku: Scalars["ID"]["output"];
};

export type ProductListLabel = {
  __typename?: "ProductListLabel";
  listIDs: Array<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  usages: Scalars["Int"]["output"];
};

export type ProductListLabelsQuery = {
  onlyUsed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ProductListLabelsResponse = {
  __typename?: "ProductListLabelsResponse";
  items: Array<ProductListLabel>;
  total: Scalars["Int"]["output"];
};

export type ProductListProductInput = {
  id: Scalars["String"]["input"];
};

export type ProductListThumbnail = {
  __typename?: "ProductListThumbnail";
  image?: Maybe<Scalars["String"]["output"]>;
  subtitle: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export enum ProductListType {
  CUSTOMER = "CUSTOMER",
  FAVORITE = "FAVORITE",
  JUMBO = "JUMBO",
  SMART = "SMART",
}

export type ProductListsQueryInput = {
  containingSKU?: InputMaybe<Scalars["String"]["input"]>;
  labels?: InputMaybe<Array<Scalars["String"]["input"]>>;
  listIds?: InputMaybe<Array<Scalars["String"]["input"]>>;
  type?: InputMaybe<ProductListType>;
};

export type ProductListsResponse = {
  __typename?: "ProductListsResponse";
  items: Array<ProductList>;
  total: Scalars["Int"]["output"];
};

export type ProductManufacturer = {
  __typename?: "ProductManufacturer";
  /**  The address information of the product's manufacturer.  */
  address?: Maybe<Scalars["String"]["output"]>;
  /**  A description or additional details about the brand.  */
  description?: Maybe<Scalars["String"]["output"]>;
  /**  The contact information of the product's manufacturer.  */
  phone?: Maybe<Scalars["String"]["output"]>;
  /**  The website of the product's manufacturer.  */
  website?: Maybe<Scalars["String"]["output"]>;
};

export type ProductPowerFilter = {
  __typename?: "ProductPowerFilter";
  displayName?: Maybe<Scalars["String"]["output"]>;
  navigationState?: Maybe<Scalars["String"]["output"]>;
  siteRootPath?: Maybe<Scalars["String"]["output"]>;
};

export type ProductPriceQuery = {
  /** If provided, specifies the customer segments */
  customerSegments?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** If provided, specifies the date for price */
  referenceDate?: InputMaybe<Scalars["String"]["input"]>;
  /** List of sku's the price should be fetched */
  skus: Array<InputMaybe<Scalars["String"]["input"]>>;
  /** Store to determine for which EFC price should be returned, if not provided of all EFCs the most restrictive price will be returned */
  store?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProductQuantity = {
  __typename?: "ProductQuantity";
  amount: Scalars["Int"]["output"];
  unit: Scalars["String"]["output"];
};

export type ProductQuantityInput = {
  amount: Scalars["Int"]["input"];
  unit: Scalars["String"]["input"];
};

export type ProductSearchInput = {
  bloomreachCookieId?: InputMaybe<Scalars["String"]["input"]>;
  currentUrl?: InputMaybe<Scalars["String"]["input"]>;
  exclusions?: InputMaybe<Array<Scalars["String"]["input"]>>;
  filters?: InputMaybe<Array<SearchInputFilter>>;
  friendlyUrl?: InputMaybe<Scalars["String"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offSet?: InputMaybe<Scalars["Int"]["input"]>;
  previousUrl?: InputMaybe<Scalars["String"]["input"]>;
  searchTerms?: InputMaybe<Scalars["String"]["input"]>;
  searchType: Scalars["String"]["input"];
  segments?: InputMaybe<Array<Scalars["String"]["input"]>>;
  skuFilter?: InputMaybe<Array<Scalars["String"]["input"]>>;
  sort?: InputMaybe<SortOption>;
};

export type ProductSearchResult = SearchContext & {
  __typename?: "ProductSearchResult";
  breadcrumbs: Array<Maybe<Breadcrumb>>;
  categoryId?: Maybe<Scalars["String"]["output"]>;
  categoryTiles?: Maybe<Array<CategoryTile>>;
  count: Scalars["Int"]["output"];
  facets: Array<FacetGroup>;
  pageHeader: SearchResultPageHeader;
  products: Array<Product>;
  redirectUrl?: Maybe<Scalars["String"]["output"]>;
  removeAllAction?: Maybe<SearchResultRemoveAllAction>;
  selectedFacets: Array<Maybe<SelectedFacetGroup>>;
  seo: SearchResultSeo;
  /** @deprecated use getCategoryShelfText query instead */
  shelfDescription?: Maybe<Scalars["String"]["output"]>;
  socialLists?: Maybe<Array<SocialList>>;
  sortOptions?: Maybe<Array<SearchResultSortOption>>;
  start: Scalars["Int"]["output"];
  textMessage?: Maybe<TextMessage>;
};

export enum ProductUnit {
  GRAMS = "GRAMS",
  PIECES = "PIECES",
}

export type Profile = {
  __typename?: "Profile";
  avgProfiling?: Maybe<AvgProfiling>;
  birthDate?: Maybe<Scalars["String"]["output"]>;
  buyingStampsPreference?: Maybe<Scalars["String"]["output"]>;
  checkoutPreferences?: Maybe<CheckoutPreferences>;
  customerId?: Maybe<Scalars["String"]["output"]>;
  digitalStamps?: Maybe<DigitalStampsPreferences>;
  email?: Maybe<Scalars["String"]["output"]>;
  homeAddress?: Maybe<LoyaltyAddress>;
  loyaltyCard?: Maybe<LoyaltyCardObj>;
  name?: Maybe<LoyaltyName>;
  primaryPhone?: Maybe<LoyaltyTelephone>;
  storePreferences?: Maybe<StorePreferences>;
  termsAndConditions?: Maybe<TermsAndConditionsLoyalty>;
  type?: Maybe<Scalars["String"]["output"]>;
};

export type Promotion = {
  __typename?: "Promotion";
  active?: Maybe<Scalars["Boolean"]["output"]>;
  attachments?: Maybe<Array<Maybe<PromotionAttachment>>>;
  disclaimer?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated use start, end & durationTexts instead */
  duration?: Maybe<PromotionDuration>;
  durationTexts?: Maybe<PromotionDurationTexts>;
  end?: Maybe<PromotionDateTime>;
  /** @deprecated use end instead */
  endDate?: Maybe<Scalars["String"]["output"]>;
  group?: Maybe<Scalars["String"]["output"]>;
  hidden?: Maybe<Scalars["Boolean"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  image?: Maybe<Scalars["String"]["output"]>;
  isHeavy?: Maybe<Scalars["Boolean"]["output"]>;
  isKiesAndMix?: Maybe<Scalars["Boolean"]["output"]>;
  isSponsored?: Maybe<Scalars["Boolean"]["output"]>;
  isStackableDealback?: Maybe<Scalars["Boolean"]["output"]>;
  offlineText?: Maybe<Scalars["String"]["output"]>;
  primaryBadges?: Maybe<Array<Maybe<PromotionBadge>>>;
  products?: Maybe<Array<Maybe<Product>>>;
  secondaryBadges?: Maybe<Array<Maybe<PromotionBadge>>>;
  skus?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  start?: Maybe<PromotionDateTime>;
  /** @deprecated use start instead */
  startDate?: Maybe<Scalars["String"]["output"]>;
  stores?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  subtitle?: Maybe<Scalars["String"]["output"]>;
  tags?: Maybe<Array<Maybe<PromotionTag>>>;
  title?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
  uuid?: Maybe<Scalars["String"]["output"]>;
};

export type PromotionAttachment = {
  __typename?: "PromotionAttachment";
  path?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
};

export type PromotionBadge = {
  __typename?: "PromotionBadge";
  alt?: Maybe<Scalars["String"]["output"]>;
  image?: Maybe<Scalars["String"]["output"]>;
};

export type PromotionCategoryType = {
  __typename?: "PromotionCategoryType";
  /** @deprecated Will be removed after Carota deployment */
  categoryPath?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated Will be removed after Carota deployment */
  imageUrl?: Maybe<Scalars["String"]["output"]>;
  promotions?: Maybe<Array<Maybe<Promotion>>>;
  /** @deprecated Will be removed after Carota deployment */
  subtitle?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type PromotionDateTime = {
  __typename?: "PromotionDateTime";
  array?: Maybe<Array<Maybe<Scalars["Int"]["output"]>>>;
  date?: Maybe<Scalars["Int"]["output"]>;
  day?: Maybe<Scalars["String"]["output"]>;
  dayShort?: Maybe<Scalars["String"]["output"]>;
  hour?: Maybe<Scalars["String"]["output"]>;
  isToday?: Maybe<Scalars["Boolean"]["output"]>;
  iso?: Maybe<Scalars["String"]["output"]>;
  minute?: Maybe<Scalars["String"]["output"]>;
  month?: Maybe<Scalars["String"]["output"]>;
  monthNumber?: Maybe<Scalars["Int"]["output"]>;
  monthShort?: Maybe<Scalars["String"]["output"]>;
  relative?: Maybe<Scalars["String"]["output"]>;
  second?: Maybe<Scalars["String"]["output"]>;
  time?: Maybe<Scalars["String"]["output"]>;
  weekday?: Maybe<Scalars["String"]["output"]>;
  year?: Maybe<Scalars["Int"]["output"]>;
};

export type PromotionDetails = {
  __typename?: "PromotionDetails";
  companyCode?: Maybe<Scalars["String"]["output"]>;
  howItWorks?: Maybe<PromotionDetailsHowItWorks>;
  longDescription?: Maybe<Scalars["String"]["output"]>;
  pricingInformation?: Maybe<Scalars["String"]["output"]>;
  productFeatures?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  products?: Maybe<Array<Maybe<LoyaltyProduct>>>;
  tag?: Maybe<Scalars["String"]["output"]>;
  termsAndConditions?: Maybe<PromotionDetailsTermsAndConditions>;
  websiteUrl?: Maybe<Scalars["String"]["output"]>;
};

export type PromotionDetailsHowItWorks = {
  __typename?: "PromotionDetailsHowItWorks";
  steps?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
};

export type PromotionDetailsTermsAndConditions = {
  __typename?: "PromotionDetailsTermsAndConditions";
  terms?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
};

/**  Deprecated and will be removed soon */
export type PromotionDuration = {
  __typename?: "PromotionDuration";
  /** @deprecated use promotion.end instead */
  end?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated use promotion.durationTexts instead */
  formatted?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated use promotion.durationTexts instead */
  pdpFormatted?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated use promotion.durationTexts instead */
  pdpGetUntil?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated use promotion.start instead */
  start?: Maybe<Scalars["String"]["output"]>;
};

export type PromotionDurationTexts = {
  __typename?: "PromotionDurationTexts";
  description?: Maybe<Scalars["String"]["output"]>;
  metaDescription?: Maybe<Scalars["String"]["output"]>;
  shortTitle?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type PromotionLocation = {
  __typename?: "PromotionLocation";
  city?: Maybe<Scalars["String"]["output"]>;
};

export type PromotionRuntime = {
  __typename?: "PromotionRuntime";
  active?: Maybe<Scalars["Boolean"]["output"]>;
  announceText?: Maybe<Scalars["String"]["output"]>;
  empty?: Maybe<Scalars["Boolean"]["output"]>;
  end?: Maybe<PromotionDateTime>;
  id?: Maybe<Scalars["String"]["output"]>;
  sections?: Maybe<Array<Maybe<PromotionSection>>>;
  shortTitle?: Maybe<Scalars["String"]["output"]>;
  start?: Maybe<PromotionDateTime>;
  subtitle?: Maybe<Scalars["String"]["output"]>;
  subtitleHighlightSection?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated Will be removed after Carota deployment */
  titleHighlightSection?: Maybe<Scalars["String"]["output"]>;
};

export enum PromotionScope {
  FREE_GIFT = "FREE_GIFT",
  ORDER = "ORDER",
  PRODUCT = "PRODUCT",
  SHIPPING = "SHIPPING",
  UNKNOWN = "UNKNOWN",
}

export type PromotionSection = {
  __typename?: "PromotionSection";
  categories?: Maybe<Array<Maybe<PromotionCategoryType>>>;
  id?: Maybe<Scalars["String"]["output"]>;
  promotions?: Maybe<Array<Maybe<Promotion>>>;
  subtitle?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export enum PromotionServiceCompletionType {
  QUANTITY = "QUANTITY",
  VALUE = "VALUE",
}

export type PromotionServiceItemInput = {
  quantity: Scalars["Int"]["input"];
  sku: Scalars["String"]["input"];
  unitPrice: Scalars["Int"]["input"];
};

export type PromotionServicePromotionCompletionInfo = {
  __typename?: "PromotionServicePromotionCompletionInfo";
  completedSubtitle?: Maybe<Scalars["String"]["output"]>;
  completedTitle?: Maybe<Scalars["String"]["output"]>;
  goal?: Maybe<Scalars["String"]["output"]>;
  productsInBasket?: Maybe<Array<Maybe<Product>>>;
  progress?: Maybe<Array<Maybe<Product>>>;
  promotionId?: Maybe<Scalars["String"]["output"]>;
  remainingQuantity?: Maybe<Scalars["Int"]["output"]>;
  remainingValue?: Maybe<Scalars["Int"]["output"]>;
  requiredQuantity?: Maybe<Scalars["Int"]["output"]>;
  requiredValue?: Maybe<Scalars["Int"]["output"]>;
  skusInBasket?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  status?: Maybe<PromotionServicePromotionCompletionStatus>;
  subtitle?: Maybe<Scalars["String"]["output"]>;
  timesPromotionFulfilled?: Maybe<Scalars["Int"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<PromotionServiceCompletionType>;
};

export enum PromotionServicePromotionCompletionStatus {
  COMPLETED = "COMPLETED",
  NOT_STARTED = "NOT_STARTED",
  PARTIALLY_COMPLETED = "PARTIALLY_COMPLETED",
}

export type PromotionTab = {
  __typename?: "PromotionTab";
  id: Scalars["String"]["output"];
  runtimes?: Maybe<Array<Maybe<PromotionRuntime>>>;
  shortTitle?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated Will be removed after Carota deployment */
  title?: Maybe<Scalars["String"]["output"]>;
};

export type PromotionTag = {
  __typename?: "PromotionTag";
  inverse?: Maybe<Scalars["Boolean"]["output"]>;
  text?: Maybe<Scalars["String"]["output"]>;
};

export type PushNotificationPreference = {
  __typename?: "PushNotificationPreference";
  commercial?: Maybe<Scalars["Boolean"]["output"]>;
  sms?: Maybe<Scalars["Boolean"]["output"]>;
  transactional?: Maybe<Scalars["Boolean"]["output"]>;
};

export type PushNotificationPreferenceInput = {
  commercial?: InputMaybe<Scalars["Boolean"]["input"]>;
  sms?: InputMaybe<Scalars["Boolean"]["input"]>;
  transactional?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PushNotificationPreferencesInput = {
  commercial?: InputMaybe<Scalars["Boolean"]["input"]>;
  sms?: InputMaybe<Scalars["Boolean"]["input"]>;
  transactional?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Quantity = {
  __typename?: "Quantity";
  /**  Minimum quantity allowed to be added into a cart.  */
  defaultAmount?: Maybe<Scalars["Float"]["output"]>;
  /**  Maximum quantity allowed to be added into a cart.  */
  maxAmount?: Maybe<Scalars["Float"]["output"]>;
  /**  Minimum quantity allowed to be added into a cart.  */
  minAmount?: Maybe<Scalars["Float"]["output"]>;
  /**  The order step quantity in which the product can be ordered.  */
  stepAmount?: Maybe<Scalars["Float"]["output"]>;
  /**
   *  We only have PIECES as unit, will be removed in future.
   * @deprecated No longer supported
   */
  unit?: Maybe<Scalars["String"]["output"]>;
};

export type QuantityOfProductRequired = {
  __typename?: "QuantityOfProductRequired";
  amount?: Maybe<Scalars["Float"]["output"]>;
  unit?: Maybe<Scalars["String"]["output"]>;
};

/**  The Root Query for the application */
export type Query = {
  __typename?: "Query";
  /**
   * Find a real address that match the given postal code.  Webservices.nl decides if the address is valid or not\
   * Possible error states that can be returned:
   * + NOT_FOUND: Address was not found in webservices.nl
   * + TECHNICAL_ERROR: Any unexpected problem. eg. API timeout
   */
  address: Address;
  /** Retrieve alternatives per product by passing in multiple products as input */
  alternatives?: Maybe<Array<Maybe<Alternative>>>;
  author?: Maybe<AuthorProfile>;
  authorBySlug?: Maybe<AuthorProfile>;
  authors?: Maybe<Array<AuthorProfile>>;
  basket?: Maybe<BasketResult>;
  basketType: BasketTypeQueryResult;
  /** The slot that is currently selected as the slot to collect or deliver the groceries */
  bookedSlot?: Maybe<Slot>;
  calculate?: Maybe<CalculateResult>;
  calculateOrder?: Maybe<CalculationResult>;
  calculatePromotionCompletion?: Maybe<PromotionServicePromotionCompletionInfo>;
  /** @deprecated Use new 'calculateOrder' query which supports MoneyType */
  calculatedPrice?: Maybe<CalculatedPrice>;
  categoryMapping?: Maybe<CategoryMapping>;
  /** Retrieve customer from CDM based on the provided token */
  cdmCustomer?: Maybe<CdmCustomer>;
  chatbotLongPollingMessages?: Maybe<LongPollingMessages>;
  checkPostalCode: CheckPostalCodeResponse;
  checkoutCheckAddress: Array<CheckoutCheckAddressResult>;
  checkoutDeliveryPeriods: Array<CheckoutDeliveryPeriodDay>;
  checkoutOrderDeliveryPeriods: Array<CheckoutDeliveryPeriodDay>;
  checkoutOrderSession: CheckoutOrderSession;
  checkoutSession?: Maybe<CheckoutSession>;
  checkoutStores: Array<CheckoutStore>;
  /** Check if the B2B user is allowed to order by checking the creditworthiness */
  creditWorthiness?: Maybe<CreditWorthiness>;
  crossSellProducts?: Maybe<CrossSellProducts>;
  /** Retrieve customer for the CDM user set by the public-gateway header */
  customer?: Maybe<Customer>;
  deposits: Array<Deposit>;
  detectChatbotMessageIntent?: Maybe<IntentResponse>;
  earlierBought?: Maybe<Array<Maybe<EarlierBoughtLine>>>;
  /**
   * Retrieve all available Establishment details, searching by id which is companyExternalId_establishmentId or by companyExternalId\
   * Possible error states that can be returned:
   * + NOT_FOUND: No results were found for the search criteria
   * + VALIDATION_ERROR: Search criteria failed to validate
   * + TECHNICAL_ERROR: Any unexpected problem. eg. API timeout
   */
  establishmentDetails?: Maybe<EstablishmentDetails>;
  /**
   * Search for Establishments which are linked to a Company\
   * Possible error states that can be returned:
   * + NOT_FOUND: No results were found for the search criteria
   * + VALIDATION_ERROR: Search criteria failed to validate
   * + TECHNICAL_ERROR: Any unexpected problem. eg. API timeout
   */
  establishments: Array<Maybe<Establishment>>;
  eta: Eta;
  favoriteRecipesList?: Maybe<Array<Maybe<FavoriteRecipesListItem>>>;
  followingLists: ProductListsResponse;
  /** getUserState(customerId: String!): JSON */
  getBalance?: Maybe<LoyaltyBalance>;
  getBuyingStampsBalance?: Maybe<BuyingStampsBalance>;
  getBuyingStampsCampaign?: Maybe<BuyingStampsCampaign>;
  getCampaign?: Maybe<Campaign>;
  getCampaigns: Array<Maybe<Campaign>>;
  getCategoryShelfText?: Maybe<ShelfTextResult>;
  getCrossSells?: Maybe<Array<Product>>;
  getCustomerPromotions?: Maybe<Array<Maybe<LoyaltyPromotion>>>;
  getDigitalStamps?: Maybe<CustomerDigitalStamps>;
  getDisplayAdsCategories?: Maybe<DisplayAdsCategories>;
  getDisplayAdsPlacement?: Maybe<DisplayAdsPlacement>;
  getDisplayAdsSearchterm?: Maybe<DisplayAdsSearchterm>;
  getHomeScreenOffers?: Maybe<HomeScreenOffers>;
  getLatestRedeemOffers?: Maybe<Array<Maybe<LoyaltyPromotion>>>;
  /** Gets the master name that is linked to the sub registration reference given */
  getMasterBySubRegistrationRef: Scalars["String"]["output"];
  getNumberOfStamps: Scalars["Int"]["output"];
  getOfferDetails?: Maybe<LoyaltyPromotion>;
  getPaymentLink?: Maybe<PaymentLink>;
  getPersonalRedeemOffers?: Maybe<Array<Maybe<LoyaltyPromotion>>>;
  getProfile?: Maybe<Profile>;
  getRedeemOffers?: Maybe<Array<Maybe<LoyaltyPromotion>>>;
  getRedeemOffersWithCarousel?: Maybe<RedeemOffers>;
  getSavingOffers?: Maybe<Array<Maybe<LoyaltyPromotion>>>;
  getUserState?: Maybe<UserState>;
  getVoucherDetails?: Maybe<LoyaltyVoucherDetails>;
  getVouchers?: Maybe<Array<LoyaltyVoucher>>;
  isUserAuthenticated?: Maybe<Scalars["Boolean"]["output"]>;
  listFollowStatus: ListFollowStatusResponse;
  listsFollowStatus: Array<ListFollowStatusResponse>;
  liveSearch?: Maybe<LiveSearch>;
  /**
   * Gets or creates the subRegistrationReference (uuid) for the master currently logged in.
   * If there is no subRegistrationReference available yet for the master id one will be created.
   */
  masterSubRegistrationRef: Scalars["String"]["output"];
  openOrders?: Maybe<Array<Maybe<OpenOrder>>>;
  order?: Maybe<Order>;
  orderCount: OrderCount;
  /** @deprecated Use new 'order' query and new 'order' model with MoneyType */
  orderServiceOrder?: Maybe<OrderServiceOrder>;
  orders: OrdersResponse;
  preReservedDeliveryPeriods: Array<ReservedCheckoutDeliveryPeriod>;
  /** All pre-reserved slots for a customer. This only is available for B2B customers */
  preReservedSlots?: Maybe<Array<Maybe<Slot>>>;
  product?: Maybe<Product>;
  /** Returns availability information of the provided products */
  productAvailability?: Maybe<Array<Maybe<ProductAvailability>>>;
  productList?: Maybe<Array<Maybe<Product>>>;
  productListLabels: Array<Scalars["String"]["output"]>;
  productLists?: Maybe<ProductListsResponse>;
  /** Returns price information of the provided products */
  productPrice?: Maybe<Array<Maybe<Price>>>;
  products?: Maybe<Array<Maybe<Product>>>;
  promotion?: Maybe<Promotion>;
  promotionTab?: Maybe<PromotionTab>;
  promotionTabs?: Maybe<Array<Maybe<PromotionTab>>>;
  promotions?: Maybe<Array<Maybe<Promotion>>>;
  rating?: Maybe<Rating>;
  recipe?: Maybe<Recipe>;
  recipeLists?: Maybe<Array<Maybe<RecipeList>>>;
  recipeResult?: Maybe<RecipeResult>;
  recipes?: Maybe<Array<Maybe<Recipe>>>;
  remindMe?: Maybe<Array<Maybe<Product>>>;
  reservedDeliveryPeriods: ReservedCheckoutDeliveryPeriods;
  /** @deprecated use bookedSlot instead */
  reservedSlot?: Maybe<Slot>;
  /** @deprecated use bookedSlot or preReservedSlots instead */
  reservedSlots?: Maybe<Array<Maybe<Slot>>>;
  returnedDeposits: ReturnedDepositsResponse;
  searchProducts: ProductSearchResult;
  searchRecipes: RecipeSearchResult;
  searchRedeemOffers?: Maybe<Array<Maybe<LoyaltyPromotion>>>;
  searchResult?: Maybe<SearchResult>;
  searchSuggestions?: Maybe<SearchSuggestions>;
  smulwebList?: Maybe<Array<Maybe<Product>>>;
  /** @deprecated Use new 'storeV2' query and new 'StoreV2' model */
  store?: Maybe<Store>;
  storeV2?: Maybe<StoreV2>;
  /** Retrieve sub customer from CDM by master */
  subCustomerByMaster?: Maybe<CdmCustomer>;
};

/**  The Root Query for the application */
export type QueryAddressArgs = {
  houseNumber: Scalars["Int"]["input"];
  postalCode: Scalars["String"]["input"];
};

/**  The Root Query for the application */
export type QueryAlternativesArgs = {
  alternativesInput?: InputMaybe<Array<InputMaybe<AlternativesInput>>>;
};

/**  The Root Query for the application */
export type QueryAuthorArgs = {
  id: Scalars["ID"]["input"];
};

/**  The Root Query for the application */
export type QueryAuthorBySlugArgs = {
  slug: Scalars["String"]["input"];
};

/**  The Root Query for the application */
export type QueryAuthorsArgs = {
  input?: InputMaybe<FindAuthorsInput>;
};

/**  The Root Query for the application */
export type QueryBasketArgs = {
  type?: InputMaybe<BasketType>;
};

/**  The Root Query for the application */
export type QueryCalculateArgs = {
  request?: InputMaybe<CalculateInput>;
};

/**  The Root Query for the application */
export type QueryCalculateOrderArgs = {
  request?: InputMaybe<CalculationInput>;
};

/**  The Root Query for the application */
export type QueryCalculatePromotionCompletionArgs = {
  basketItems?: InputMaybe<Array<InputMaybe<PromotionServiceItemInput>>>;
  promotionId: Scalars["String"]["input"];
};

/**  The Root Query for the application */
export type QueryCalculatedPriceArgs = {
  input: CalculatedPriceInput;
};

/**  The Root Query for the application */
export type QueryCdmCustomerArgs = {
  customerId?: InputMaybe<Scalars["String"]["input"]>;
};

/**  The Root Query for the application */
export type QueryChatbotLongPollingMessagesArgs = {
  ack: Scalars["Int"]["input"];
  affinityToken: Scalars["String"]["input"];
  chatKey: Scalars["String"]["input"];
};

/**  The Root Query for the application */
export type QueryCheckPostalCodeArgs = {
  postalCode: Scalars["String"]["input"];
};

/**  The Root Query for the application */
export type QueryCheckoutCheckAddressArgs = {
  input: CheckoutCheckAddressInput;
};

/**  The Root Query for the application */
export type QueryCheckoutOrderDeliveryPeriodsArgs = {
  orderId: Scalars["Float"]["input"];
};

/**  The Root Query for the application */
export type QueryCheckoutOrderSessionArgs = {
  orderId: Scalars["Float"]["input"];
};

/**  The Root Query for the application */
export type QueryCheckoutStoresArgs = {
  input?: InputMaybe<CheckoutStoresInput>;
};

/**  The Root Query for the application */
export type QueryCreditWorthinessArgs = {
  amount: Scalars["Int"]["input"];
};

/**  The Root Query for the application */
export type QueryCrossSellProductsArgs = {
  crossSellIds?: InputMaybe<Scalars["String"]["input"]>;
};

/**  The Root Query for the application */
export type QueryDetectChatbotMessageIntentArgs = {
  intentRequest: IntentRequest;
};

/**  The Root Query for the application */
export type QueryEarlierBoughtArgs = {
  page: Scalars["Int"]["input"];
  pageSize: Scalars["Int"]["input"];
  sortType?: InputMaybe<Scalars["String"]["input"]>;
  userID?: InputMaybe<Scalars["String"]["input"]>;
};

/**  The Root Query for the application */
export type QueryEstablishmentDetailsArgs = {
  companyId?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
};

/**  The Root Query for the application */
export type QueryEstablishmentsArgs = {
  companyId?: InputMaybe<Scalars["String"]["input"]>;
  companyName?: InputMaybe<Scalars["String"]["input"]>;
};

/**  The Root Query for the application */
export type QueryEtaArgs = {
  orderId: Scalars["String"]["input"];
};

/**  The Root Query for the application */
export type QueryFollowingListsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

/**  The Root Query for the application */
export type QueryGetCampaignArgs = {
  id: Scalars["String"]["input"];
};

/**  The Root Query for the application */
export type QueryGetCampaignsArgs = {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  campaignType?: InputMaybe<Scalars["String"]["input"]>;
  storeId?: InputMaybe<Scalars["String"]["input"]>;
};

/**  The Root Query for the application */
export type QueryGetCategoryShelfTextArgs = {
  input: ShelfTextInput;
};

/**  The Root Query for the application */
export type QueryGetCrossSellsArgs = {
  input: CrossSellsInput;
};

/**  The Root Query for the application */
export type QueryGetDisplayAdsCategoriesArgs = {
  input: DisplayAdsCategoriesInput;
};

/**  The Root Query for the application */
export type QueryGetDisplayAdsPlacementArgs = {
  input: DisplayAdsPlacementInput;
};

/**  The Root Query for the application */
export type QueryGetDisplayAdsSearchtermArgs = {
  input: DisplayAdsSearchtermInput;
};

/**  The Root Query for the application */
export type QueryGetMasterBySubRegistrationRefArgs = {
  masterSubRegistrationRef?: InputMaybe<Scalars["String"]["input"]>;
};

/**  The Root Query for the application */
export type QueryGetNumberOfStampsArgs = {
  campaignId: Scalars["String"]["input"];
};

/**  The Root Query for the application */
export type QueryGetOfferDetailsArgs = {
  promotionId?: InputMaybe<Scalars["String"]["input"]>;
};

/**  The Root Query for the application */
export type QueryGetPaymentLinkArgs = {
  returnUrl: Scalars["String"]["input"];
  subscriptionKey: Scalars["String"]["input"];
};

/**  The Root Query for the application */
export type QueryGetUserStateArgs = {
  customerId?: InputMaybe<Scalars["String"]["input"]>;
};

/**  The Root Query for the application */
export type QueryGetVoucherDetailsArgs = {
  transactionUuid?: InputMaybe<Scalars["String"]["input"]>;
};

/**  The Root Query for the application */
export type QueryListFollowStatusArgs = {
  listId: Scalars["ID"]["input"];
};

/**  The Root Query for the application */
export type QueryListsFollowStatusArgs = {
  listIds: Array<Scalars["ID"]["input"]>;
};

/**  The Root Query for the application */
export type QueryLiveSearchArgs = {
  searchTerm?: InputMaybe<Scalars["String"]["input"]>;
};

/**  The Root Query for the application */
export type QueryOrderArgs = {
  options?: InputMaybe<OrderOptions>;
  orderId: Scalars["Float"]["input"];
};

/**  The Root Query for the application */
export type QueryOrderServiceOrderArgs = {
  options?: InputMaybe<OrderServiceOrderOptions>;
  orderId: Scalars["Float"]["input"];
};

/**  The Root Query for the application */
export type QueryOrdersArgs = {
  input?: InputMaybe<OrdersInput>;
};

/**  The Root Query for the application */
export type QueryPreReservedSlotsArgs = {
  withBooked?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/**  The Root Query for the application */
export type QueryProductArgs = {
  date?: InputMaybe<Scalars["String"]["input"]>;
  productSearchInput?: InputMaybe<CrossSellProductSearchInput>;
  sku: Scalars["String"]["input"];
  storeId?: InputMaybe<Scalars["String"]["input"]>;
};

/**  The Root Query for the application */
export type QueryProductAvailabilityArgs = {
  query?: InputMaybe<ProductAvailabilityQuery>;
};

/**  The Root Query for the application */
export type QueryProductListArgs = {
  date?: InputMaybe<Scalars["String"]["input"]>;
  skus: Array<InputMaybe<Scalars["String"]["input"]>>;
  storeId?: InputMaybe<Scalars["String"]["input"]>;
};

/**  The Root Query for the application */
export type QueryProductListsArgs = {
  pagination?: InputMaybe<PaginationInput>;
  query: ProductListsQueryInput;
  sort?: InputMaybe<Scalars["String"]["input"]>;
};

/**  The Root Query for the application */
export type QueryProductPriceArgs = {
  query?: InputMaybe<ProductPriceQuery>;
};

/**  The Root Query for the application */
export type QueryProductsArgs = {
  skus: Array<Scalars["String"]["input"]>;
};

/**  The Root Query for the application */
export type QueryPromotionArgs = {
  id: Scalars["String"]["input"];
};

/**  The Root Query for the application */
export type QueryPromotionTabArgs = {
  id: Scalars["String"]["input"];
  segments?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/**  The Root Query for the application */
export type QueryPromotionTabsArgs = {
  segments?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/**  The Root Query for the application */
export type QueryPromotionsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  referenceDate?: InputMaybe<Scalars["String"]["input"]>;
  segments?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  skus?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/**  The Root Query for the application */
export type QueryRatingArgs = {
  entityId: Scalars["String"]["input"];
  entityType: Scalars["String"]["input"];
};

/**  The Root Query for the application */
export type QueryRecipeArgs = {
  id: Scalars["String"]["input"];
  portions?: InputMaybe<Scalars["Int"]["input"]>;
};

/**  The Root Query for the application */
export type QueryRecipeListsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

/**  The Root Query for the application */
export type QueryRecipeResultArgs = {
  categoryUrl?: InputMaybe<Scalars["String"]["input"]>;
  filters?: InputMaybe<Scalars["String"]["input"]>;
  offSet?: InputMaybe<Scalars["Int"]["input"]>;
  pageSize?: InputMaybe<Scalars["Int"]["input"]>;
  searchTerms?: InputMaybe<Scalars["String"]["input"]>;
  showMoreIds?: InputMaybe<Scalars["String"]["input"]>;
};

/**  The Root Query for the application */
export type QueryRecipesArgs = {
  filters?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  searchTerms?: InputMaybe<Scalars["String"]["input"]>;
};

/**  The Root Query for the application */
export type QueryRemindMeArgs = {
  skus?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/**  The Root Query for the application */
export type QueryReturnedDepositsArgs = {
  hash?: InputMaybe<Scalars["String"]["input"]>;
  orderId: Scalars["String"]["input"];
};

/**  The Root Query for the application */
export type QuerySearchProductsArgs = {
  input: ProductSearchInput;
};

/**  The Root Query for the application */
export type QuerySearchRecipesArgs = {
  input: RecipeSearchInput;
};

/**  The Root Query for the application */
export type QuerySearchRedeemOffersArgs = {
  searchQuery?: InputMaybe<Scalars["String"]["input"]>;
};

/**  The Root Query for the application */
export type QuerySearchResultArgs = {
  categoryUrl?: InputMaybe<Scalars["String"]["input"]>;
  exclusions?: InputMaybe<Scalars["String"]["input"]>;
  filters?: InputMaybe<Scalars["String"]["input"]>;
  offSet?: InputMaybe<Scalars["Int"]["input"]>;
  pageSize?: InputMaybe<Scalars["Int"]["input"]>;
  searchTerms?: InputMaybe<Scalars["String"]["input"]>;
  showMoreIds?: InputMaybe<Scalars["String"]["input"]>;
  sortOption?: InputMaybe<Scalars["String"]["input"]>;
  userSegments?: InputMaybe<Scalars["String"]["input"]>;
};

/**  The Root Query for the application */
export type QuerySearchSuggestionsArgs = {
  input?: InputMaybe<SearchSuggestionsInput>;
};

/**  The Root Query for the application */
export type QuerySmulwebListArgs = {
  date?: InputMaybe<Scalars["String"]["input"]>;
  recipeId?: InputMaybe<Scalars["String"]["input"]>;
  storeId?: InputMaybe<Scalars["String"]["input"]>;
};

/**  The Root Query for the application */
export type QueryStoreArgs = {
  storeId: Scalars["String"]["input"];
};

/**  The Root Query for the application */
export type QueryStoreV2Args = {
  storeId: Scalars["String"]["input"];
};

/**  The Root Query for the application */
export type QuerySubCustomerByMasterArgs = {
  masterId?: InputMaybe<Scalars["String"]["input"]>;
  subId?: InputMaybe<Scalars["String"]["input"]>;
};

export type Rating = {
  __typename?: "Rating";
  /** Amount of ratings that were given to entity */
  count?: Maybe<Scalars["Int"]["output"]>;
  /** Rating given to entity */
  value?: Maybe<Scalars["Float"]["output"]>;
};

export enum Reason {
  BLACKLISTED = "BLACKLISTED",
  BOYCOT = "BOYCOT",
  DELISTED = "DELISTED",
  INCOMING = "INCOMING",
  LONG_LASTING_DELIVERY_ISSUE = "LONG_LASTING_DELIVERY_ISSUE",
  NOT_FOR_ONLINE = "NOT_FOR_ONLINE",
  ON_HOLD = "ON_HOLD",
  OUT_OF_STOCK = "OUT_OF_STOCK",
  RECALL = "RECALL",
  RECALL_INCOMING = "RECALL_INCOMING",
  RUNNING_OUT = "RUNNING_OUT",
  SEASONAL_SOLD_OUT = "SEASONAL_SOLD_OUT",
  UNKNOWN = "UNKNOWN",
}

export type Recipe = {
  __typename?: "Recipe";
  /** The author of the recipe */
  author?: Maybe<RecipeAuthor>;
  /** The amount of calories per portion */
  calories?: Maybe<Scalars["Int"]["output"]>;
  /** A tip for cooking the recipe, e.g 'You can also grill these tortillas on the BBQ instead of putting it in the oven' */
  cookingTip?: Maybe<Scalars["String"]["output"]>;
  /** The kind of course of the recipe, e.g 'main-course', etc */
  course?: Maybe<Scalars["String"]["output"]>;
  /** The rating given by the customer */
  customerRating?: Maybe<Rating>;
  /** The description of the recipe */
  description?: Maybe<Scalars["String"]["output"]>;
  /** Type of dish */
  dishType?: Maybe<Scalars["String"]["output"]>;
  /** Whether this recipe is in a favourite list */
  favourited?: Maybe<Scalars["Boolean"]["output"]>;
  /** The image URL including the static domain where the assets are hosted */
  fullImageUrl?: Maybe<Scalars["String"]["output"]>;
  /** The id of the recipe */
  id?: Maybe<Scalars["String"]["output"]>;
  /**
   * The image URI excluding the static domain where the images are hosted
   * @deprecated use fullImageUrl instead
   */
  image?: Maybe<Scalars["String"]["output"]>;
  /** The ingredients required to make the recipe */
  ingredients?: Maybe<Array<Maybe<RecipeIngredient>>>;
  /** The instructions for the recipe */
  instructions?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  /** Determines if the recipe is a favorite of the customer */
  isInFavorite?: Maybe<Scalars["Boolean"]["output"]>;
  /** Kitchen utensils needed for the recipe */
  kitchenUtensils?: Maybe<Array<RecipeKitchenUtensils>>;
  /** Labels that contain a link to a page with recipes that are relevant to the current recipe */
  labels?: Maybe<Array<RecipeLabel>>;
  /** The link to the detail page of the recipe */
  link?: Maybe<Scalars["String"]["output"]>;
  /** How many ingredients are required for this recipe */
  numberOfIngredients?: Maybe<Scalars["Int"]["output"]>;
  /** How many people can be served with this recipe */
  numberOfPersons?: Maybe<Scalars["Int"]["output"]>;
  /** The nutrition values of the product per portion */
  nutritions?: Maybe<Array<Maybe<RecipeNutrition>>>;
  /** The average rating of the recipe */
  rating?: Maybe<Rating>;
  /** The total of cooking & preparation time */
  time?: Maybe<Scalars["Int"]["output"]>;
  /** The title of the recipe */
  title?: Maybe<Scalars["String"]["output"]>;
  /** url of instruction video for the recipe */
  youtubeUrl?: Maybe<Scalars["String"]["output"]>;
};

export type RecipeFavouritedArgs = {
  customerId?: InputMaybe<Scalars["String"]["input"]>;
};

export type RecipeAuthor = {
  __typename?: "RecipeAuthor";
  badge?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  /** Returns a profile that can be used for the author detail page. */
  profile?: Maybe<AuthorProfile>;
};

export type RecipeHeaderContent = {
  __typename?: "RecipeHeaderContent";
  count?: Maybe<Scalars["Int"]["output"]>;
  headerText?: Maybe<Scalars["String"]["output"]>;
};

export type RecipeIngredient = {
  __typename?: "RecipeIngredient";
  cdtId?: Maybe<Scalars["String"]["output"]>;
  exclusionTerms?: Maybe<Array<Scalars["String"]["output"]>>;
  group?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  product?: Maybe<Product>;
  productId?: Maybe<Scalars["String"]["output"]>;
  quantity?: Maybe<Scalars["String"]["output"]>;
  quantityOfProductRequired?: Maybe<QuantityOfProductRequired>;
  searchTerms?: Maybe<Array<Scalars["String"]["output"]>>;
  sku?: Maybe<Scalars["String"]["output"]>;
};

export type RecipeKitchenUtensils = {
  __typename?: "RecipeKitchenUtensils";
  cdtId?: Maybe<Scalars["String"]["output"]>;
  exclusionTerms?: Maybe<Array<Scalars["String"]["output"]>>;
  id?: Maybe<Scalars["ID"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  quantity?: Maybe<RecipeKitchenUtensilsQuantity>;
  searchTerms?: Maybe<Array<Scalars["String"]["output"]>>;
  sku?: Maybe<Scalars["String"]["output"]>;
};

export type RecipeKitchenUtensilsQuantity = {
  __typename?: "RecipeKitchenUtensilsQuantity";
  amount?: Maybe<Scalars["Float"]["output"]>;
  unitOfMeasure?: Maybe<Scalars["String"]["output"]>;
};

export type RecipeLabel = {
  __typename?: "RecipeLabel";
  label?: Maybe<Scalars["String"]["output"]>;
  relativeUrl?: Maybe<Scalars["String"]["output"]>;
};

export type RecipeLink = {
  __typename?: "RecipeLink";
  label?: Maybe<Scalars["String"]["output"]>;
  navigationState?: Maybe<Scalars["String"]["output"]>;
};

export type RecipeList = {
  __typename?: "RecipeList";
  description?: Maybe<Scalars["String"]["output"]>;
  listId?: Maybe<Scalars["String"]["output"]>;
  recipes?: Maybe<Array<Maybe<Recipe>>>;
  title?: Maybe<Scalars["String"]["output"]>;
  totalRecipes?: Maybe<Scalars["Int"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
};

export type RecipeMetaData = {
  __typename?: "RecipeMetaData";
  description?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type RecipeNavigation = {
  __typename?: "RecipeNavigation";
  dimensionName?: Maybe<Scalars["String"]["output"]>;
  lessLink?: Maybe<RecipeNavigationState>;
  moreLink?: Maybe<RecipeNavigationState>;
  multiSelect?: Maybe<Scalars["Boolean"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  refinements?: Maybe<Array<Maybe<RecipeRefinement>>>;
};

export type RecipeNavigationState = {
  __typename?: "RecipeNavigationState";
  navigationState?: Maybe<Scalars["String"]["output"]>;
};

export type RecipeNutrition = {
  __typename?: "RecipeNutrition";
  name?: Maybe<Scalars["String"]["output"]>;
  quantity?: Maybe<Scalars["Int"]["output"]>;
  unit?: Maybe<Scalars["String"]["output"]>;
};

export type RecipePowerFilters = {
  __typename?: "RecipePowerFilters";
  displayName?: Maybe<Scalars["String"]["output"]>;
  navigationState?: Maybe<Scalars["String"]["output"]>;
  siteRootPath?: Maybe<Scalars["String"]["output"]>;
};

export type RecipeRefinement = {
  __typename?: "RecipeRefinement";
  count?: Maybe<Scalars["Int"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  multiSelect?: Maybe<Scalars["Boolean"]["output"]>;
  navigationState?: Maybe<Scalars["String"]["output"]>;
  siteRootPath?: Maybe<Scalars["String"]["output"]>;
};

export type RecipeRefinementCrumb = {
  __typename?: "RecipeRefinementCrumb";
  ancestors?: Maybe<Array<Maybe<RecipeLink>>>;
  count?: Maybe<Scalars["Int"]["output"]>;
  dimensionName?: Maybe<Scalars["String"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  multiSelect?: Maybe<Scalars["Boolean"]["output"]>;
  removeAction?: Maybe<RecipeNavigationState>;
};

export type RecipeResult = {
  __typename?: "RecipeResult";
  canonicalRelativePath?: Maybe<Scalars["String"]["output"]>;
  guidedNavigation?: Maybe<Array<Maybe<RecipeNavigation>>>;
  headerContent?: Maybe<RecipeHeaderContent>;
  metaData?: Maybe<Array<Maybe<RecipeMetaData>>>;
  newUrl?: Maybe<Scalars["String"]["output"]>;
  powerFilters?: Maybe<Array<Maybe<RecipePowerFilters>>>;
  recipeResultList?: Maybe<RecipeResultList>;
  redirectUrl?: Maybe<Scalars["String"]["output"]>;
  selectedRefinements?: Maybe<RecipeSelectedRefinement>;
  shelfDescription?: Maybe<Scalars["String"]["output"]>;
  urlState?: Maybe<Scalars["String"]["output"]>;
};

export type RecipeResultList = {
  __typename?: "RecipeResultList";
  firstRecNum?: Maybe<Scalars["Int"]["output"]>;
  lastRecNum?: Maybe<Scalars["Int"]["output"]>;
  pagingActionTemplate?: Maybe<RecipeNavigationState>;
  recipes?: Maybe<Array<Maybe<Recipe>>>;
  recsPerPage?: Maybe<Scalars["Int"]["output"]>;
  sortOptions?: Maybe<Array<Maybe<RecipeSortOption>>>;
  totalNumRecs?: Maybe<Scalars["Int"]["output"]>;
};

export type RecipeResultsLink = {
  __typename?: "RecipeResultsLink";
  linkText?: Maybe<Scalars["String"]["output"]>;
  targetUrl?: Maybe<Scalars["String"]["output"]>;
  textIsRich?: Maybe<Scalars["Boolean"]["output"]>;
};

export type RecipeSearchCrumb = {
  __typename?: "RecipeSearchCrumb";
  removeAction?: Maybe<RecipeNavigationState>;
  terms?: Maybe<Scalars["String"]["output"]>;
};

export type RecipeSearchInput = {
  bloomreachCookieId?: InputMaybe<Scalars["String"]["input"]>;
  currentUrl?: InputMaybe<Scalars["String"]["input"]>;
  filters?: InputMaybe<Array<SearchInputFilter>>;
  friendlyUrl?: InputMaybe<Scalars["String"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offSet?: InputMaybe<Scalars["Int"]["input"]>;
  previousUrl?: InputMaybe<Scalars["String"]["input"]>;
  recipeFilter?: InputMaybe<Array<Scalars["String"]["input"]>>;
  searchTerms?: InputMaybe<Scalars["String"]["input"]>;
};

export type RecipeSearchResult = SearchContext & {
  __typename?: "RecipeSearchResult";
  count: Scalars["Int"]["output"];
  facets: Array<FacetGroup>;
  horizontalFacetValues: Array<Maybe<HorizontalFacet>>;
  pageHeader: SearchResultPageHeader;
  recipes: Array<SearchRecipe>;
  selectedFacets: Array<Maybe<SelectedFacetGroup>>;
  seo: SearchResultSeo;
  start: Scalars["Int"]["output"];
};

export type RecipeSelectedRefinement = {
  __typename?: "RecipeSelectedRefinement";
  refinementCrumbs?: Maybe<Array<Maybe<RecipeRefinementCrumb>>>;
  removeAllAction?: Maybe<RecipeNavigationState>;
  searchCrumbs?: Maybe<Array<Maybe<RecipeSearchCrumb>>>;
};

export type RecipeSortOption = {
  __typename?: "RecipeSortOption";
  label?: Maybe<Scalars["String"]["output"]>;
  navigationState?: Maybe<Scalars["String"]["output"]>;
  selected?: Maybe<Scalars["Boolean"]["output"]>;
};

export type RedeemOffers = {
  __typename?: "RedeemOffers";
  latestRedeemOffers?: Maybe<Array<Maybe<LoyaltyPromotion>>>;
  personalRedeemOffers?: Maybe<Array<Maybe<LoyaltyPromotion>>>;
  redeemOffers?: Maybe<Array<Maybe<LoyaltyPromotion>>>;
};

export type RegisterB2bSubUserInput = {
  /** must be DELIVERY */
  addressList: Array<InputMaybe<UserServiceAddressInput>>;
  /** billing reference */
  billingReference?: InputMaybe<Scalars["String"]["input"]>;
  /** Name of the branch */
  branchName: Scalars["String"]["input"];
  /** if there is any instruction for delivery */
  deliveryInstructions?: InputMaybe<Scalars["String"]["input"]>;
  /** Master Sub Registration Reference */
  masterSubRegistrationRef: Scalars["String"]["input"];
  /** is customer agreed to newsletter */
  newsletterSubscribed?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Should be a password with at least 8 characters including special characters and upper case letters */
  password: Scalars["String"]["input"];
  /** contact person details including name , family , telephone number */
  personalDetail: PersonalDetailInput;
  /** is customer agreed to personalization */
  personalizationAllowed?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** is customer agreed to terms and condition */
  termsAndConditionsAccepted: Scalars["Boolean"]["input"];
  /** Should be a valid email */
  username: Scalars["String"]["input"];
};

export type RegisterB2bSubUserOutput = {
  __typename?: "RegisterB2bSubUserOutput";
  active: Scalars["Boolean"]["output"];
  customerId: Scalars["String"]["output"];
};

/** Object to group all of the required inputs */
export type RegisterB2bUserInput = {
  /** SAP id for the acquiring store.  The acquiring store is the store that was originally responsible for signing up the customer and is used by other flows within Jumbo */
  acquiringStoreId?: InputMaybe<Scalars["Int"]["input"]>;
  /** consisting three addresses HOME | DELIVERY | BILLING */
  addressList: Array<InputMaybe<UserServiceAddressInput>>;
  /** email used for sending the invoice */
  billingEmail: Scalars["String"]["input"];
  /** if there is a specific department for orders */
  billingReference?: InputMaybe<Scalars["String"]["input"]>;
  /** if there is any instruction for delivery */
  deliveryInstructions?: InputMaybe<Scalars["String"]["input"]>;
  /** the establishment id of the company you wish to register with */
  establishmentId: Scalars["String"]["input"];
  /** is customer agreed to newsletter */
  newsletterSubscribed?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Should be a password with at least 8 characters including special characters and upper case letters */
  password: Scalars["String"]["input"];
  /** contact person details including name , family , telephone number */
  personalDetail: PersonalDetailInput;
  /** is customer agreed to personalization */
  personalizationAllowed?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** is customer agreed to terms and condition */
  termsAndConditionsAccepted: Scalars["Boolean"]["input"];
  /** Should be a valid email */
  username: Scalars["String"]["input"];
};

/** Object to group all of the required inputs */
export type RegisterB2cUserInput = {
  /** consisting three addresses HOME | DELIVERY | BILLING */
  addressList?: InputMaybe<Array<InputMaybe<UserServiceAddressInput>>>;
  /** is customer agreed to newsletter */
  newsletterSubscribed?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Should be a password with at least 8 characters including special characters and upper case letters */
  password: Scalars["String"]["input"];
  /** contact person details including name , family , telephone number */
  personalDetail: PersonalDetailInput;
  /** is customer agreed to personalization */
  personalizationAllowed?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** is customer agreed to terms and condition */
  termsAndConditionsAccepted: Scalars["Boolean"]["input"];
  /** Should be a valid email */
  username: Scalars["String"]["input"];
};

export type Registerb2bUserPayload = Payload & {
  __typename?: "Registerb2bUserPayload";
  customerId?: Maybe<Scalars["String"]["output"]>;
  status: StatusEnum;
};

export type Registerb2cUserPayload = Payload & {
  __typename?: "Registerb2cUserPayload";
  customerId?: Maybe<Scalars["String"]["output"]>;
  status: StatusEnum;
};

export type RemoveBasketLineInput = {
  id: Scalars["String"]["input"];
  type?: InputMaybe<BasketType>;
};

export type RemoveBasketLineResult = Basket | Error;

export type RemoveBasketLinesInput = {
  ids: Array<Scalars["String"]["input"]>;
  type?: InputMaybe<BasketType>;
};

export type RemoveBasketLinesResult = Basket | Error;

export type RemoveBasketProductInput = {
  id: Scalars["String"]["input"];
};

export type RemoveBasketProductResponse = {
  __typename?: "RemoveBasketProductResponse";
  id: Scalars["String"]["output"];
  query?: Maybe<Query>;
};

export type RemoveVoucherCodesFromCheckoutSessionInput = {
  voucherCodes: Array<Scalars["String"]["input"]>;
};

export type RemoveVoucherCodesFromCheckoutSessionResponse = {
  __typename?: "RemoveVoucherCodesFromCheckoutSessionResponse";
  query?: Maybe<Query>;
  voucherCodes: Array<Scalars["String"]["output"]>;
};

export enum ReservationState {
  CANCELLED_BY_CLIENT = "CANCELLED_BY_CLIENT",
  CONFIRMATION_CANCELLED_BY_CLIENT = "CONFIRMATION_CANCELLED_BY_CLIENT",
  CONFIRMATION_CANCELLED_BY_OMS = "CONFIRMATION_CANCELLED_BY_OMS",
  CONFIRMED_BY_CLIENT = "CONFIRMED_BY_CLIENT",
  EXPIRED = "EXPIRED",
  OPEN = "OPEN",
}

export type ReserveCheckoutDeliveryPeriodInput = {
  endDateTime: Scalars["String"]["input"];
  startDateTime: Scalars["String"]["input"];
};

export type ReserveCheckoutDeliveryPeriodResponse = {
  __typename?: "ReserveCheckoutDeliveryPeriodResponse";
  query?: Maybe<Query>;
  session: CheckoutSession;
};

export type ReserveCheckoutOrderDeliveryPeriodInput = {
  endDateTime: Scalars["String"]["input"];
  orderId: Scalars["Float"]["input"];
  startDateTime: Scalars["String"]["input"];
};

export type ReserveCheckoutOrderDeliveryPeriodResponse = {
  __typename?: "ReserveCheckoutOrderDeliveryPeriodResponse";
  query?: Maybe<Query>;
  session: CheckoutOrderSession;
};

export type ReserveLoyaltyVoucherRequest = {
  accountId?: InputMaybe<Scalars["Int"]["input"]>;
  numberVouchers: Scalars["Int"]["input"];
  promotionId: Scalars["String"]["input"];
  transactionUuid: Scalars["String"]["input"];
};

export type ReservedCheckoutDeliveryPeriod = {
  __typename?: "ReservedCheckoutDeliveryPeriod";
  cutoffDateTime: Scalars["String"]["output"];
  deliveryPeriodId: Scalars["String"]["output"];
  endDateTime: Scalars["String"]["output"];
  expirationDateTime: Scalars["String"]["output"];
  fulfilmentType: OrderFulfilmentType;
  orderId?: Maybe<Scalars["String"]["output"]>;
  reservationId: Scalars["String"]["output"];
  startDateTime: Scalars["String"]["output"];
  state: ReservationState;
};

export type ReservedCheckoutDeliveryPeriods = {
  __typename?: "ReservedCheckoutDeliveryPeriods";
  confirmed: Array<ReservedCheckoutDeliveryPeriod>;
  open: Array<ReservedCheckoutDeliveryPeriod>;
};

export type ReservedDeliveryPeriod = {
  __typename?: "ReservedDeliveryPeriod";
  cutoffDateTime: Scalars["String"]["output"];
  deliveryPeriodId: Scalars["String"]["output"];
  endDateTime: Scalars["String"]["output"];
  expirationDateTime: Scalars["String"]["output"];
  hubSapId: Scalars["String"]["output"];
  priceExDiscount: MoneyType;
  priceIncDiscount: MoneyType;
  reservationId: Scalars["String"]["output"];
  startDateTime: Scalars["String"]["output"];
  state: ReservationState;
};

export type ResponseMessage = {
  __typename?: "ResponseMessage";
  message: MessageBody;
  messageCase: Scalars["Int"]["output"];
};

export type ResponseReview = {
  originalResponse?: InputMaybe<Scalars["String"]["input"]>;
  value?: InputMaybe<Scalars["String"]["input"]>;
};

export type ReturnDepositInput = {
  chargeType: DepositChargeType;
  quantity: Scalars["Int"]["input"];
  sku: Scalars["String"]["input"];
};

export type ReturnDepositsInput = {
  deposits: Array<InputMaybe<ReturnDepositInput>>;
  orderId: Scalars["String"]["input"];
};

export type ReturnedDeposit = {
  __typename?: "ReturnedDeposit";
  price?: Maybe<MoneyType>;
  returnedByCustomerQuantity?: Maybe<Scalars["Int"]["output"]>;
  sku: Scalars["String"]["output"];
};

export type ReturnedDepositsError = {
  __typename?: "ReturnedDepositsError";
  errorMessage: Scalars["String"]["output"];
};

export type ReturnedDepositsResponse =
  | ReturnedDepositsError
  | ReturnedDepositsResponseSuccess;

export type ReturnedDepositsResponseSuccess = {
  __typename?: "ReturnedDepositsResponseSuccess";
  returnedDeposits: Array<Maybe<ReturnedDeposit>>;
  returnedDepositsTotalAmount?: Maybe<MoneyType>;
};

export type Review = {
  score?: InputMaybe<Scalars["Int"]["input"]>;
  text?: InputMaybe<Scalars["String"]["input"]>;
};

export type SaveAddressToCheckoutSessionInput = {
  addition: Scalars["String"]["input"];
  city: Scalars["String"]["input"];
  houseNumber: Scalars["String"]["input"];
  postalCode: Scalars["String"]["input"];
  street: Scalars["String"]["input"];
};

export type SaveAddressToCheckoutSessionResponse = {
  __typename?: "SaveAddressToCheckoutSessionResponse";
  address: Address;
  query?: Maybe<Query>;
};

export type SaveAmendOrderBasket = {
  __typename?: "SaveAmendOrderBasket";
  succeeded?: Maybe<Scalars["Boolean"]["output"]>;
};

export type SaveAmendOrderBasketResult =
  | CreditWorthinessCheckError
  | Error
  | SaveAmendOrderBasket;

export type SaveFulfilmentTypeToCheckoutSessionInput = {
  fulfilmentType: OrderFulfilmentType;
};

export type SaveFulfilmentTypeToCheckoutSessionResponse = {
  __typename?: "SaveFulfilmentTypeToCheckoutSessionResponse";
  fulfilmentType: OrderFulfilmentType;
  query?: Maybe<Query>;
};

export type SaveOrderInput = {
  orderChannel: OrderChannel;
  orderId: Scalars["Float"]["input"];
  updates: Array<UpdatesInput>;
};

export type SaveOrderResponse = {
  __typename?: "SaveOrderResponse";
  orderId: Scalars["Float"]["output"];
  query?: Maybe<Query>;
};

export type SaveStoreToCheckoutOrderSessionInput = {
  orderId: Scalars["Float"]["input"];
  storeId: Scalars["String"]["input"];
};

export type SaveStoreToCheckoutOrderSessionResponse = {
  __typename?: "SaveStoreToCheckoutOrderSessionResponse";
  query?: Maybe<Query>;
  session: CheckoutOrderSession;
};

export type SaveStoreToCheckoutSessionInput = {
  storeId: Scalars["String"]["input"];
};

export type SaveStoreToCheckoutSessionResponse = {
  __typename?: "SaveStoreToCheckoutSessionResponse";
  query?: Maybe<Query>;
  session: CheckoutSession;
};

export type SaveVoucherCodesToCheckoutSessionInput = {
  voucherCodes: Array<Scalars["String"]["input"]>;
};

export type SaveVoucherCodesToCheckoutSessionResponse = {
  __typename?: "SaveVoucherCodesToCheckoutSessionResponse";
  query?: Maybe<Query>;
  voucherCodes: Array<Scalars["String"]["output"]>;
};

export type SearchAdjustment = {
  __typename?: "SearchAdjustment";
  adjustedSearches?: Maybe<Array<Maybe<AdjustedSearchTerm>>>;
  originalTerms?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
};

export type SearchCategoryTile = {
  __typename?: "SearchCategoryTile";
  id?: Maybe<Scalars["String"]["output"]>;
  imageLink?: Maybe<Scalars["String"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  navigationState?: Maybe<Scalars["String"]["output"]>;
  siteRootPath?: Maybe<Scalars["String"]["output"]>;
};

export type SearchContext = {
  count: Scalars["Int"]["output"];
  facets?: Maybe<Array<FacetGroup>>;
  pageHeader: SearchResultPageHeader;
  start: Scalars["Int"]["output"];
};

export type SearchCrumb = {
  __typename?: "SearchCrumb";
  removeAction?: Maybe<SearchNavigationState>;
  terms?: Maybe<Scalars["String"]["output"]>;
};

export type SearchGuidedNavigation = {
  __typename?: "SearchGuidedNavigation";
  ancestors?: Maybe<Array<Maybe<SearchLink>>>;
  dimensionName?: Maybe<Scalars["String"]["output"]>;
  displayName?: Maybe<Scalars["String"]["output"]>;
  groupName?: Maybe<Scalars["String"]["output"]>;
  lessLink?: Maybe<SearchLink>;
  moreLink?: Maybe<SearchLink>;
  multiSelect?: Maybe<Scalars["Boolean"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  refinements?: Maybe<Array<Maybe<SearchRefinement>>>;
};

export type SearchHeaderContent = {
  __typename?: "SearchHeaderContent";
  count?: Maybe<Scalars["Int"]["output"]>;
  headerText?: Maybe<Scalars["String"]["output"]>;
  pageTitle?: Maybe<Scalars["String"]["output"]>;
};

export type SearchHelperText = {
  __typename?: "SearchHelperText";
  header?: Maybe<Scalars["String"]["output"]>;
  linkText?: Maybe<Scalars["String"]["output"]>;
  longBody?: Maybe<Scalars["String"]["output"]>;
  messageType?: Maybe<Scalars["String"]["output"]>;
  shortBody?: Maybe<Scalars["String"]["output"]>;
  show?: Maybe<Scalars["Boolean"]["output"]>;
  targetUrl?: Maybe<Scalars["String"]["output"]>;
};

export type SearchInputFilter = {
  key: Scalars["String"]["input"];
  values: Array<InputMaybe<Scalars["String"]["input"]>>;
};

export type SearchLink = {
  __typename?: "SearchLink";
  label?: Maybe<Scalars["String"]["output"]>;
  navigationState?: Maybe<Scalars["String"]["output"]>;
};

export type SearchMainContentPart = {
  __typename?: "SearchMainContentPart";
  searchAdjustments?: Maybe<Array<Maybe<SearchAdjustment>>>;
  searchResultBanners?: Maybe<Array<Maybe<SearchResultBanner>>>;
  searchWarning?: Maybe<Scalars["String"]["output"]>;
};

export type SearchMetaData = {
  __typename?: "SearchMetaData";
  description?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type SearchNavigationState = {
  __typename?: "SearchNavigationState";
  navigationState?: Maybe<Scalars["String"]["output"]>;
};

export type SearchProductList = {
  __typename?: "SearchProductList";
  lastRecNum?: Maybe<Scalars["Int"]["output"]>;
  pagingActionTemplate?: Maybe<SearchNavigationState>;
  products?: Maybe<Array<Maybe<Product>>>;
  skus?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  sortOptions?: Maybe<Array<Maybe<SearchSortOption>>>;
  totalNumRecs?: Maybe<Scalars["Int"]["output"]>;
};

export type SearchRecipe = Node & {
  __typename?: "SearchRecipe";
  id: Scalars["ID"]["output"];
  imageUrl?: Maybe<Scalars["String"]["output"]>;
  link?: Maybe<Scalars["String"]["output"]>;
  numberOfIngredients?: Maybe<Scalars["Int"]["output"]>;
  numberOfPersons?: Maybe<Scalars["Int"]["output"]>;
  time?: Maybe<Scalars["Int"]["output"]>;
  title: Scalars["String"]["output"];
  totalTime?: Maybe<Scalars["Int"]["output"]>;
};

export type SearchRefinement = {
  __typename?: "SearchRefinement";
  count?: Maybe<Scalars["Int"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  multiSelect?: Maybe<Scalars["Boolean"]["output"]>;
  navigationState?: Maybe<Scalars["String"]["output"]>;
  siteRootPath?: Maybe<Scalars["String"]["output"]>;
};

export type SearchRefinementCrumb = {
  __typename?: "SearchRefinementCrumb";
  ancestors?: Maybe<Array<Maybe<SearchLink>>>;
  count?: Maybe<Scalars["Int"]["output"]>;
  dimensionName?: Maybe<Scalars["String"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  multiSelect?: Maybe<Scalars["Boolean"]["output"]>;
  removeAction?: Maybe<SearchNavigationState>;
};

export type SearchResult = {
  __typename?: "SearchResult";
  canonicalRelativePath?: Maybe<Scalars["String"]["output"]>;
  categoryIdPath?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  categoryTiles?: Maybe<Array<Maybe<SearchCategoryTile>>>;
  guidedNavigation?: Maybe<Array<Maybe<SearchGuidedNavigation>>>;
  headerContent?: Maybe<Array<Maybe<SearchHeaderContent>>>;
  helperText?: Maybe<SearchHelperText>;
  horizontalFilters?: Maybe<Array<Maybe<HorizontalFilter>>>;
  mainContent?: Maybe<SearchMainContentPart>;
  metaData?: Maybe<Array<Maybe<SearchMetaData>>>;
  newUrl?: Maybe<Scalars["String"]["output"]>;
  powerFilters?: Maybe<Array<Maybe<ProductPowerFilter>>>;
  productsResultList?: Maybe<SearchProductList>;
  recipeLink?: Maybe<RecipeResultsLink>;
  redirectUrl?: Maybe<Scalars["String"]["output"]>;
  removeAllAction?: Maybe<Scalars["String"]["output"]>;
  selectedRefinements?: Maybe<SelectedRefinement>;
  shelfDescription?: Maybe<Scalars["String"]["output"]>;
  socialLists?: Maybe<SocialListsContent>;
  urlState?: Maybe<Scalars["String"]["output"]>;
};

export type SearchResultBanner = {
  __typename?: "SearchResultBanner";
  buttonText?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  imageDesktop?: Maybe<Scalars["String"]["output"]>;
  imageMobile?: Maybe<Scalars["String"]["output"]>;
  isExternal?: Maybe<Scalars["Boolean"]["output"]>;
  position?: Maybe<Scalars["Int"]["output"]>;
  text?: Maybe<Scalars["String"]["output"]>;
  textColor?: Maybe<Scalars["String"]["output"]>;
  textIsRich?: Maybe<Scalars["Boolean"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type SearchResultPageHeader = {
  __typename?: "SearchResultPageHeader";
  count?: Maybe<Scalars["Int"]["output"]>;
  headerText?: Maybe<Scalars["String"]["output"]>;
};

export type SearchResultRemoveAllAction = {
  __typename?: "SearchResultRemoveAllAction";
  friendlyUrl?: Maybe<Scalars["String"]["output"]>;
  linkUrl?: Maybe<Scalars["String"]["output"]>;
  seoUrl?: Maybe<Scalars["String"]["output"]>;
};

export type SearchResultSeo = {
  __typename?: "SearchResultSeo";
  canonicalLink?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type SearchResultSortOption = {
  __typename?: "SearchResultSortOption";
  friendlyUrl: Scalars["String"]["output"];
  link: Scalars["String"]["output"];
  selected: Scalars["Boolean"]["output"];
  seoUrl?: Maybe<Scalars["String"]["output"]>;
  text: Scalars["String"]["output"];
};

export type SearchSocialList = {
  __typename?: "SearchSocialList";
  author?: Maybe<Scalars["String"]["output"]>;
  followers?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  isAuthorVerified?: Maybe<Scalars["Boolean"]["output"]>;
  labels?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  productImages?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  thumbnail?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type SearchSortOption = {
  __typename?: "SearchSortOption";
  label?: Maybe<Scalars["String"]["output"]>;
  navigationState?: Maybe<Scalars["String"]["output"]>;
  selected?: Maybe<Scalars["Boolean"]["output"]>;
};

export type SearchSuggestions = {
  __typename?: "SearchSuggestions";
  brands?: Maybe<Array<Maybe<SearchSuggestionsBrand>>>;
  keywords?: Maybe<Array<Maybe<SearchSuggestionsKeyword>>>;
};

export type SearchSuggestionsBrand = {
  __typename?: "SearchSuggestionsBrand";
  displayText: Scalars["String"]["output"];
  link: Scalars["String"]["output"];
  query: Scalars["String"]["output"];
};

export type SearchSuggestionsInput = {
  bloomreachCookieId?: InputMaybe<Scalars["String"]["input"]>;
  currentUrl?: InputMaybe<Scalars["String"]["input"]>;
  previousUrl?: InputMaybe<Scalars["String"]["input"]>;
  searchTerms: Scalars["String"]["input"];
};

export type SearchSuggestionsKeyword = {
  __typename?: "SearchSuggestionsKeyword";
  displayText: Scalars["String"]["output"];
  query: Scalars["String"]["output"];
};

export type SearchTerm = {
  __typename?: "SearchTerm";
  adjustedTerms?: Maybe<Scalars["String"]["output"]>;
  autoPhrased?: Maybe<Scalars["String"]["output"]>;
  spellCorrected?: Maybe<Scalars["Boolean"]["output"]>;
};

export type SelectedFacet = {
  __typename?: "SelectedFacet";
  count: Scalars["Int"]["output"];
  friendlyUrl: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  removeLink: Scalars["String"]["output"];
};

export type SelectedFacetGroup = {
  __typename?: "SelectedFacetGroup";
  key: Scalars["String"]["output"];
  values: Array<SelectedFacet>;
};

export type SelectedRefinement = {
  __typename?: "SelectedRefinement";
  refinementCrumbs?: Maybe<Array<Maybe<SearchRefinementCrumb>>>;
  removeAllAction?: Maybe<SearchNavigationState>;
  searchCrumbs?: Maybe<Array<Maybe<SearchCrumb>>>;
};

export type SetCheckoutPrereservedDeliveryPeriodInput = {
  reservationId: Scalars["String"]["input"];
};

export type SetCheckoutPrereservedDeliveryPeriodResponse = {
  __typename?: "SetCheckoutPrereservedDeliveryPeriodResponse";
  query?: Maybe<Query>;
  session: CheckoutSession;
};

export type SetCurrentBasketInput = {
  lines: Array<BasketLineInput>;
  merge?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<BasketType>;
  vagueTerms: Array<VagueTermInput>;
};

export type SetCurrentBasketResult = Basket | Error;

export type ShelfTextInput = {
  friendlyUrl?: InputMaybe<Scalars["String"]["input"]>;
  searchType: Scalars["String"]["input"];
};

export type ShelfTextResult = {
  __typename?: "ShelfTextResult";
  shelfText?: Maybe<Scalars["String"]["output"]>;
};

export type ShippingStatus = {
  __typename?: "ShippingStatus";
  liveETA?: Maybe<Scalars["String"]["output"]>;
  liveETAUpdated?: Maybe<Scalars["String"]["output"]>;
  plannedETA: Scalars["String"]["output"];
  status?: Maybe<ShippingTimeStatus>;
  time?: Maybe<Scalars["String"]["output"]>;
  timeSlot?: Maybe<ShippingStatusTimeslot>;
};

export type ShippingStatusTimeslot = {
  __typename?: "ShippingStatusTimeslot";
  end?: Maybe<Scalars["String"]["output"]>;
  start?: Maybe<Scalars["String"]["output"]>;
};

export enum ShippingTimeStatus {
  EARLY = "EARLY",
  LATE = "LATE",
  NO_ANY_ETA = "NO_ANY_ETA",
  NO_LIVE_ETA = "NO_LIVE_ETA",
  ON_TIME = "ON_TIME",
  UNKNOWN = "UNKNOWN",
}

export type Slot = {
  __typename?: "Slot";
  cutOff?: Maybe<DateTime>;
  /** The Id that matches the slot e.g. 12666726_6646976_28694_2 */
  deliveryId?: Maybe<Scalars["String"]["output"]>;
  /** Indicate which EFC is aimed to fulfil the order */
  efcSapId?: Maybe<Scalars["String"]["output"]>;
  end?: Maybe<DateTime>;
  expires?: Maybe<DateTime>;
  /** Indicate which HUB is aimed to fulfil the order */
  hubSapId?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  isBooked?: Maybe<Scalars["Boolean"]["output"]>;
  isPrereserved?: Maybe<Scalars["Boolean"]["output"]>;
  /** The UUID of the reservation e.g. 8ad63ca1-4185-4023-8d85-0eb90e8573bc */
  reservationId?: Maybe<Scalars["String"]["output"]>;
  shippingCosts?: Maybe<Scalars["Int"]["output"]>;
  start?: Maybe<DateTime>;
  /** @deprecated Use storeV2 */
  store?: Maybe<Store>;
  storeId?: Maybe<Scalars["String"]["output"]>;
  storeV2?: Maybe<StoreV2>;
  type?: Maybe<Scalars["String"]["output"]>;
};

export type SocialList = {
  __typename?: "SocialList";
  author?: Maybe<Scalars["String"]["output"]>;
  authorVerified?: Maybe<Scalars["Boolean"]["output"]>;
  followers?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  labels?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  productImages?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  thumbnail?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type SocialListsContent = {
  __typename?: "SocialListsContent";
  lists?: Maybe<Array<Maybe<SearchSocialList>>>;
  title?: Maybe<Scalars["String"]["output"]>;
  totalNumRecs?: Maybe<Scalars["Int"]["output"]>;
};

export enum SocialMediaType {
  facebook = "facebook",
  instagram = "instagram",
  linkedin = "linkedin",
  other = "other",
  pinterest = "pinterest",
  snapchat = "snapchat",
  soundcloud = "soundcloud",
  spotify = "spotify",
  tiktok = "tiktok",
  twitch = "twitch",
  twitter = "twitter",
  website = "website",
  youtube = "youtube",
}

export enum SortOption {
  PRICE_ASC = "PRICE_ASC",
  PRICE_DESC = "PRICE_DESC",
  PRICE_PER_WEIGHT_MEASURE_ASC = "PRICE_PER_WEIGHT_MEASURE_ASC",
  RANK_A = "RANK_A",
  RANK_B = "RANK_B",
}

export enum SortingDirections {
  ASC = "ASC",
  DESC = "DESC",
}

export type SpendLimit = {
  __typename?: "SpendLimit";
  amount?: Maybe<Scalars["String"]["output"]>;
  currency?: Maybe<Scalars["String"]["output"]>;
};

export type SponsoredProductAddToBasketEventInput = {
  auctionId: Scalars["String"]["input"];
  basketId?: InputMaybe<Scalars["String"]["input"]>;
  quantity: Scalars["Int"]["input"];
  sku: Scalars["String"]["input"];
};

export type SponsoredProductAmendOrderEventInput = {
  items: Array<Item>;
  orderId: Scalars["String"]["input"];
};

export type SponsoredProductClickEventInput = {
  auctionId: Scalars["String"]["input"];
  sku: Scalars["String"]["input"];
};

export type SponsoredProductEventResult = {
  __typename?: "SponsoredProductEventResult";
  message?: Maybe<Scalars["String"]["output"]>;
};

export type State = {
  __typename?: "State";
  affinityToken?: Maybe<Scalars["String"]["output"]>;
  chatKey?: Maybe<Scalars["String"]["output"]>;
  postSequence?: Maybe<Scalars["Int"]["output"]>;
  sessionId?: Maybe<Scalars["String"]["output"]>;
  transcriptId?: Maybe<Scalars["String"]["output"]>;
};

export enum StatusCategory {
  CLOSED = "CLOSED",
  OPEN = "OPEN",
  PROCESSING = "PROCESSING",
}

export enum StatusEnum {
  SUCCESS = "SUCCESS",
}

export type Store = {
  __typename?: "Store";
  address: Address;
  addressName: Scalars["String"]["output"];
  city: Scalars["String"]["output"];
  closingDate: Scalars["String"]["output"];
  collectionEndDate: Scalars["String"]["output"];
  collectionPoint: Scalars["Boolean"]["output"];
  collectionStartDate: Scalars["String"]["output"];
  complexNumber: Scalars["String"]["output"];
  country: Scalars["String"]["output"];
  email: Scalars["String"]["output"];
  facilities: Scalars["String"]["output"];
  fax: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  friNextClose: Scalars["String"]["output"];
  friNextOpen: Scalars["String"]["output"];
  friThisClose: Scalars["String"]["output"];
  friThisOpen: Scalars["String"]["output"];
  homeDeliveryDate: Scalars["String"]["output"];
  lastName: Scalars["String"]["output"];
  latitude: Scalars["String"]["output"];
  locationType: Scalars["String"]["output"];
  longitude: Scalars["String"]["output"];
  monNextClose: Scalars["String"]["output"];
  monNextOpen: Scalars["String"]["output"];
  monThisClose: Scalars["String"]["output"];
  monThisOpen: Scalars["String"]["output"];
  /** @deprecated use addressName instead */
  name?: Maybe<Scalars["String"]["output"]>;
  openingDate: Scalars["String"]["output"];
  phoneBusiness: Scalars["String"]["output"];
  postalCode: Scalars["String"]["output"];
  priceLine: Scalars["String"]["output"];
  sapStoreID: Scalars["String"]["output"];
  satNextClose: Scalars["String"]["output"];
  satNextOpen: Scalars["String"]["output"];
  satThisClose: Scalars["String"]["output"];
  satThisOpen: Scalars["String"]["output"];
  state: Scalars["String"]["output"];
  storeUUID: Scalars["String"]["output"];
  street: Scalars["String"]["output"];
  street2: Scalars["String"]["output"];
  street3: Scalars["String"]["output"];
  sunNextClose: Scalars["String"]["output"];
  sunNextOpen: Scalars["String"]["output"];
  sunThisClose: Scalars["String"]["output"];
  sunThisOpen: Scalars["String"]["output"];
  thursNextClose: Scalars["String"]["output"];
  thursNextOpen: Scalars["String"]["output"];
  thursThisClose: Scalars["String"]["output"];
  thursThisOpen: Scalars["String"]["output"];
  tuesNextClose: Scalars["String"]["output"];
  tuesNextOpen: Scalars["String"]["output"];
  tuesThisClose: Scalars["String"]["output"];
  tuesThisOpen: Scalars["String"]["output"];
  wedsNextClose: Scalars["String"]["output"];
  wedsNextOpen: Scalars["String"]["output"];
  wedsThisClose: Scalars["String"]["output"];
  wedsThisOpen: Scalars["String"]["output"];
};

export type StoreDetails = {
  __typename?: "StoreDetails";
  addressName?: Maybe<Scalars["String"]["output"]>;
  city?: Maybe<Scalars["String"]["output"]>;
  street?: Maybe<Scalars["String"]["output"]>;
  street2?: Maybe<Scalars["String"]["output"]>;
  street3?: Maybe<Scalars["String"]["output"]>;
};

export type StorePreference = {
  __typename?: "StorePreference";
  acquiringStore?: Maybe<AcquiringStorePreference>;
  homeStore?: Maybe<HomeStorePreference>;
};

export type StorePreferenceInput = {
  acquiringStore?: InputMaybe<AcquiringStorePreferenceInput>;
  homeStore?: InputMaybe<HomeStorePreferenceInput>;
};

export type StorePreferences = {
  __typename?: "StorePreferences";
  city?: Maybe<Scalars["String"]["output"]>;
  complexNumber?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

export type StorePreferencesInput = {
  city?: InputMaybe<Scalars["String"]["input"]>;
  complexNumber?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type StoreV2 = {
  __typename?: "StoreV2";
  commerce: StoreV2Commerce;
  complexNumber?: Maybe<Scalars["String"]["output"]>;
  contact?: Maybe<StoreV2Contact>;
  facilities: StoreV2Facilities;
  location: StoreV2Location;
  name: Scalars["String"]["output"];
  openingHours?: Maybe<StoreV2OpeningHours>;
  priceLine?: Maybe<Scalars["String"]["output"]>;
  storeId: Scalars["String"]["output"];
  websiteURL?: Maybe<Scalars["String"]["output"]>;
};

export type StoreV2Address = {
  __typename?: "StoreV2Address";
  city: Scalars["String"]["output"];
  countryCode: Scalars["String"]["output"];
  houseNumber: Scalars["String"]["output"];
  postalCode: Scalars["String"]["output"];
  state: Scalars["String"]["output"];
  street: Scalars["String"]["output"];
};

export type StoreV2BranchManager = {
  __typename?: "StoreV2BranchManager";
  emailAddress?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

export type StoreV2Commerce = {
  __typename?: "StoreV2Commerce";
  allowSundayRevenue: Scalars["Boolean"]["output"];
  collection: StoreV2CommerceAvailability;
  homeDelivery: StoreV2CommerceAvailability;
  inStore: StoreV2CommerceAvailability;
};

export type StoreV2CommerceAvailability = {
  __typename?: "StoreV2CommerceAvailability";
  availability?: Maybe<StoreV2DateInterval>;
  available: Scalars["Boolean"]["output"];
};

export type StoreV2Contact = {
  __typename?: "StoreV2Contact";
  emailAddress?: Maybe<Scalars["String"]["output"]>;
  faxNumber?: Maybe<Scalars["String"]["output"]>;
  manager: StoreV2Manager;
  phoneNumber?: Maybe<Scalars["String"]["output"]>;
};

export type StoreV2DateInterval = {
  __typename?: "StoreV2DateInterval";
  endsOn?: Maybe<Scalars["String"]["output"]>;
  startsOn?: Maybe<Scalars["String"]["output"]>;
};

export type StoreV2Facilities = {
  __typename?: "StoreV2Facilities";
  cookingStudio?: Maybe<Scalars["Boolean"]["output"]>;
  dryCleaning?: Maybe<Scalars["Boolean"]["output"]>;
  flowers?: Maybe<Scalars["Boolean"]["output"]>;
  kitchen?: Maybe<Scalars["Boolean"]["output"]>;
  liquorService?: Maybe<Scalars["Boolean"]["output"]>;
  locationType: Scalars["String"]["output"];
  parking?: Maybe<Scalars["String"]["output"]>;
  pharmacy?: Maybe<Scalars["Boolean"]["output"]>;
  photoService?: Maybe<Scalars["Boolean"]["output"]>;
  pickUpType: Scalars["String"]["output"];
  postOffice?: Maybe<Scalars["Boolean"]["output"]>;
  selfCheckout?: Maybe<Scalars["Boolean"]["output"]>;
  selfScan?: Maybe<Scalars["Boolean"]["output"]>;
  wifi?: Maybe<Scalars["Boolean"]["output"]>;
};

export type StoreV2Location = {
  __typename?: "StoreV2Location";
  address: StoreV2Address;
  latitude?: Maybe<Scalars["Float"]["output"]>;
  longitude?: Maybe<Scalars["Float"]["output"]>;
};

export type StoreV2Manager = {
  __typename?: "StoreV2Manager";
  branch?: Maybe<StoreV2BranchManager>;
};

export type StoreV2OpeningHours = {
  __typename?: "StoreV2OpeningHours";
  friday?: Maybe<StoreV2TimeInterval>;
  monday?: Maybe<StoreV2TimeInterval>;
  saturday?: Maybe<StoreV2TimeInterval>;
  sunday?: Maybe<StoreV2TimeInterval>;
  thursday?: Maybe<StoreV2TimeInterval>;
  tuesday?: Maybe<StoreV2TimeInterval>;
  wednesday?: Maybe<StoreV2TimeInterval>;
};

export type StoreV2TimeInterval = {
  __typename?: "StoreV2TimeInterval";
  closesAt?: Maybe<Scalars["String"]["output"]>;
  opensAt?: Maybe<Scalars["String"]["output"]>;
};

export type Surcharge = {
  __typename?: "Surcharge";
  /** Type of surcharge. e.g. SINGLE_USE_PLASTIC  */
  type: SurchargeType;
  /**  Value of surcharge.  */
  value: MoneyType;
};

export enum SurchargeType {
  SINGLE_USE_PLASTIC = "SINGLE_USE_PLASTIC",
  UNKNOWN = "UNKNOWN",
}

export type SwapBasketLineInput = {
  lineId: Scalars["String"]["input"];
  newItem: BasketLineInput;
  type?: InputMaybe<BasketType>;
};

export type SwapBasketLineResult = Basket | Error;

export type Tag = {
  __typename?: "Tag";
  inverse?: Maybe<Scalars["Boolean"]["output"]>;
  text?: Maybe<Scalars["String"]["output"]>;
};

export enum TaxCode {
  FULL = "FULL",
  REDUCED = "REDUCED",
  UNKNOWN = "UNKNOWN",
}

export type TaxGroup = {
  __typename?: "TaxGroup";
  amount?: Maybe<Scalars["Int"]["output"]>;
  code?: Maybe<TaxCode>;
};

export type Taxes = {
  __typename?: "Taxes";
  groups?: Maybe<Array<Maybe<TaxGroup>>>;
  totalTaxes?: Maybe<Scalars["Int"]["output"]>;
};

export type Telephone = {
  __typename?: "Telephone";
  number: Scalars["String"]["output"];
  type?: Maybe<Scalars["String"]["output"]>;
};

export type TelephoneInput = {
  number?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type TermsAndConditions = {
  __typename?: "TermsAndConditions";
  eCommerce?: Maybe<Scalars["Boolean"]["output"]>;
  loyalty?: Maybe<Scalars["Boolean"]["output"]>;
};

export type TermsAndConditionsLoyalty = {
  __typename?: "TermsAndConditionsLoyalty";
  buyingStamps?: Maybe<Scalars["Boolean"]["output"]>;
  general?: Maybe<Scalars["Boolean"]["output"]>;
};

export type TermsAndConditionsLoyaltyInput = {
  buyingStamps?: InputMaybe<Scalars["Boolean"]["input"]>;
  general?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type TestPanelPreference = {
  __typename?: "TestPanelPreference";
  jott?: Maybe<Scalars["Boolean"]["output"]>;
};

export type TestPanelPreferenceInput = {
  jott?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type TestPanelPreferencesInput = {
  jott?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type TextMessage = {
  __typename?: "TextMessage";
  header?: Maybe<Scalars["String"]["output"]>;
  linkText?: Maybe<Scalars["String"]["output"]>;
  longBody?: Maybe<Scalars["String"]["output"]>;
  messageType?: Maybe<Scalars["String"]["output"]>;
  shortBody?: Maybe<Scalars["String"]["output"]>;
  targetUrl?: Maybe<Scalars["String"]["output"]>;
};

export type TimeWindow = {
  __typename?: "TimeWindow";
  endDateTime: Scalars["String"]["output"];
  startDateTime: Scalars["String"]["output"];
};

export type Tooltip = {
  __typename?: "Tooltip";
  linkTarget?: Maybe<Scalars["String"]["output"]>;
  linkText?: Maybe<Scalars["String"]["output"]>;
  text?: Maybe<Scalars["String"]["output"]>;
};

export type TrackingCodeRecord = {
  __typename?: "TrackingCodeRecord";
  createdAt: Scalars["String"]["output"];
  orderId: Scalars["Int"]["output"];
  trackingCode: Scalars["String"]["output"];
};

export enum TransactionStatus {
  CHARGE_BACK = "CHARGE_BACK",
  COMPLETED = "COMPLETED",
  CREATED = "CREATED",
  FAILED = "FAILED",
  FAILED_ATTEMPT_RECOVERY = "FAILED_ATTEMPT_RECOVERY",
  READY = "READY",
  SUBMITTED = "SUBMITTED",
}

export enum Unit {
  kg = "kg",
  l = "l",
  pieces = "pieces",
}

export type UpdateBasketLineQuantityInput = {
  id: Scalars["String"]["input"];
  quantity: Scalars["Float"]["input"];
  type?: InputMaybe<BasketType>;
};

export type UpdateBasketLineQuantityResult = Basket | Error;

export type UpdateBasketProductQuantityInput = {
  id: Scalars["String"]["input"];
  quantity: Scalars["Float"]["input"];
  unit: Scalars["String"]["input"];
};

export type UpdateBasketProductQuantityResponse = {
  __typename?: "UpdateBasketProductQuantityResponse";
  product: BasketLine;
  query?: Maybe<Query>;
};

export type UpdateCustomerInput = {
  b2bDetails?: InputMaybe<Cdmb2BDetailsInput>;
  contactInformation?: InputMaybe<ContactInformationInput>;
  preference?: InputMaybe<CdmPreferenceInput>;
};

export type UpdateCustomerPayload = Payload & {
  __typename?: "UpdateCustomerPayload";
  customer?: Maybe<CdmCustomer>;
  status: StatusEnum;
};

export type UpdateLoyaltyProfileRequest = {
  avgProfiling?: InputMaybe<AvgProfilingInput>;
  birthDate?: InputMaybe<Scalars["String"]["input"]>;
  buyingStampsPreference?: InputMaybe<Scalars["String"]["input"]>;
  checkoutPreferences?: InputMaybe<CheckoutPreferencesInput>;
  communication?: InputMaybe<CommunicationInput>;
  customerId?: InputMaybe<Scalars["String"]["input"]>;
  digitalStamps?: InputMaybe<DigitalStampsPreferencesInput>;
  homeAddress?: InputMaybe<LoyaltyAddressInput>;
  loyaltyProCustomerStatus?: InputMaybe<Scalars["String"]["input"]>;
  loyaltyProMainCards?: InputMaybe<LoyaltyProCardInput>;
  loyaltyProSubCards?: InputMaybe<LoyaltyProCardInput>;
  name?: InputMaybe<LoyaltyNameInput>;
  primaryPhone?: InputMaybe<PrimaryPhoneInput>;
  storePreferences?: InputMaybe<StorePreferencesInput>;
  termsAndConditions?: InputMaybe<TermsAndConditionsLoyaltyInput>;
};

export type UpdateLoyaltyProfileResponse = {
  __typename?: "UpdateLoyaltyProfileResponse";
  status?: Maybe<Scalars["Boolean"]["output"]>;
};

export enum UpdatePath {
  ITEMS = "ITEMS",
  VOUCHER_CODES = "VOUCHER_CODES",
}

export type UpdatePreferencesInput = {
  /** Customer birthday */
  birthDate?: InputMaybe<Scalars["Date"]["input"]>;
  /** Dietary preferences */
  dietary?: InputMaybe<DietaryPreferenceInput>;
  /** Newsletter preferences */
  newsletter?: InputMaybe<NewsletterPreferenceInput>;
  /** Personalization preferences */
  personalization?: InputMaybe<PersonalizationPreferenceInput>;
  /** PushNotification preferences */
  pushNotifications?: InputMaybe<PushNotificationPreferenceInput>;
  /** TestPanel preferences */
  testPanel?: InputMaybe<TestPanelPreferenceInput>;
};

export type UpdatePreferencesPayload = Payload & {
  __typename?: "UpdatePreferencesPayload";
  /** Customer birthday */
  birthDate?: Maybe<Scalars["Date"]["output"]>;
  /** Dietary preferences */
  dietary?: Maybe<DietaryPreference>;
  /** Newsletter preferences */
  newsletter?: Maybe<NewsletterPreference>;
  /** Personalization preferences */
  personalization?: Maybe<PersonalizationPreference>;
  /** PushNotification preferences */
  pushNotifications?: Maybe<PushNotificationPreference>;
  status: StatusEnum;
  /** TestPanel preferences */
  testPanel?: Maybe<TestPanelPreference>;
};

export type UpdateProductListInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  isPublic?: InputMaybe<Scalars["Boolean"]["input"]>;
  labels?: InputMaybe<Array<Scalars["String"]["input"]>>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateProductListItemInput = {
  listItemID: Scalars["String"]["input"];
  quantity: ProductQuantityInput;
};

export type UpdateSubByMasterInput = {
  b2bDetails?: InputMaybe<Cdmb2BDetailsInput>;
  contactInformation?: InputMaybe<ContactInformationInput>;
  preference?: InputMaybe<CdmPreferenceInput>;
  status?: InputMaybe<CustomerUpdateStatusEnum>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateUsernameInput = {
  newUsername: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  username: Scalars["String"]["input"];
};

export type UpdateUsernamePayload = Payload & {
  __typename?: "UpdateUsernamePayload";
  status: StatusEnum;
};

export type UpdatesInput = {
  items?: InputMaybe<Array<ItemInput>>;
  op: OperationType;
  path: UpdatePath;
  voucherCodes?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type UserServiceAddressInput = {
  /** For example -1C which is added on to the house number to show that it is a flat in a building */
  addition?: InputMaybe<Scalars["String"]["input"]>;
  /** For example Amsterdam */
  city?: InputMaybe<Scalars["String"]["input"]>;
  /** Used to assist with localization */
  country: CountryEnum;
  /** Usually a number in the Netherlands */
  houseNumber?: InputMaybe<Scalars["String"]["input"]>;
  /** For example 1234AB */
  postalCode: Scalars["String"]["input"];
  street?: InputMaybe<Scalars["String"]["input"]>;
  typeCode: AddressTypeEnum;
};

export type UserState = {
  __typename?: "UserState";
  buyingStampsBalance?: Maybe<BuyingStampsBalance>;
  cachedBalance?: Maybe<Scalars["Int"]["output"]>;
  digitalStampsCache?: Maybe<Scalars["JSON"]["output"]>;
  dismissedNotifications?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  foundEasterEggs?: Maybe<Scalars["JSON"]["output"]>;
  hasShownBalanceNotification1?: Maybe<Scalars["Boolean"]["output"]>;
  hasShownBalanceNotification2?: Maybe<Scalars["Boolean"]["output"]>;
  isMFAEnabled?: Maybe<Scalars["Boolean"]["output"]>;
  navigationHighlights?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  offers?: Maybe<Array<Maybe<UserStateOffer>>>;
  openedSavingStampsCampaigns?: Maybe<Scalars["JSON"]["output"]>;
};

export type UserStateInput = {
  buyingStampsBalance?: InputMaybe<BuyingStampsBalanceInput>;
  cachedBalance?: InputMaybe<Scalars["Int"]["input"]>;
  digitalStampsCache?: InputMaybe<Scalars["JSON"]["input"]>;
  dismissedNotifications?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  foundEasterEggs?: InputMaybe<Scalars["JSON"]["input"]>;
  hasShownBalanceNotification1?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasShownBalanceNotification2?: InputMaybe<Scalars["Boolean"]["input"]>;
  isMFAEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  navigationHighlights?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  offers?: InputMaybe<Array<InputMaybe<UserStateOfferInput>>>;
  openedSavingStampsCampaigns?: InputMaybe<Scalars["JSON"]["input"]>;
};

export type UserStateOffer = {
  __typename?: "UserStateOffer";
  amountRedeemed: Scalars["Int"]["output"];
  id: Scalars["String"]["output"];
};

export type UserStateOfferInput = {
  amountRedeemed: Scalars["Int"]["input"];
  id: Scalars["String"]["input"];
};

export type VagueTerm = {
  __typename?: "VagueTerm";
  id?: Maybe<Scalars["String"]["output"]>;
  lastModified?: Maybe<Scalars["String"]["output"]>;
  term?: Maybe<Scalars["String"]["output"]>;
};

export type VagueTermInput = {
  term: Scalars["String"]["input"];
};

export type VoucherCode = {
  __typename?: "VoucherCode";
  code: Scalars["String"]["output"];
};

export type AmendOrderAlternativeProductsQueryVariables = Exact<{
  skus: Array<Scalars["String"]["input"]> | Scalars["String"]["input"];
  referenceDate: Scalars["String"]["input"];
  storeId: Scalars["String"]["input"];
}>;

export type AmendOrderAlternativeProductsQuery = {
  __typename?: "Query";
  productList?: Array<{
    __typename?: "Product";
    sku?: string | null;
    alternatives?: Array<{
      __typename?: "Product";
      sku?: string | null;
    } | null> | null;
  } | null> | null;
};

export const AmendOrderAlternativeProductsDocument = gql`
  query AmendOrderAlternativeProducts(
    $skus: [String!]!
    $referenceDate: String!
    $storeId: String!
  ) {
    productList(skus: $skus, storeId: $storeId, date: $referenceDate) {
      sku
      alternatives {
        sku
      }
    }
  }
`;

/**
 * __useAmendOrderAlternativeProductsQuery__
 *
 * To run a query within a Vue component, call `useAmendOrderAlternativeProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAmendOrderAlternativeProductsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAmendOrderAlternativeProductsQuery({
 *   skus: // value for 'skus'
 *   referenceDate: // value for 'referenceDate'
 *   storeId: // value for 'storeId'
 * });
 */
export function useAmendOrderAlternativeProductsQuery(
  variables:
    | AmendOrderAlternativeProductsQueryVariables
    | VueCompositionApi.Ref<AmendOrderAlternativeProductsQueryVariables>
    | ReactiveFunction<AmendOrderAlternativeProductsQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        AmendOrderAlternativeProductsQuery,
        AmendOrderAlternativeProductsQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          AmendOrderAlternativeProductsQuery,
          AmendOrderAlternativeProductsQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          AmendOrderAlternativeProductsQuery,
          AmendOrderAlternativeProductsQueryVariables
        >
      > = {},
) {
  return VueApolloComposable.useQuery<
    AmendOrderAlternativeProductsQuery,
    AmendOrderAlternativeProductsQueryVariables
  >(AmendOrderAlternativeProductsDocument, variables, options);
}
export function useAmendOrderAlternativeProductsLazyQuery(
  variables?:
    | AmendOrderAlternativeProductsQueryVariables
    | VueCompositionApi.Ref<AmendOrderAlternativeProductsQueryVariables>
    | ReactiveFunction<AmendOrderAlternativeProductsQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        AmendOrderAlternativeProductsQuery,
        AmendOrderAlternativeProductsQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          AmendOrderAlternativeProductsQuery,
          AmendOrderAlternativeProductsQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          AmendOrderAlternativeProductsQuery,
          AmendOrderAlternativeProductsQueryVariables
        >
      > = {},
) {
  return VueApolloComposable.useLazyQuery<
    AmendOrderAlternativeProductsQuery,
    AmendOrderAlternativeProductsQueryVariables
  >(AmendOrderAlternativeProductsDocument, variables, options);
}
export type AmendOrderAlternativeProductsQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    AmendOrderAlternativeProductsQuery,
    AmendOrderAlternativeProductsQueryVariables
  >;
