import { SProductViewBackground } from "./SProduct.styled";
import { SProductViewContainer } from "./SProduct.styled";
import { SProductViewImageDiv } from "./SProduct.styled";
import { SProductViewInfoContainer } from "./SProduct.styled";
import watch from "../../images/watch.jpg";
import { SProductViewInfoTitle } from "./SProduct.styled";
import { SProductViewInfoContainerSecond } from "./SProduct.styled";
import { SProductViewInfoniscription } from "./SProduct.styled";
import { SProductViewInfoMoreImages } from "./SProduct.styled";
import { SProductViewInfonNormiscription } from "./SProduct.styled";
import ProductNav from "./ProductNavigation/ProductNav";
import { FormattedMessage } from "react-intl";
import { useEffect, useState } from "react";
import phone1 from "../../images/download.jpg";
import phone2 from "../../images/tele.jpg";
import phone3 from "../../images/images.jpg";
import { useParams } from "react-router-dom";
import axios from "axios";

export interface CardProps {
  id: any;
  desc: string;
  price: string;
  title: string;
  images: string[];
  category: string;
  product: string | number;
}
export interface CardData {
  id: number;
  title: string;
  images: string[];
  price: number;
  description: string;
  category: string;
  product: string | number;
}

export interface NavProps {
  cartItem: CardProps;
}

export default function ProductView() {
  const { id } = useParams();
  const [data, setData] = useState<CardData | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const productData = await response.json();
        console.log(data?.images);
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

  return (
    <SProductViewBackground>
      <ProductNav />
      <SProductViewContainer>
        <SProductViewInfoContainerSecond>
          <SProductViewInfoTitle>{data.title}</SProductViewInfoTitle>

          <SProductViewInfoniscription>
            {data.category}
          </SProductViewInfoniscription>
          <SProductViewInfoMoreImages>
            <img className="w-[100px] h-[120px]" src={phone1}></img>
            <img className="w-[100px] h-[120px]" src={phone2}></img>
            <img className="w-[100px]  h-[120px]" src={phone3}></img>
          </SProductViewInfoMoreImages>
        </SProductViewInfoContainerSecond>
        <SProductViewImageDiv>
          <img src={watch} className="w-[400px]"></img>
        </SProductViewImageDiv>
        <SProductViewInfoContainer>
          <SProductViewInfonNormiscription>
            <FormattedMessage id="Price" /> ---------------- {data.price}
            <FormattedMessage id="Gel" />
          </SProductViewInfonNormiscription>
          <div className="pt-[160px] "> ----- {data.description}</div>
        </SProductViewInfoContainer>
      </SProductViewContainer>
    </SProductViewBackground>
  );
}
