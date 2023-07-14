import { CardData } from '@src/views/ProductView/ProductView';
import { SSearchInput } from '../SHeader.styled';
import { Card } from '@src/components/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';

export interface Product {
  id: number;
  title: string;
  images: string[];
  price: string;
  description: string;
  category: string;
  product: string | number;
}

export default function Search() {
  // const { search, setSearch } = useContext(SearchContext);
  const [data, setData] = useState<Product[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/search?q=phone`)
      .then((resp) => {
        {
          setData(resp.data.products);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSearchChange = (event: any) => {
    setSearch(event.target.value);
  };

  const filteredData = data.filter((product) => {
    const productTitle = product.title.toLowerCase();
    const inputValue = search.toLowerCase();
    return productTitle.startsWith(inputValue.charAt(0));
  });

  return (
    <div>
      <SSearchInput
        value={search}
        onChange={handleSearchChange}
        placeholder='Search'
      />
      <div className='grid grid-cols-4 row-2 pb-[10px]'>
        {search && (
          <>
            {filteredData.map((product) => (
              <div
                key={product.id}
                className='cursor-pointer bg-purple-700 w-[275px] max-h-[345px] border rounded-lg border-gray-200 mr-[50px] mt-[70px] overflow-hidden shadow-lg'
              >
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
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
