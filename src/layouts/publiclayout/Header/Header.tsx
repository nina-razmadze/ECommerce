import { SCartIcon, SCartP, SContactUS, SSearchInput } from './SHeader.styled';
import { STranslateSelect, SPrimaryButton } from './SHeader.styled';

import GroceryCart from '.././../../images/grocery-cart.png';
import { LocaleContext } from '@src/contexts/LocaleContext';

import { useGetProducts } from '@src/hooks/useGetProducts';
import { SSimplyBtn, SHeaderNav } from './SHeader.styled';

import { CartContext } from '@src/contexts/CartContext';
import { Language } from '../../../types/localstorage';
import { CartModal } from '@src/components/CartModal';

import { FormattedMessage } from 'react-intl';
import { useContext, useState } from 'react';

import { Link } from 'react-router-dom';

import {
  SListUl,
  SLogoSpan,
  SLoginButton,
  SAuthButtons,
  SdivContainer,
} from './SHeader.styled';
import MyFavoritesView from '@src/views/UserView/MyFavoritesView/MyFavoritesView';
import Search from './Search/Search';
export function Header() {
  const [cartModal, setcartModal] = useState<boolean>(false);
  const { locale, setLocale } = useContext(LocaleContext);
  const {
    products: { data, loading },
  } = useGetProducts();

  return (
    <>
      <SHeaderNav>
        <SdivContainer>
          {/* <SSearchInput placeholder='Search' /> */}

          <Search />
          <Link to='/'>
            <SLogoSpan>EShop</SLogoSpan>
          </Link>
          <SAuthButtons>
            <Link to='/Contact'>
              <SContactUS>
                <FormattedMessage id='Contact' />
              </SContactUS>
            </Link>

            <STranslateSelect
              onChange={(e) => {
                localStorage.setItem('locale', e.target.value);
                setLocale(e.target.value as Language);
              }}
              value={locale}
            >
              <option value={Language.EN}>
                <FormattedMessage id='ENG' />
              </option>

              <option value={Language.GE}>
                <FormattedMessage id='GEO' />
              </option>
            </STranslateSelect>

            <Link to='/user'>
              <div className='pr-[24px]'>
                <FormattedMessage id='My page' />
              </div>
            </Link>

            <SSimplyBtn onClick={() => setcartModal(true)}>
              <SCartIcon>
                <img src={GroceryCart}></img>
              </SCartIcon>

              <SCartP>
                <FormattedMessage id='Cart' />
              </SCartP>
            </SSimplyBtn>

            <CartModal open={cartModal} onClose={() => setcartModal(false)} />
            {/* <MyFavoritesView
              open={favorite}
              onClose={() => setFavorite(false)}
            /> */}
            <Link to='/auth/login'>
              <SPrimaryButton>
                <FormattedMessage id='Log in' />
              </SPrimaryButton>
            </Link>
          </SAuthButtons>
        </SdivContainer>
      </SHeaderNav>
    </>
  );
}
