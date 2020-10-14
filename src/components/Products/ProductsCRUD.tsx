import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Table, { TableHeader } from '../../shared/Table';
import { Product } from '../../shared/Table/Table.mockdata';
import ProductForm, { ProductCreator } from './ProductForm';
import { connect, useDispatch } from 'react-redux'
import * as ProductsAction from '../../redux/Products/Products.actions';
import { RootState } from '../../redux';

const headers: TableHeader[] = [
  { key: 'id', value: '#' },
  { key: 'name', value: 'Product' },
  { key: 'price', value: 'Price', right: true },
  { key: 'stock', value: 'Available Stock', right: true },
];

declare interface ProductsCRUDProps {
    products: Product[]
}

const ProductsCRUD: React.FC<ProductsCRUDProps> = (props) => {
  const dispatch = useDispatch()
  // const [products, setProducts] = useState<Product[]>([]);
  const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>(
    undefined
  );

  async function fetchData() {
    try {
      await dispatch(ProductsAction.getProducts());
    } catch (err) {
        Swal.fire('Oops!', err.message, 'error')
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleProductSubmit = async (product: ProductCreator) => {
    try {
      dispatch(ProductsAction.insertNewProduct(product))
    } catch (err) {
      Swal.fire('Ooops!', err.message, 'error');
    }
  };

  const handleProductUpdate = async (newProduct: Product) => {
    try {
      await dispatch(ProductsAction.updateProduct(newProduct));
      setUpdatingProduct(undefined); // clear the form
    } catch (err) {
      Swal.fire('Ooops!', err.message, 'error');
    }
  };

  const deleteProduct = async (id: string) => {
    try {
      await dispatch(ProductsAction.deleteProduct(id));
      Swal.fire('Uhul!', 'Product successfully deleted!', 'success');
    } catch (err) {
      Swal.fire('Ooops!', err.message, 'error');
    }
  };

  const handleProductDelete = (product: Product) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#09F',
      cancelButtonColor: '#d33',
      confirmButtonText: `Yes, delete ${product.name}!`,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(product._id);
      }
    });
  };

  const handleProductDetail = (product: Product) => {
    Swal.fire(
      'Product details',
      `${product.name} costs ${product.price}. There are ${product.stock} available.`,
      'info'
    );
  };

  const handleProductEdit = (product: Product) => {
    setUpdatingProduct(product);
  };
  return (
    <>
      <Table
        headers={headers}
        data={props.products}
        enableActions
        onDelete={handleProductDelete}
        onDetail={handleProductDetail}
        onEdit={handleProductEdit}
      />

      <ProductForm
        form={updatingProduct}
        onSubmit={handleProductSubmit}
        onUpdate={handleProductUpdate}
      />
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
    products: state.products
})

export default connect(mapStateToProps)(ProductsCRUD);
