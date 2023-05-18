import { useState } from 'react';
import { useIntl } from 'react-intl';

import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { publicAxios } from '@src/utils/publicAxios';
import { ErrorMessage } from '@hookform/error-message';

import { useForm } from 'react-hook-form';
import { SNamediv, SNamesdiv } from './SRegister.styled';

import { SAuthTitleDiv } from '../LoginView/SLogin.styled';

import {
  SAuthLogo,
  SAuthForm,
  SAuthSection,
  SAuthSignInA,
  SAuthFormDiv,
  SAuthContainer,
  SAuthFormInput,
  SAuthFormLabel,
  SAuthFormHeader,
  SAuthFormButton,
  SAuthFormCheckbox,
  SAuthFormContainer,
  SAuthDoesNotAccaunt,
  SAuthFormCheckboxLabel,
} from '../LoginView/SLogin.styled';

type TregisterForm = {
  email: string;
  password: any;
  firstname: string;
  lastname: string;
  checkbox: string;
};
export default function RegisterView() {
  const { formatMessage } = useIntl();
  const [created, setCreated] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<TregisterForm>();

  async function handleRegister(data: TregisterForm) {
    console.log(data);
    try {
      const resp = await publicAxios.post(
        `
      /register`,
        data
      );
      if (resp.data?.id) {
        setCreated(true);
      }
    } catch (error: any) {
      setError('root', { message: error.response.data.errors?.[0].msg });
    }
  }

  return (
    <>
      <SAuthSection>
        <SAuthContainer>
          <SAuthLogo>
            {/* <SAuthimg src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg'></SAuthimg> */}
          </SAuthLogo>
          <SAuthFormContainer onSubmit={handleSubmit(handleRegister)}>
            <SAuthFormDiv>
              <SAuthTitleDiv>
                <SAuthFormHeader>
                  <FormattedMessage id='Create an account' />
                </SAuthFormHeader>
              </SAuthTitleDiv>
              <SAuthForm>
                <SNamesdiv>
                  <SNamediv>
                    <SAuthFormLabel>
                      <FormattedMessage id='Firstname' />
                    </SAuthFormLabel>
                    <SAuthFormInput
                      type='text'
                      id='fistname'
                      placeholder={formatMessage({ id: 'firstname' })}
                      {...register('firstname', { required: true })}
                    />
                    <ErrorMessage errors={errors} name='email'></ErrorMessage>
                  </SNamediv>
                  <div>
                    <SAuthFormLabel>
                      <FormattedMessage id='Lastname' />
                    </SAuthFormLabel>
                    <SAuthFormInput
                      type='text'
                      id='lastname'
                      placeholder={formatMessage({ id: 'lastname' })}
                      {...register('lastname', { required: true })}
                    />
                    <ErrorMessage errors={errors} name='email'></ErrorMessage>
                  </div>
                </SNamesdiv>

                <div>
                  <SAuthFormLabel>
                    <FormattedMessage id='Your email' />
                  </SAuthFormLabel>
                  <SAuthFormInput
                    type='email'
                    id='email'
                    placeholder='name@company.com'
                    {...register('email', { required: true })}
                  />
                  <ErrorMessage errors={errors} name='email'></ErrorMessage>
                </div>

                <div>
                  <SAuthFormLabel>
                    <FormattedMessage id='Password' />
                  </SAuthFormLabel>
                  <SAuthFormCheckbox
                    type='password'
                    id='password'
                    placeholder='••••••••'
                    {...register('password', { required: true })}
                  />
                  <ErrorMessage errors={errors} name='password'></ErrorMessage>
                </div>
                {errors?.root && <p>{errors.root.message}</p>}

                <div className='flex items-center justify-between'>
                  <div className='flex items-start'>
                    <div className='flex items-center h-5'>
                      <SAuthFormCheckbox
                        id='remember'
                        aria-describedby='remember'
                        type='checkbox'
                        {...register('checkbox')}
                      />
                    </div>

                    <div className='ml-3 text-sm'>
                      <SAuthFormCheckboxLabel>
                        <FormattedMessage id='I accept the Terms and Conditions' />
                      </SAuthFormCheckboxLabel>
                    </div>
                  </div>
                </div>

                <SAuthFormButton type='submit'>
                  <FormattedMessage id='Create an account' />
                </SAuthFormButton>

                <SAuthDoesNotAccaunt>
                  <FormattedMessage id='Already have an account?' />

                  <Link to='/auth/login'>
                    <SAuthSignInA href='#'>
                      <FormattedMessage id='Login here' />
                    </SAuthSignInA>
                  </Link>
                </SAuthDoesNotAccaunt>
                {created && (
                  <p className=' mt-2 text-green-700'>
                    <FormattedMessage id='User created successfully' />
                  </p>
                )}
              </SAuthForm>
            </SAuthFormDiv>
          </SAuthFormContainer>
        </SAuthContainer>
      </SAuthSection>
    </>
  );
}
