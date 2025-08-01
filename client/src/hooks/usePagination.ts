import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

interface UsePaginationProps {
  totalItems: number;
  itemsPerPage: number;
  showPagination: boolean;
}

interface UsePaginationReturn {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
  handlePageChange: (page: number) => void;
}

export const usePagination = ({
  totalItems,
  itemsPerPage,
  showPagination,
}: UsePaginationProps): UsePaginationReturn => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [location.search]);

  const totalPages = useMemo(() => {
    if (!showPagination) return 1;
    return Math.max(1, Math.ceil(totalItems / itemsPerPage));
  }, [totalItems, itemsPerPage, showPagination]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return {
    currentPage,
    totalPages,
    setCurrentPage,
    handlePageChange,
  };
};
