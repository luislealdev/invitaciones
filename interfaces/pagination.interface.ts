export interface PaginationProps {
  page?: number;
  take?: number;
  search?: string;
  startDate?: string;
  endDate?: string;
  sellerId?: number;
  customerId?: number;
  assignatedToId?: number;
  categoryId?: number;
  isActive?: boolean;
  role?: string;
  excludedRole?: string;
  studioId?: number;
  storeId?: number;
  paymentMethodId?: number;
  brandId?: number;
  brandIds?: number[];
  minPrice?: number;
  maxPrice?: number;
  supplierId?: number;
  examId?: number;
  withStock?: Boolean;
  categories?: string[];
  channelId?: number;
  stageId?: number;
  minAge?: number;
  maxAge?: number;
  ageCondition?: string;
  minTicket?: number;
  excludeZeroTickets?: boolean;
  uniqueClientsOnly?: boolean;
}

export interface ISearchParams {
  page?: string;
  take?: string;
  search?: string;
  channelId?: string;
  stageId?: string;
  sellerId?: string;
  customerId?: string;
  storeId?: string;
  paymentMethodId?: string;
  categoryId?: string;
  category?: string;
  categories?: string;
  assignatedToId?: string;
  startDate?: string;
  endDate?: string;
  role?: string;
  brandId?: string;
  brandIds?: string;
  minPrice?: string;
  maxPrice?: string;
  supplierId?: string;
  examId?: string;
  gender?: string;
  status?: string;
  surveyId?: string;
  s?: string;
  userId?: string;
  metricsStartDate?: string;
  metricsEndDate?: string;
  metricsStoreId?: string;
  metricsPromotionId?: string;
  fundPage?: string;
  token?: string;
  reset?: string;
  set?: string;
  paymentType?: string;
  redirect?: string;
  showInactive?: string;
  tab?: string;
  month?: string;
  minAge?: string;
  maxAge?: string;
  ageCondition?: string;
  minTicket?: string;
  excludeZeroTickets?: string;
  uniqueClientsOnly?: string;
}

export interface PaginatedComponentProps<T> {
  data: T[];
  total: number;
  totalPages: number;
  page?: number;
  take?: number;
  search?: string;
  isAdmin?: boolean;
}

export interface UpdateURLParams {
  startDate?: string;
  endDate?: string;
  page?: number;
  take?: number;
  search?: string;
  status?: string;
  statuses?: string;
  role?: string | number;
  year?: number | string;
  month?: number | string;
  fortnight?: number | string;
  showNonDelivered?: boolean | string;
  [key: string]: any;
}

