import en from './translations/en.json';
import ge from './translations/ge.json';

import { IntlProvider } from 'react-intl';

import { Language } from '../../types/localstorage';
import { LocaleContext } from '@src/contexts/LocaleContext';

import { PropsWithChildren, useState, useEffect } from 'react';

export function LocalProvider({ children }: PropsWithChildren) {
  const [locale, setLocale] = useState<Language>(Language.EN);

  useEffect(() => {
    const items = localStorage.getItem('locale');
    if (items === 'ENG') {
      setLocale(Language.EN);
    } else {
      setLocale(Language.GE);
    }
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <IntlProvider
        locale={locale}
        messages={locale === Language.EN ? en : ge}
        defaultLocale={Language.EN}
      >
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
}
