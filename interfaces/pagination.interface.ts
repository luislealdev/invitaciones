export interface PaginationProps {
  page?: number;
  take?: number;
  search?: string;
  startDate?: string;
  endDate?: string;
  categoryId?: number;
  isActive?: boolean;
  role?: string;
}

export interface ISearchParams {
  page?: string;
  take?: string;
  search?: string;
  startDate?: string;
  endDate?: string;
  role?: string;
  gender?: string;
  status?: string;
  userId?: string;
  fundPage?: string;
  token?: string;
  reset?: string;
  set?: string;
  redirect?: string;
  showInactive?: string;
  tab?: string;
  month?: string;
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
  role?: string | number;
  year?: number | string;
  month?: number | string;
  [key: string]: any;
}

