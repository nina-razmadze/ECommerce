import { CartContext } from '@src/contexts/CartContext';
import { SCartImgWrapper } from './CartModal.styled';

import { useNavigate } from 'react-router-dom';
import { SCartItem } from './CartModal.styled';

import { FormattedMessage } from 'react-intl';
import { useContext, useState } from 'react';

type CartModalProps = {
  open: boolean;
  onClose: () => void;
};

export function CartModal({ open, onClose }: CartModalProps) {
  const { cartItem, setCartItem } = useContext(CartContext);
  const navigate = useNavigate();

  const removeItem = (id: any) => {
    const updatedCart = cartItem.filter((index) => index !== id);
    setCartItem(updatedCart);
  };

  const handleCloseClick = () => {
    if (cartItem.length === 0) {
      alert('Your cart is empty');
      onClose();
    } else {
      onClose();
      navigate('/pay');
    }
  };

  if (open) {
    return (
      <>
        <div
          id='defaultModal'
          aria-hidden='true'
          className=' fixed inset-0 flex items-center justify-center  '
        >
          <div
            className='overflow-y-scroll  rounded-lg shadow-lg w-full max-w-[800px] max-h-[500px] font-sans custom-scrollbar 
    '
          >
            <div className='relative bg-zinc-800 rounded-lg shadow dark:bg-gray-700 '>
              <div className='flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600'>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white text-white font-mono'>
                  <FormattedMessage id='Your Cart' />
                </h3>

                <button
                  onClick={onClose}
                  type='button'
                  className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
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
                  <span className='sr-only'>
                    <FormattedMessage id='Close modal' />
                  </span>
                </button>
              </div>

              <div className='pt-[30px] space-y-6'>
                {cartItem.map((item, id) => (
                  <SCartItem key={id}>
                    <SCartImgWrapper>
                      <img
                        className=' w-[200px] h-[150px]   rounded-r-lg'
                        src={item.images[0]}
                      ></img>
                    </SCartImgWrapper>
                    <div className='text-[18px] pr-[30px]  pl-[20px]'>
                      <h1 className='pb-[25px]'>
                        <FormattedMessage id='Title :' /> {item.title}
                      </h1>
                      <p>
                        <FormattedMessage id='description : good Telephone' />
                      </p>
                    </div>
                    <div className='pr-[10px] text-[25px]'>
                      <h1>
                        <FormattedMessage id='Price : $' /> {item.price}
                      </h1>
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
                      <span className='sr-only'>
                        <FormattedMessage id='Close modal' />
                      </span>
                    </button>
                  </SCartItem>
                ))}
              </div>

              <div className='flex justify-between items-end p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600'>
                <div className='pb-[8px] text-[18px] text-white'>
                  <FormattedMessage id='You need to register to buy something' />
                </div>
                <button
                  onClick={handleCloseClick}
                  data-modal-hide='defaultModal'
                  type='button'
                  className='text-gray-500 bg-purple-600 text-zinc-800 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-white-200 text-sm font-medium px-5 py-2.5 hover:bg-transparent hover:text-purple-600 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 '
                >
                  <FormattedMessage id='Buy Now' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
}
