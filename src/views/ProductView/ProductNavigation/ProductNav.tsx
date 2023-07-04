import { Link } from 'react-router-dom';

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
export default function ProductNav({ cartItem }: NavProps) {
  return (
    <div className=' w-[70%]  flex justify-end m-auto'>
      <nav className='pb-[30px]  w-[40%] flex item-center  text-[22px] font-mono'>
        <Link to='/'>
          <h1 className='bg-zinc-700 w-[180px] p-[15px] pl-[60px] bg-custom-color skew-x-[-25deg] text-white '>
            Eshop
          </h1>
        </Link>
        {/* <Link to='/'> */}
        <h1 className='bg-purple-700 w-[180px] p-[15px] pl-[60px] bg-custom-color skew-x-[-25deg]'>
          {cartItem.title}
        </h1>
        {/* </Link> */}
        <h1 className='bg-zinc-700 w-[180px] p-[15px] pl-[40px] bg-custom-color skew-x-[-25deg]'>
          {cartItem.category}
        </h1>
        <h1 className='bg-purple-700 w-[180px] p-[15px] pl-[50px] bg-custom-color skew-x-[-25deg]'>
          {cartItem.product}
        </h1>
      </nav>
    </div>
  );
}
