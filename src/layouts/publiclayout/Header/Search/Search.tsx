import { CardData } from '@src/views/ProductView/ProductView';
import { SSearchInput } from '../SHeader.styled';
import { Card } from '@src/components/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Search() {
  // const { search, setSearch } = useContext(SearchContext);
  const [data, setData] = useState<CardData[]>([]);
  const [search, setSearch] = useState<CardData[]>([]);

  // useEffect(() => {
  //   axios
  //     .get(`https://dummyjson.com/products/search?q=phone`)
  //     .then((resp) => {
  //       {
  //         setData(resp.data);
  //         setSearch(resp.data);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const handleSearchChange = (e: any) => {
    setSearch(
      data.filter((f) => f.title.toLocaleLowerCase().includes(e.target.value))
    );
  };

  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <div>
      <SSearchInput onChange={handleSearchChange} placeholder='Search' />
      {search.map((product, i) => {
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
