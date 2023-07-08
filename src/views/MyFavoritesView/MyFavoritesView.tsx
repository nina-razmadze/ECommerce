import { SDivContainer } from '../UserView/EditReportView/SEditReportView.styled';
import { useState } from 'react';
import { SUser } from '../UserView/EditReportView/SEditReportView.styled';
import girlAvatar from '../../images/girlAvatar.jpg';
import boyAvatar from '../../images/boyAvatar.jpg';
import defaultAvatar from '../../images/defaultAvatar.jpg';
import watch from '../../images/watch.jpg';
import { Card } from '@src/components/Card';
import { useContext } from 'react';
import { CartContext } from '@src/contexts/CartContext';
import {
  SSubmitButton,
  SForm,
  SInput,
} from '../UserView/EditReportView/SEditReportView.styled';
import { SCartIcon } from '@src/layouts/publiclayout/Header/SHeader.styled';
import { SCartItem } from '@src/components/CartModal/CartModal.styled';
import { SCartImgWrapper } from '@src/components/CartModal/CartModal.styled';
import { ProductContext } from '@src/contexts/ProductContext';
export default function MyFavoritesView() {
  const { cartItem, setCartItem } = useContext(CartContext);
  const { productInfo, setProductInfo } = useContext(ProductContext);

  const [isInputValid, setIsInputValid] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [avatarImage, setAvatarImage] = useState();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  enum GenderEnum {
    female = 'female',
    male = 'male',
  }

  interface IFormInput {
    firstName: string;
    lastName: string;
    email: any;
    password: any;
    gender: GenderEnum;
  }

  const removeItem = (id: any) => {
    const updatedCart = cartItem.filter((index) => index !== id);
    setCartItem(updatedCart);
  };

  return (
    <SDivContainer>
      <SUser>
        {selectedValue === GenderEnum.female ? (
          <img
            className='w-[70px] h-[70px] rounded-full '
            src={girlAvatar}
            alt='girl avatar'
          />
        ) : selectedValue === GenderEnum.male ? (
          <img
            className='w-[70px] h-[70px] rounded-full'
            src={boyAvatar}
            alt='boy avatar'
          />
        ) : (
          <img
            className='w-[70px] h-[70px] rounded-full  bg-zinc-800'
            src={defaultAvatar}
          />
        )}

        <div className='pt-[15px] text-[25px] pl-[20px] flex'>
          <h1 className='pr-[17px]'> {firstName || 'First Name'}</h1>
          <h1>{lastName || 'Last Name'}</h1>
        </div>
      </SUser>

      <div className='h-[450px] overflow-scroll '>
        {cartItem.map((item, id) => (
          <SCartItem key={id}>
            <img
              className='w-[200px] h-[150px]  rounded-r-lg'
              src={item.images[0]}
            ></img>
            <div className='text-[18px] pr-[30px]  pl-[20px]'>
              <h1 className='pb-[25px]'>Title : {item.title}</h1>
              <p>description : good Telephone</p>
            </div>
            <div className='pr-[10px] text-[25px]'>
              <h1>Price : $ {item.price}</h1>
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
              <span className='sr-only '>Close modal</span>
            </button>
          </SCartItem>
        ))}
      </div>
    </SDivContainer>
  );
}
