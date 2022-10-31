import {axiosInstance as api} from '~/utils/axiosInstance';

/**
 * Get products service
 */
export const getProductsService = async () => {
  const response = await api.get('products');
  return response;
};

/**
 * Get filter service
 */
export const getFilterService = async () => {
  const response = await api.get('filter');
  return response;
};
