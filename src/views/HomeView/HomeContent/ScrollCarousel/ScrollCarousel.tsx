import { useState, useEffect } from 'react';
import { Card } from '@src/components/Card';

export function ScrollCarousel() {
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products?offset=${offset}&limit=5`
        );
        const fetchdata = await res.json();
        setData((prev) => [...prev, ...fetchdata.products]);
      } catch (error) {}
    };
    fetchData();
  }, [offset]);

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
    <div className='w-4/5 mx-auto pt-[150px] grid grid-cols-5  gap-y-[60px]'>
      {data.map((product) => {
        return (
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
        );
      })}
    </div>
  );
}
