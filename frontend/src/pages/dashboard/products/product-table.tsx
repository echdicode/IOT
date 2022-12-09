import { useEffect, useState } from 'react';
import { Button, Image, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import {FaEdit, FaStreetView, FaTrash} from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import DashboardLayout from '../../../components/layouts/dashboard-layout';
import ProductModal from '../../../components/modals/product-modal';
import TableContainer from '../../../components/UI/table-contrainer';
import { useAppDispatch, useAppSelector } from '../../../redux';
import authAxios from '../../../utils/auth-axios';
import { setError } from '../../../utils/error';
import { formatCurrencry, getDate } from '../../../utils/helper';
import {getProducts} from "../../../redux/products/slice-list";
import Loader from "../../../components/UI/loader";

// Then, use it in a component.
function ProductTable() {
  const dispatch = useAppDispatch();
  const { products,loading } = useAppSelector(
    (state) => state.productList
  );
  const [refresh, setRefresh] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const params = useParams();
  const onOpen = () => setShow(true);
  const onClose = () => setShow(false);

  const cols = [
    'id',
    'address',
    'fire_center',
    'code',
    'start_at',
    'options',
  ];
  const openTab=(address:any,fire_center:any) =>{
    window.open(`https://www.google.com/maps/dir/${fire_center}/${address}/`);

  }
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch, refresh]);

  return (
    <DashboardLayout>
      {loading ? (
          <Loader />
      ) : (
        <Row className='py-3'>
          <TableContainer cols={cols}>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.address}</td>
                <td>{product.fire_center}</td>
                <td>{product.code}</td>
                <td>{getDate(product?.startAt)}</td>
                <td>
                  <button
                      onClick={()=>openTab(product.address,product.fire_center)}
                  >
                    <FaStreetView />
                  </button>
                </td>

              </tr>
            ))}
          </TableContainer>
        </Row>)}
      <ProductModal setRefresh={setRefresh} show={show} handleClose={onClose} />
    </DashboardLayout>
  );
}

export default ProductTable;
