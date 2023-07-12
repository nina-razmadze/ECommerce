import { SDivContainer } from '../EditReportView/SEditReportView.styled';
import { useState } from 'react';
import { SUser } from '../EditReportView/SEditReportView.styled';
import girlAvatar from '../../../images/girlAvatar.jpg';
import boyAvatar from '../../../images/boyAvatar.jpg';
import defaultAvatar from '../../../images/defaultAvatar.jpg';

import watch from '../../images/watch.jpg';
import { Card } from '@src/components/Card';
import { useContext } from 'react';
import { CartContext } from '@src/contexts/CartContext';
import {
  SSubmitButton,
  SForm,
  SInput,
} from '../EditReportView/SEditReportView.styled';
import { SCartIcon } from '@src/layouts/publiclayout/Header/SHeader.styled';
import { SCartItem } from '@src/components/CartModal/CartModal.styled';
import { SCartImgWrapper } from '@src/components/CartModal/CartModal.styled';
import { ProductContext } from '@src/contexts/ProductContext';
import { FormattedMessage } from 'react-intl';
import { FavProductContext } from '@src/contexts/FavProductContext';
import { useNavigate } from 'react-router-dom';

enum GenderEnum {
  female = 'female',
  male = 'male',
}

export default function MyFavoritesView() {
  const navigate = useNavigate();
  const { favProduct, setFavProduct } = useContext(FavProductContext);

  const removeItem = (id: any) => {
    const updatedCart = favProduct.filter((index) => index !== id);
    setFavProduct(updatedCart);
  };

  const handleCloseClick = () => {
    if (favProduct.length === 0) {
      alert(`You don't have favorite Product`);
    } else {
      navigate('/pay');
    }
  };

  return (
    <SDivContainer>
      <div className='h-[474px] w-[700px] overflow-scroll  mb-[20px]  '>
        {favProduct.map((item, id) => (
          <SCartItem key={id}>
            <img
              className='w-[160px] h-[150px]  rounded-r-lg '
              src={item.images[0]}
            ></img>
            <div className='text-[18px] pr-[30px]  pl-[20px]'>
              <h1 className='pb-[25px]'>
                <FormattedMessage id='Title :' /> {item.title}
              </h1>
              <FormattedMessage id='description : good Telephone' />
            </div>
            <div className='pr-[10px] text-[25px]'>
              <FormattedMessage id='Price : $' /> {item.price}
            </div>
            <button
              onClick={() => removeItem(item)}
              type='button'
              className=' pb-[90px] pr-[20px] text-gray-400 bg-transparent  hover:text-white-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center '
              data-modal-hide='defaultModal'
            >
              <svg
                aria-hidden='true'
                className='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </button>
          </SCartItem>
        ))}
      </div>
      <button
        onClick={handleCloseClick}
        data-modal-hide='defaultModal'
        type='button'
        className=' bg-purple-600  hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-white-200  font-medium px-5 py-2.5 hover:bg-transparent hover:text-purple-600 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 text-white text-[16px]'
      >
        <FormattedMessage id='Buy Now' />
      </button>
    </SDivContainer>
  );
}
