import { SProductViewBackground } from './SProduct.styled';
import { SProductViewContainer } from './SProduct.styled';
import { SProductViewImageDiv } from './SProduct.styled';
import { SProductViewInfoContainer } from './SProduct.styled';
import watch from '../../images/watch.jpg';
import { SProductViewInfoTitle } from './SProduct.styled';
import { SProductViewInfoContainerSecond } from './SProduct.styled';
import { SProductViewInfoniscription } from './SProduct.styled';
import { SProductViewInfoMoreImages } from './SProduct.styled';
import { SProductViewInfonNormiscription } from './SProduct.styled';
import ProductNav from './ProductNavigation/ProductNav';
import { useContext } from 'react';
import { CartContext } from '@src/contexts/CartContext';
import { ProductContext } from '@src/contexts/ProductContext';

export interface CardProps {
  id: any;
  desc: string;
  price: string;
  title: string;
  images: string[];
  category: string;
  product: string | number;
}

// export interface Product {
//   category: string;
//   product: number | string;
//   title: string;
// }
export interface NavProps {
  cartItem: CardProps;
}

export default function ProductView() {
  // const { productInfo, setProductInfo } = useContext(ProductContext);
  const { cartItem, setCartItem } = useContext(CartContext);
  return (
    <SProductViewBackground>
      <ProductNav cartItem={cartItem} />

      <SProductViewContainer>
        <SProductViewInfoContainerSecond>
          <SProductViewInfoTitle>Product Brend</SProductViewInfoTitle>
          <SProductViewInfoniscription>
            Screen Size :
          </SProductViewInfoniscription>
          <SProductViewInfoMoreImages>
            <div>first</div>
            <div>second</div>
            <div>third</div>
          </SProductViewInfoMoreImages>
        </SProductViewInfoContainerSecond>
        <SProductViewImageDiv>
          <img src={watch} className='w-[400px]'></img>
        </SProductViewImageDiv>
        <SProductViewInfoContainer>
          <SProductViewInfonNormiscription>
            info ---------------- 256 GB
          </SProductViewInfonNormiscription>
          <SProductViewInfonNormiscription>
            Operation Sistem ---------------- 16 GB
          </SProductViewInfonNormiscription>
          <SProductViewInfonNormiscription>
            Price ---------------- 2 299 ₾
          </SProductViewInfonNormiscription>
        </SProductViewInfoContainer>
      </SProductViewContainer>
    </SProductViewBackground>
  );
}
