import { SCartItem } from './CartModal.styled';

import test from '../../images/test.jpg';
import close from '../../images/close.png';

import { SCartImgWrapper } from './CartModal.styled';
import { SCartCloseIcon } from './CartModal.styled';
type CartModalProps = {
  open: boolean;
  onClose: () => void;
};
export function CartModal({ open, onClose }: CartModalProps) {
  if (open) {
    return (
      <>
        <div
          id='defaultModal'
          aria-hidden='true'
          className='top-[100px]  z-50 w-full  absolute    md:inset-0 h-[calc(100%-1rem)] '
        >
          <div
            className='relative w-full max-w-2xl max-h-full  top-[23%] left-[30%] font-serif
 '
          >
            <div className='relative bg-zinc-800 rounded-lg shadow dark:bg-gray-700'>
              <div className='flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600'>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white text-white font-mono'>
                  Your Cart
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
                  <span className='sr-only '>Close modal</span>
                </button>
              </div>

              <div className='p-6 space-y-6'>
                <SCartItem>
                  <SCartImgWrapper>
                    <img src={test}></img>
                  </SCartImgWrapper>
                  <div>
                    Title
                    <p>description</p>
                  </div>
                  <div>price</div>
                  <SCartCloseIcon>
                    <img src={close}></img>
                  </SCartCloseIcon>
                </SCartItem>
                <SCartItem>2</SCartItem>
                <SCartItem>3</SCartItem>
              </div>

              <div className='flex justify-end items-end p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600'>
                <button
                  data-modal-hide='defaultModal'
                  type='button'
                  className='text-gray-500 bg-purple-600 text-zinc-800 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-white-200 text-sm font-medium px-5 py-2.5 hover:bg-transparent hover:text-purple-600 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 '
                >
                  Buy Now
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
