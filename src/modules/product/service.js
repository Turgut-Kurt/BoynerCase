import {axiosInstance as api} from '~/utils/axiosInstance';

/**
 * Get products service
 */
export const getProductsService = async () => {
  const response = await api.get('products');
  return response;
};
