
class PaginatedData<T> {
  pageNumber?: number;
  pageSize?: number;
  firstPage?: string;
  lastPage?: string;
  totalPages?: number;
  totalRecords?: number;
  nextPage?: string;
  previousPage?: string;
  currentPage?: string;
  data?: T[];
}

export default PaginatedData;
