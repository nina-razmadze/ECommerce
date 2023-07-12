import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CardData } from '../ProductView';

export interface CardProps {
  id: any;
  desc: string;
  price: string;
  title: string;
  images: string[];
  category: string;
  product: string | number;
}

export interface NavProps {
  cartItem: CardProps;
}
export default function ProductNav() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { id } = useParams();
  const [data, setData] = useState<CardProps | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const productData = await response.json();
        setData(productData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }
  // const filteredProducts = selectedCategory
  //   ? data.filter((product) => product.category === selectedCategory)
  //   : data;

  return (
    <div className=' flex justify-end m-auto'>
      <nav className='pb-[30px]  w-[84%] flex item-center  text-[22px] font-mono'>
        <Link to='/'>
          <h1 className='bg-zinc-700 w-[180px] p-[15px] pl-[60px] bg-custom-color skew-x-[-25deg] text-white '>
            Eshop
          </h1>
        </Link>
        {/* <Link to='/'> */}
        <Link to='/'>
          <h1 className='bg-purple-700 w-[180px] p-[15px] pl-[60px] bg-custom-color skew-x-[-25deg]'>
            Home
          </h1>
        </Link>
        {/* </Link> */}
        <h1
          className='bg-zinc-700 
        
         min-w-[180px] max-w-[210px] p-[15px] h-[63px] pl-[25px] bg-custom-color skew-x-[-25deg]'
        >
          {data.category}
        </h1>
        <h1 className='bg-purple-700   min-w-[180px] max-w-[320px] h-[63px] relative p-[15px] pl-[20px] bg-custom-color overflow-hidden skew-x-[-25deg]'>
          {data.title}
        </h1>
      </nav>
    </div>
  );
}
