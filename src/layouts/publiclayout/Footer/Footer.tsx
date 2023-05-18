import {
  SDIvContainer,
  SFooter,
  SFooterLogoA,
  SFooterSpan,
  SFooterSpanA,
  SListA,
  SfooterHr,
  SfooterSecondDiv,
} from './SFooter.styled';
import { SFooterListUl } from './SFooter.styled';

export function Footer() {
  return (
    <SFooter>
      <SDIvContainer>
        <SfooterSecondDiv>
          <SFooterLogoA
            href='https://Eshop.com/'
            className='flex items-center mb-4 sm:mb-0'
          >
            {/* <img className='h-8 mr-3' alt='Flowbite Logo' /> */}
            <span>Eshop</span>
          </SFooterLogoA>
          <SFooterListUl>
            <li>
              <SListA>About</SListA>
            </li>
            <li>
              <SListA>Contact</SListA>
            </li>
          </SFooterListUl>
        </SfooterSecondDiv>
        <SfooterHr />
        <SFooterSpan>
          © 2023
          <SFooterSpanA>Flowbite™</SFooterSpanA>. All Rights Reserved.
        </SFooterSpan>
      </SDIvContainer>
    </SFooter>
  );
}
