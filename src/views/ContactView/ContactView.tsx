import ContactModal from '@src/components/ContactModal/ContactModal';
import { SBackGround } from './SContactView.styled';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SForm } from './SContactView.styled';
import { SInput } from './SContactView.styled';
import { SSecondInput } from './SContactView.styled';
import { SPurpleButton } from './SContactView.styled';
import { lazy, useContext } from 'react';
import { ContactContext } from '@src/contexts/ContactContext';
import { FormattedMessage, useIntl } from 'react-intl';
const AuthHeader = lazy(
  () => import('@src/layouts/AuthLayout/AuthHeader/AuthHeader')
);

interface IFormInput {
  firstName: string;
  lastName: string;
  number?: string;
}

export default function ContactView() {
  const intl = useIntl();
  const { formData, setFormData } = useContext(ContactContext);
  const [contactModal, setContactModal] = useState<boolean>(false);
  const [isInputValid, setIsInputValid] = useState(false);

  // console.log(formData);

  const { register, handleSubmit, setValue, resetField } =
    useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setFormData(data);
    setContactModal(true);
    setValueEmpty();
  };

  function setValueEmpty() {
    resetField('firstName');
    resetField('lastName');
    resetField('number');
  }

  function handleModalClose() {
    setContactModal(false);
  }

  function validateAndSubmit() {
    const { firstName, lastName, number } = formData;
    if (firstName === '' || lastName === '' || number === '') {
      setIsInputValid(false);
    } else {
      setIsInputValid(true);
      handleSubmit(onSubmit)();
    }
  }
  return (
    <SBackGround>
      <SForm onSubmit={handleSubmit(onSubmit)}>
        <SInput
          {...register('firstName', {
            required: true,
            maxLength: 20,
            minLength: 2,
          })}
          placeholder={intl.formatMessage({ id: 'First Name' })}
        />
        <SSecondInput
          {...register('lastName', {
            required: true,
            pattern: /^[A-Za-z]+$/i,
          })}
          placeholder={intl.formatMessage({ id: 'Last Name' })}
        />
        <SInput
          {...register('number', {
            required: true,
            minLength: 9,
            maxLength: 18,
          })}
          placeholder={intl.formatMessage({ id: 'Phone Number' })}
        />

        <SPurpleButton
          type='submit'
          value={intl.formatMessage({ id: 'Submit' })}
          onClick={validateAndSubmit}
        />
      </SForm>

      <ContactModal
        formData={formData}
        open={contactModal}
        isInputValid={isInputValid}
        onClose={handleModalClose}
      />
    </SBackGround>
  );
}
