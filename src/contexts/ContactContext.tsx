import { createContext, useState } from 'react';

export interface IFormInput {
  firstName: string;
  lastName: string;
  number?: string;
}

interface ContactContextValue {
  formData: IFormInput;
  setFormData: React.Dispatch<React.SetStateAction<IFormInput>>;
}

export const ContactContext = createContext<ContactContextValue>({
  formData: { firstName: '', lastName: '', number: undefined },
  setFormData: () => {},
});

export function ContactProvider({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState<IFormInput>({
    firstName: '',
    lastName: '',
    number: '',
  });

  return (
    <ContactContext.Provider value={{ formData, setFormData }}>
      {children}
    </ContactContext.Provider>
  );
}
