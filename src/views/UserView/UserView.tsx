import { SBackColor } from './SUserView.styled';
import {
  SColumn,
  SColumns,
  SList,
  SListItem,
  SSecondColumn,
} from './SUserView.styled';
import { Link } from 'react-router-dom';
import EditReportView from './EditReportView/EditReportView';
import { useContext, useState } from 'react';
import { CartContext } from '@src/contexts/CartContext';
import { CartModal } from '@src/components/CartModal';
import { UserCartModal } from './SUserView.styled';
import MyFavoritesView from '../MyFavoritesView/MyFavoritesView';

export default function UserView() {
  const { cartItem, setCartItem } = useContext(CartContext);
  const [cartModal, setCartModal] = useState<boolean>(false);
  const [editReport, setEditReport] = useState(false);
  const [MyFavorites, setMyFavorites] = useState(false);

  const handleEditReport = () => {
    setEditReport(true);
    setMyFavorites(false);
    setCartModal(false);
  };

  const handleFavorite = () => {
    setEditReport(false);
    setCartModal(false);
    setMyFavorites(true);
  };

  return (
    <SBackColor>
      <div className='w-[75%] bg-zinc-800 m-auto flex justify-between'>
        <div className='bg-zinc-700 h-[540px] rounded-3xl w-[350px] ml-[50px]'>
          <SList>
            <SListItem onClick={handleEditReport}>Edit report</SListItem>
            <Link to='/user'>
              <SListItem onClick={handleFavorite}>my favorites</SListItem>
            </Link>
            <SListItem onClick={() => setCartModal(true)}>my cart</SListItem>
          </SList>
        </div>

        <div className='bg-zinc-700 w-[900px] mr-[50px]'>
          {MyFavorites && <MyFavoritesView />}
          {editReport && <EditReportView />}
          {cartModal && (
            <CartModal
              cartItem={cartItem}
              open={cartModal}
              onClose={() => setCartModal(false)}
            />
          )}
        </div>
      </div>
    </SBackColor>
  );
}
