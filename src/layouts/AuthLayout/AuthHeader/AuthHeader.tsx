import { useContext } from "react";

import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import {
  SListUl,
  SLogoSpan,
  SHeaderNav,
  SSimplyBtn,
  SAuthButtons,
  SdivContainer,
  SPrimaryButton,
} from "@src/layouts/publiclayout/Header/SHeader.styled";
import { Language } from "../../../types/localstorage";

import { LocaleContext } from "@src/contexts/LocaleContext";
import { STranslateSelect } from "@src/layouts/publiclayout/Header/SHeader.styled";

export default function AuthHeader() {
  const { locale, setLocale } = useContext(LocaleContext);
  return (
    <SHeaderNav>
      <SdivContainer>
        <Link to="/">
          <SLogoSpan>EShop</SLogoSpan>
        </Link>
        <SAuthButtons>
          <SPrimaryButton>
            <Link to="/">
              <FormattedMessage id="Home"></FormattedMessage>
            </Link>
          </SPrimaryButton>
        </SAuthButtons>

        <div
          className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <SListUl>
            <li>
              <SSimplyBtn></SSimplyBtn>
            </li>
          </SListUl>
        </div>
      </SdivContainer>
    </SHeaderNav>
  );
}
