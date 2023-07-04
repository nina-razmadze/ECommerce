import { SPurpleButton } from '../ContactView/SContactView.styled';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';

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
  const { register, handleSubmit } = useForm<TFormInput>();
  const onSubmit: SubmitHandler<TFormInput> = (data) => console.log(data);

  const [physicalPerson, setPhysicalPerson] = useState('');
  const [legalEntity, setLegalEntity] = useState('');

  function physical(e: any) {
    e.preventDefault();
    if (physicalPerson === '') {
      setPhysicalPerson('Physical person');
    } else if (physicalPerson === 'Physical person') {
      setPhysicalPerson('');
    }
  }

  function legal(e: any) {
    e.preventDefault();
    if (legalEntity === '') {
      setLegalEntity('Legal Entity');
    } else if (legalEntity === 'Legal Entity') {
      setLegalEntity('');
    }
  }

  return (
    <SBackGroundColor>
      <SForm onSubmit={handleSubmit(onSubmit)}>
        <STitle>Order Details</STitle>

        <SFirstSelect
          {...register('payment', {
            required: true,
          })}
        >
          <option> Method of payment</option>
          <option value='Paying with points'> Paying with points</option>
          <option value='Payment by card'>Payment by card</option>
        </SFirstSelect>

        <SLineInput
          value={physicalPerson || legalEntity}
          {...register('person', {
            required: 'This field is required',
          })}
        />

        <SButtonContainer>
          <SButton onClick={physical}>Physical person</SButton>
          <SButton onClick={legal}>legal entity</SButton>
        </SButtonContainer>

        <SSecondInput
          placeholder=' Add an address'
          {...register('address', {
            required: true,
          })}
        />
        <SPurpleButton type='submit'></SPurpleButton>
      </SForm>
    </SBackGroundColor>
  );
}
