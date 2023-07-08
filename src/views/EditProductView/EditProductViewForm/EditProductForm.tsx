import { useForm, SubmitHandler } from 'react-hook-form';
import {
  SProductInput,
  SSecondProductInput,
  SDescriptionInput,
} from '@src/views/NewProductView/SNewProduct.styled';
import { CardProps } from '@src/App';
import { useContext, useState } from 'react';
import { CartContext } from '@src/contexts/CartContext';
import { ProductContext } from '@src/contexts/ProductContext';
import axios from 'axios';
import { useEffect } from 'react';

interface IFormInput {
  title: string;
  color: any;
  category: string;
  description: any;
  price: number;
  brand: string;
}

interface EditProductViewProps {
  title: string;
  color: any;
  price: number;
  description: string;
  category: string;
  brand: string;
}

export default function EditProductForm() {
  const { productInfo, setProductInfo } = useContext(ProductContext);
  const { register, handleSubmit, reset, resetField, setValue } =
    useForm<IFormInput>();

  const [updateRequest, setUpdateRequest] = useState('');
  const [color, setColor] = useState('Gray');
  const [brand, setBrand] = useState('Apple');

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    axios
      .put(`https://dummyjson.com/products/1`, {
        title: data.title,
        color: data.color,
        price: data.price,
        category: data.category,
        description: data.description,
      })
      .then((response) => {
        console.log(response);
        setUpdateRequest('The update request has been sent');
        setTimeout(() => {
          setUpdateRequest('');
        }, 2000);
      })
      .catch((error) => {
        console.log('error');
      });
    emptyValue();
  };

  const handleChange = (event: any) => {
    setProductInfo(event.target.value);
  };
  const handleBrandChange = (e: any) => {
    setBrand(e.target.value);
  };
  const handleColorChange = (e: any) => {
    setColor(e.target.value);
  };
  const emptyValue = () => {
    reset({
      title: '',
      price: 0,
      description: '',
      category: '',
      color: '',
      brand: '',
    });
  };

  useEffect(() => {
    setValue('title', productInfo.title);
    setValue('price', productInfo.price);
    setValue('description', productInfo.description);
    setValue('category', productInfo.category);
    setValue('color', 'gray');
    setValue('brand', 'Apple');
  }, [productInfo]);

  return (
    <div>
      <div className='pt-[95px] pb-[171px] text-white  bg-zinc-800 grid justify-center'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex'>
            <h1 className='text-[28px] text-white pb-[30px] pt-[25px] '>
              Edit a Product
            </h1>
          </div>
          <div>
            <div className='text-white text-[20px] block mb-2'>
              <div>
                <label className='block mb-2'>Product Name</label>
                <SProductInput {...register('title')} />
              </div>
            </div>
          </div>
          <div className=' text-white text-[20px] grid grid-cols-2'>
            <div>
              <label className='block mb-2'>color</label>
              <SSecondProductInput {...register('color')} />
            </div>
            <div>
              <label className='block mb-2'>Brand</label>
              <SSecondProductInput {...register('brand')} />
            </div>
            <div>
              <label className='block mb-1'> Price</label>
              <SSecondProductInput
                {...register('price', {
                  pattern: {
                    value: /^\d+$/,
                    message: 'Price must be a number',
                  },
                })}
              />
            </div>
            <div>
              <label className='block mb-1'>Category</label>
              <SSecondProductInput {...register('category')} />
            </div>
          </div>
          <div>
            <label className='block mb-2 text-white text-[20px]'>
              Description
            </label>
            <SDescriptionInput {...register('description')} />
          </div>
          <div
            // onClick={updateUser}
            className='flex justify-between pr-[25px] mt-[10px]'
          >
            <input
              className='bg-purple-700 cursor-pointer  ml-[20px] text-white text-[20px] p-[10px] w-[200px] h-[50px] rounded-lg'
              type='submit'
              value='Apdate  User'
            />

            <div className='text-[22px] text-purple-600 pt-[10px]' role='alert'>
              {updateRequest}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
