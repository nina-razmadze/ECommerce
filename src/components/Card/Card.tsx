import { useContext, useEffect, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { CartContext } from '@src/contexts/CartContext';
import { ProductContext } from '@src/contexts/ProductContext';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { AiFillEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { FavProductContext } from '@src/contexts/FavProductContext';
import { CardData } from '@src/views/ProductView/ProductView';
import { CardProps } from '@src/App';
import { useNavigate } from 'react-router-dom';

export function Card({
  desc,
  price,
  title,
  images,
  id,
  product,
  category,
}: CardProps) {
  const { cartItem, setCartItem } = useContext(CartContext);
  const navigate = useNavigate();
  const { favProduct, setFavProduct } = useContext(FavProductContext);

  const onSubmit: SubmitHandler<CardProps> = (data) => {
    setCartItem((prev) => [...prev, data]);
  };
  // const handleSubmit: SubmitHandler<CardProps> = (data) => {
  //   setCartItem((prev) => [...prev, data]);
  // };
  const handleClick = () => {
    const itemExists = cartItem.some((item) => item.id === id);
    if (itemExists) {
      alert('Item already in cart');
    } else {
      onSubmit({ price, title, images, desc, id, product, category });
      alert('Item added to cart');
    }
  };

  const handleFavoriteClick = () => {
    const itemAlreadyExists = favProduct.some((item) => item.id === id);
    if (itemAlreadyExists) {
      alert('Item already in Favorite Products');
    } else {
      const favoriteData: CardProps = {
        price,
        title,
        images,
        desc,
        id,
        product,
        category,
      };
      setFavProduct((prev) => [...prev, favoriteData]);
      alert('Item added in Favorite Products');

      console.log(favProduct);
    }
  };

  return (
    <>
      {images.map((image, index) => (
        <div
          key={id}
          className=' max-w-sm cursor-pointer hover:opacity-70 	w-[275px] border-x-0		 rounded-lg border-gray-200 overflow-hidden '
        >
          <a href='#'>
            <Link to={`/products/${id}`}>
              <img
                className='w-full h-[180px] object-cover opacity-100 transition-opacity duration-300 '
                src={image}
                alt={`Image ${index + 1}`}
              />
            </Link>
          </a>
          <div className='px-5 pb-5 bg-purple-700'>
            <a href='#'>
              <h2 className='text-xl text-white pt-5 font-semibold tracking-tight text-gray-900 '>
                {title}
              </h2>
            </a>
            <div className='flex items-center mt-2.5 mb-5'>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-yellow-300'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>First star</title>
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
              </svg>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-yellow-300'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Second star</title>
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
              </svg>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-yellow-300'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Third star</title>
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
              </svg>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-yellow-300'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Fourth star</title>
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
              </svg>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-yellow-300'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Fifth star</title>
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
              </svg>
              <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3'>
                5.0
              </span>
            </div>
            <div className='flex items-center justify-between'>
              <span className='text-3xl font-bold text-gray-900 dark:text-white'>
                ${price}
              </span>
              <button
                onClick={handleClick}
                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-[100px]'
              >
                <FormattedMessage id='Add to cart' />
              </button>
              <button>
                <BsFillSuitHeartFill onClick={handleFavoriteClick} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
