import axios from 'axios';
import { useState } from 'react';

interface ProductProps {
  open: Boolean;
  data: any;
}

export default function AdminView() {
  const [ProductToEdit, setProductToEdit] = useState(null);

  // console.log(data);
  // console.log(open);
  // axios.put('https://dummyjson.com/products/1', ProductToEdit);
  // if (open) {
  return (
    <div className='bg-zinc-800 '>
      <h1 className='text-[28px] text-white pt-[130px]  pl-[200px]'>
        Products
      </h1>

      <div className=' text-white pt-[60px] pb-[104px] m-auto w-[80%] relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-[16px] text-white uppercase bg-gray-50 dark:bg-gray-700   bg-purple-700'>
            <tr>
              <th scope='col' className='px-6 py-7 '>
                title
              </th>
              <th scope='col' className='px-6 py-7'>
                Color
              </th>
              <th scope='col' className='px-6 py-7'>
                Category
              </th>
              <th scope='col' className='px-6 py-7'>
                Price
              </th>
              <th scope='col' className='px-6 py-7'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=' bg-purple-500  text-white dark:bg-gray-900 dark:border-gray-700  '>
              <th
                scope='row'
                className='px-6 py-4 text-white font-medium  whitespace-nowrap dark:text-white'
              >
                Apple MacBook Pro 17"
              </th>
              <td className='px-6 py-7'>Silver</td>
              <td className='px-6 py-7'>Laptop</td>
              <td className='px-6 py-7'>$2999</td>
              <td className='px-6 py-7'>
                <a
                  href='#'
                  className='font-medium text-white dark:text-blue-500 hover:underline'
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className=' text-white bg-purple-700  bg-gray-50 dark:bg-gray-800 dark:border-gray-700'>
              <th
                scope='row'
                className='px-6 py-7 font-medium  text-white whitespace-nowrap dark:text-white'
              >
                Microsoft Surface Pro
              </th>
              <td className='px-6 py-7'>White</td>
              <td className='px-6 py-7'>Laptop PC</td>
              <td className='px-6 py-7'>$1999</td>
              <td className='px-6 py-7'>
                <a
                  href='#'
                  className='font-medium text-white dark:text-blue-500 hover:underline'
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className='bg-purple-500  dark:bg-gray-900 dark:border-gray-700'>
              <th
                scope='row'
                className='px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white'
              >
                Magic Mouse 2
              </th>
              <td className='px-6 py-7 text-white'>Black</td>
              <td className='px-6 py-7 text-white'>Accessories</td>
              <td className='px-6 py-7 text-white'>$99</td>
              <td className='px-6 py-7 text-white'>
                <a
                  href='#'
                  className='font-medium text-white dark:text-blue-500 hover:underline'
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className='  bg-purple-700  bg-gray-50 dark:bg-gray-800 dark:border-gray-700'>
              <th
                scope='row'
                className='px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white'
              >
                Google Pixel Phone
              </th>
              <td className='px-6 py-7 text-white'>Gray</td>
              <td className='px-6 py-7 text-white'>Phone</td>
              <td className='px-6 py-7 text-white'>$799</td>
              <td className='px-6 py-7 text-white'>
                <a
                  href='#'
                  className='font-medium text-white dark:text-blue-500 hover:underline'
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className='bg-purple-500'>
              <th
                scope='row'
                className='px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white'
              >
                Apple Watch 5
              </th>
              <td className='px-6 py-7 text-white'>Red</td>
              <td className='px-6 py-7 text-white'>Wearables</td>
              <td className='px-6 py-7 text-white'>$999</td>
              <td className='px-6 py-7 text-white'>
                <a
                  href='#'
                  className='font-medium text-white dark:text-blue-500 hover:underline'
                >
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
  // } else {
  //   return <></>;
  // }
}
