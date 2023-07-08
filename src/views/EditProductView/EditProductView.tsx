import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '@src/contexts/ProductContext';
import { useContext } from 'react';
import axios from 'axios';

export default function EditProductView() {
  interface CardData {
    id: number;
    title: string;
    images: string[];
    price: string;
    description: string;
    category: string;
    product: string | number;
  }

  const [data, setData] = useState<CardData[]>([]);
  const [offset, setOffset] = useState(0);
  const navigate = useNavigate();
  const { productInfo, setProductInfo } = useContext(ProductContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products?offset=${offset}&limit=5`
        );
        const fetchdata = await res.json();
        setData((prev) => [...prev, ...fetchdata.products]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [offset]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const currentHeight =
        document.documentElement.scrollTop + window.innerHeight;
      if (currentHeight + 1 >= scrollHeight) {
        setOffset((prevOffset) => prevOffset + 5);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleUpdateClick = (data: any) => {
    setProductInfo({
      category: 'smartPhones',
      title: data.title,
      price: data.price,
      description: data.description,
      color: data.color,
    });
    navigate('/editProductForm');
  };

  const handleDeleteClick = (id: any) => {
    axios
      .delete(`https://dummyjson.com/products/${id}`, {})
      .then((response) => {
        alert('Product has deleted');
        console.log(response);
      })
      .catch((error) => {
        console.log('error');
      });
  };

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/1`)
      .then((res) => console.log(res.data));
  });
  return (
    <div className='bg-zinc-800 mx-auto '>
      <div className='bg-zinc-800'>
        <h1 className='text-[28px] text-white pt-[80px] pl-[200px]'>
          Products
        </h1>
        <div className='text-white pt-[60px] pb-[104px] m-auto w-[80%] relative overflow-x-auto shadow-md sm:rounded-lg'>
          <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-[16px] text-white uppercase bg-gray-50 dark:bg-gray-700 bg-purple-700'>
              <tr>
                <th scope='col' className='px-6 py-7'>
                  Title
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
                <th scope='col' className='px-6 py-7'>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((product) => (
                <tr
                  key={product.id}
                  className='border-b-2 border-purple-700 bg-purple-500 text-white  dark:bg-gray-900 dark:border-gray-700'
                >
                  <th
                    scope='row'
                    className='px-6 py-4 text-white text-[20px] font-medium dark:text-white'
                  >
                    {product.title}
                  </th>
                  <td className='px-6 py-7 text-[20px]  '>
                    {product.category}
                  </td>
                  {/* <td className='px-6 py-7'>{product.color}</td> */}
                  <td className='px-6 py-7 text-[20px]'> ${product.price}</td>
                  <td className='px-6 py-7 text-[20px] '>
                    {/* <Link to='/editProductForm'> */}
                    <button onClick={() => handleUpdateClick(product)}>
                      <a
                        href='#'
                        className=' text-[20px] font-medium text-white dark:text-blue-500 hover:underline 	'
                      >
                        Edit
                      </a>
                    </button>
                    {/* </Link> */}
                  </td>
                  <td className='px-6 py-7 text-[18px] '>
                    <button onClick={() => handleDeleteClick(product.id)}>
                      <a
                        href='#'
                        className=' text-[18px] font-medium text-white dark:text-blue-500 hover:underline 	'
                      >
                        Delete
                      </a>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
