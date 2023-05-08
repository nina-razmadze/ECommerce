import { SubmitHandler, useForm } from 'react-hook-form';
import { STransparentBox } from '@src/components/TransparentContainer/STransparentContainer.styled';

import {
  SAuthTitle,
  SForm,
  SFormInput,
  SFormSubmit,
  SInputError,
} from './SLogin.styled';

import { Header } from '@src/layouts/publiclayout/Header';

type TInputs = {
  email: string;
  password: string;
};

export default function LoginView() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<TInputs>();

  const onSubmit: SubmitHandler<TInputs> = (data) => console.log(data);

  return (
    <>
      {/* <Header /> */}
      <STransparentBox>
        <SForm onSubmit={handleSubmit(onSubmit)}>
          <SAuthTitle>ავტორიზაცია</SAuthTitle>

          <SFormInput
            placeholder='ელფოსტა | ტელეფონის ნომერი'
            {...register('email', { required: true })}
          />
          {errors.email && <SInputError>გთხოვთ შეიყვანოთ ემაილი</SInputError>}

          <SFormInput
            placeholder='პაროლი'
            {...register('password', { required: true })}
          />
          {errors.password && (
            <SInputError>გთხოვთ შეიყვანოთ პაროლი</SInputError>
          )}

          <SFormSubmit type='submit' />
        </SForm>
      </STransparentBox>
    </>
  );
}
