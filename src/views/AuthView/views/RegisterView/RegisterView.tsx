import { STransparentBox } from '@src/components/TransparentContainer/STransparentContainer.styled';
import { SRadioBtnsWrapper, SSelect } from './SRegister.styled';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SForm } from '../LoginView/SLogin.styled';
import { SAuthTitle } from '../LoginView/SLogin.styled';
import { SFormInput } from '../LoginView/SLogin.styled';
import { SFormSubmit } from '../LoginView/SLogin.styled';
import { SInputError } from '../LoginView/SLogin.styled';
import {
  SGender,
  SRadioBtnLabel,
  SRadioBtnWrapper,
  SRadioInput,
} from './SRegister.styled';

type TInputs = {
  email: string;
  gender: string;
  password: string;
  lastname: string;
  firstname: string;
  birthdate: string;
  thelephone: string;
  repeatpassword: string;
  for: string;
};
export default function RegisterView() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<TInputs>();

  const onSubmit: SubmitHandler<TInputs> = (data) => console.log(data);

  return (
    <>
      <STransparentBox>
        <SForm onSubmit={handleSubmit(onSubmit)}>
          <SAuthTitle>რეგისტრაცია</SAuthTitle>
          {/* <SFlexInputWrapper> */}

          <SFormInput
            placeholder='სახელი'
            {...register('firstname', { required: true })}
          ></SFormInput>

          {errors.firstname && (
            <SInputError>გთხოვთ შეიყვანოთ სახელი</SInputError>
          )}

          <SFormInput
            placeholder='გვარი'
            {...register('lastname', { required: true })}
          ></SFormInput>

          {errors.lastname && <SInputError>გთხოვთ შეიყვანოთ გვარი</SInputError>}

          <SFormInput
            placeholder='ელფოსტა'
            {...register('email', { required: true })}
          />
          {errors.email && <SInputError>გთხოვთ შეიყვანოთ ემაილი</SInputError>}

          <SFormInput
            placeholder='პაროლი'
            type='password'
            {...register('password', { required: true })}
          />
          {errors.password && (
            <SInputError>გთხოვთ შეიყვანოთ პაროლი</SInputError>
          )}

          <SFormInput
            placeholder=' გაიმეორეთ პაროლი'
            type='password'
            {...register('repeatpassword', { required: true })}
          />
          {errors.repeatpassword && (
            <SInputError>გთხოვთ გაიმეოროთ პაროლი</SInputError>
          )}

          <SGender>სქესი</SGender>

          <SRadioBtnsWrapper>
            <SRadioBtnWrapper>
              <SRadioInput
                type='radio'
                id='მდედრობითი'
                name='gender'
                value='მდედრობითი'
              />
              <SRadioBtnLabel htmlFor='მდედრობით'>მდედრობითი</SRadioBtnLabel>
            </SRadioBtnWrapper>

            <SRadioBtnWrapper>
              <SRadioInput
                type='radio'
                id='მამრობითი'
                name='gender'
                value='მამრობითი'
              />
              <SRadioBtnLabel htmlFor='მამრობითი'>მამრობითი</SRadioBtnLabel>
            </SRadioBtnWrapper>
          </SRadioBtnsWrapper>

          {errors.gender && <SInputError>გთხოვთ შეიყვანოთ სქესი</SInputError>}

          <SSelect {...register('birthdate', { required: true })}>
            <option value='' disabled selected>
              აირჩიე დაბადების წელი
            </option>
            <option value='2000'>2000</option>
            <option value='2001'>2001</option>
            <option value='2002'>2002</option>
            <option value='2003'>2003</option>
            <option value='2004'>2004</option>
            <option value='2005'>2005</option>
            <option value='2006'>2006</option>
            <option value='2007'>2007</option>
          </SSelect>

          {errors.birthdate && (
            <SInputError>გთხოვთ შეიყვანოთ დაბადების თარიღი</SInputError>
          )}

          <SFormInput
            placeholder='ტელეფონის ნომერი'
            {...register('thelephone', { required: true })}
          ></SFormInput>

          {errors.thelephone && (
            <SInputError>გთხოვთ შეიყვანოთ ტელეფონის ნომერი</SInputError>
          )}

          <SFormSubmit type='submit' />
        </SForm>
      </STransparentBox>
    </>
  );
}
