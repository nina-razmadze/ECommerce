import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SPurpleButton } from '../ContactView/SContactView.styled';

import {
  SForm,
  STitle,
  SButton,
  SLineInput,
  SFirstSelect,
  SSecondInput,
  SBackGroundColor,
  SButtonContainer,
} from './SPeyment.styled';

enum paymentType {
  PayingWithPoints = 'Paying with points',
  PaymentByCard = 'Payment by card',
}
interface TFormInput {
  payment: paymentType;
  person: string;
  address: string;
}
export default function PeymentView() {
  const { register, handleSubmit, reset } = useForm<TFormInput>();
  const [physicalPerson, setPhysicalPerson] = useState('');
  const [legalEntity, setLegalEntity] = useState('');
  const intl = useIntl();

  const onSubmit: SubmitHandler<TFormInput> = (data) => {
    setValueEmpty();
    alert('Your Order has approved');
  };

  const setValueEmpty = () => {
    reset();
    setLegalEntity('');
    setPhysicalPerson('');
  };

  function handlePhysicalClick(e: any) {
    e.preventDefault();
    if (physicalPerson === '') {
      setPhysicalPerson(intl.formatMessage({ id: 'Physical Person' }));
    } else if (
      physicalPerson === intl.formatMessage({ id: 'Physical Person' })
    ) {
      setPhysicalPerson('');
    }
  }

  function handleLegalClick(e: any) {
    e.preventDefault();
    if (legalEntity === '') {
      setLegalEntity(intl.formatMessage({ id: 'Legal Entity' }));
    } else if (legalEntity === intl.formatMessage({ id: 'Legal Entity' })) {
      setLegalEntity('');
    }
  }

  return (
    <SBackGroundColor>
      <SForm onSubmit={handleSubmit(onSubmit)}>
        <STitle>
          <FormattedMessage id='Order Details' />
        </STitle>

        <SFirstSelect
          {...register('payment', {
            required: 'Payment is required',
          })}
        >
          <option value=''>
            <FormattedMessage id='Method Of Payments' />
          </option>

          <option value='Paying with points'>
            <FormattedMessage id='Paying with Points' />
          </option>

          <option value='Payment by card'>
            <FormattedMessage id='Payment By Card' />
          </option>
        </SFirstSelect>

        <SLineInput
          value={physicalPerson || legalEntity}
          {...register('person', { required: true })}
        />

        <SButtonContainer>
          <SButton onClick={handlePhysicalClick}>
            <FormattedMessage id='Physical Person' />
          </SButton>
          <SButton onClick={handleLegalClick}>
            <FormattedMessage id='Legal Entity' />
          </SButton>
        </SButtonContainer>

        <SSecondInput
          placeholder={intl.formatMessage({ id: 'Add An Address' })}
          {...register('address', {
            required: true,
          })}
          className='custom-input placeholder-white bg-zinc-800'
        />

        <SPurpleButton
          type='submit'
          placeholder={intl.formatMessage({ id: 'Submit' })}
          className='custom-input placeholder-white bg-zinc-800'
        ></SPurpleButton>
      </SForm>
    </SBackGroundColor>
  );
}
