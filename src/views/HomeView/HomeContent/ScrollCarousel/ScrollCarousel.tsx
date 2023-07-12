import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { Card } from '@src/components/Card';

import { useNavigate } from 'react-router-dom';

import { SearchContext } from '@src/contexts/SearchContext';

export interface CardData {
  id: number;
  title: string;
  images: string[];
  price: string;
  description: string;
  category: string;
  product: string | number;
}
export function ScrollCarousel() {
  const navigate = useNavigate();
  const [data, setData] = useState<CardData[]>([]);
  const [offset, setOffset] = useState(0);
  const { search, setSearch } = useContext(SearchContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products?offset=${offset}&limit=5&${search.title}`
        );
        const fetchdata = await res.json();
        setData((prev) => [...prev, ...fetchdata.products]);
      } catch (error) {}
    };
    fetchData();
  }, [offset, search.title]);

  useEffect(() => {
    const handleScroll = (e: any) => {
      const scrollHeight = e.target.documentElement.scrollHeight;
      const currentHeight =
        e.target.documentElement.scrollTop + window.innerHeight;
      if (currentHeight + 1 >= scrollHeight) {
        setOffset(offset + 5);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset]);

  return (
    <div className='w-4/5 mx-auto pt-[150px] grid grid-cols-4 gap-y-[60px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {data
        // .filter((product) => {
        //   console.log(product.title);

        //   return search.title === ''
        //     ? product
        //     : product.title.includes(search.title);
        // })
        .map((product) => {
          return (
            <div className='cursor-pointer  bg-purple-700	w-[275px] max-h-[345px] border	 rounded-lg border-gray-200 overflow-hidden shadow-lg'>
              {/* <Link to={`/products/${product.id}`}> */}
              <Card
                id={product.id}
                key={product.id}
                title={product.title}
                desc={product.description}
                images={product.images}
                category={product.category}
                price={product.price}
                product={product.product}
              />
              {/* </Link> */}
            </div>
          );
        })}
    </div>
  );
}
