import { Product } from './../../shared/Table/Table.mockdata';
import { Thunk } from './../index';
import { getAllProducts } from './../../services/Products.service';
import { ProductCreator } from './../../components/Products/ProductForm';
import { Action } from '..';

export const getProducts = (): Thunk<Product[]> => async (dispatch) => {
  const products = await getAllProducts();
  console.log('fetched')
  dispatch({
    type: 'FETCH_PRODUCTS',
    payload: products,
  });
};

export const insertNewProduct = (
  payload: ProductCreator
): Action<ProductCreator> => {
  return {
    type: 'INSERT_NEW_PRODUCT',
    payload,
  };
};
