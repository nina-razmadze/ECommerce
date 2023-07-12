import { useForm, SubmitHandler } from 'react-hook-form';
import { SInput } from '../UserView/EditReportView/SEditReportView.styled';
import { SProductInput } from './SNewProduct.styled';
import { SSecondProductInput } from './SNewProduct.styled';
import { SDescriptionInput } from './SNewProduct.styled';
import axios from 'axios';
import { useState, useEffect } from 'react';
import AdminView from '../AdminView/AdminView';
import { Link } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';

interface IFormInput {
  productName: string;
  color: any;
  category: string;
  description: any;
  price: number;
  brand: string;
}

export default function NewProductView() {
  const intl = useIntl();
  const { register, handleSubmit, reset, resetField } = useForm<IFormInput>();
  const [postRequest, setPostRequest] = useState('');
  const [productData, setProductData] = useState('');
  const [openProduct, setOpenProduct] = useState(false);
  // ------------------------------   post request ------------------------------
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    axios
      .post('https://dummyjson.com/products/add', {
        title: data.productName,
        color: data.color,
        price: data.price,
        category: data.category,
        description: data.description,
        brand: data.brand,
      })
      .then((response) => {
        console.log(response);
        setPostRequest('The request has been sent');
        setTimeout(() => {
          setPostRequest('');
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
    emptyValue();
  };
  const emptyValue = () => {
    reset();
  };

  const handleOpenProduct = () => {
    setOpenProduct(true);
    console.log('dfv');
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='pt-[73px] text-white  bg-zinc-800 grid justify-center'
      >
        <div className='flex'>
          <h1 className='text-[28px] text-white pb-[30px] pt-[25px] '>
            <FormattedMessage id='Add A New Product' />
          </h1>
          {/* <Link to='/adminView'>
            <h1
              className='text-[25px] pt-[30px] pl-[100px]'
              onClick={handleOpenProduct}
            >
              <FormattedMessage id='Products' />
            </h1>
          </Link>
          <AdminView open={openProduct} data={register} /> */}
        </div>
        <div>
          <label className='text-white text-[20px] block mb-2'>
            <FormattedMessage id='Product Name' />
          </label>
          <SProductInput {...register('productName', { required: true })} />
        </div>
        <div className=' text-white text-[20px] grid grid-cols-2'>
          <div>
            <label className='block mb-2'>
              <FormattedMessage id='Color' />
            </label>
            <SSecondProductInput {...register('color', { required: true })} />
          </div>
          <div>
            <label className='block mb-2'>
              <FormattedMessage id='Brand' />
            </label>
            <SSecondProductInput {...register('brand', { required: true })} />
          </div>
          <div>
            <label className='block mb-1'>
              <FormattedMessage id='Price' />
            </label>
            <SSecondProductInput {...register('price', { required: true })} />
          </div>
          <div>
            <label className='block mb-1'>
              <FormattedMessage id='Category' />
            </label>
            <SSecondProductInput
              {...register('category', { required: true })}
            />
          </div>
        </div>
        <div>
          <label className='block mb-2 text-white text-[20px]'>
            <FormattedMessage id='Description' />
          </label>
          <SDescriptionInput {...register('description', { required: true })} />
        </div>
        <div className='flex justify-between pr-[25px] mt-[10px]'>
          <input
            className='bg-purple-700  ml-[20px] text-white text-[20px] p-[10px] w-[200px] h-[50px] rounded-lg'
            type='submit'
            value={intl.formatMessage({
              id: 'Submit',
            })}
          />

          <div className='text-[22px] text-purple-600 pt-[10px]' role='alert'>
            {postRequest}
          </div>
        </div>
      </form>
    </div>
  );
}
