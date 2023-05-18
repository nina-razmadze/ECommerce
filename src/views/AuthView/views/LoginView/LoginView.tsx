import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { publicAxios } from '@src/utils/publicAxios';
import { ErrorMessage } from '@hookform/error-message';

import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';

// Styled components
import {
  SAuthLogo,
  SAuthForm,
  SAuthSection,
  SAuthSignInA,
  SAuthFormDiv,
  SAuthTitleDiv,
  SAuthContainer,
  SAuthFormInput,
  SAuthFormLabel,
  SAuthFormHeader,
  SAuthFormButton,
  SAuthFormCheckbox,
  SAuthFormContainer,
  SAuthDoesNotAccaunt,
  SAuthForgotPasswordA,
  SAuthFormCheckboxLabel,
} from './SLogin.styled';

import { TlogaclStorage } from '../../../../types/localstorage';
import { AuthContext, TAuthorizationStage } from '@src/contexts/AuthContext';

type TInputs = {
  email: string;
  password: string;
  checkbox: string;
};
type TloginForm = {
  password: string;
  email: string;
};

export default function loginView() {
  const { formatMessage } = useIntl();
  const { setStatus } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<TInputs>();

  const handeLogin = async (data: TloginForm) => {
    try {
      const resp = await publicAxios.post(`/auth/login`, data);
      if (resp.data.accesToken) {
        localStorage.setItem(TlogaclStorage.ACCESSTOKEN, resp.data.accessToken);
        setStatus(TAuthorizationStage.AUTHORIZED);
      }
    } catch (error: any) {
      setError('root', { message: 'Something went wrong' });
    }
  };

  return (
    //ardagviweros romeli inputia araswori
    <SAuthSection>
      <SAuthContainer>
        <SAuthLogo>
          {/* <a> */}
          {/* <SAuthimg src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg'></SAuthimg> */}
          {/* </a> */}
        </SAuthLogo>
        <SAuthFormContainer onSubmit={handleSubmit(handeLogin)}>
          <SAuthFormDiv>
            <SAuthTitleDiv>
              <SAuthFormHeader>
                <FormattedMessage id='Sign in to your account' />
              </SAuthFormHeader>
            </SAuthTitleDiv>

            <SAuthForm>
              <div>
                <SAuthFormLabel>
                  <FormattedMessage id='Your email' />
                </SAuthFormLabel>
                <SAuthFormInput
                  type='email'
                  id='email'
                  placeholder={formatMessage({ id: 'name@company.com' })}
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

              {errors?.root && (
                <p className='text-red-700'>
                  <FormattedMessage id='Something went wrong' />
                </p>
              )}

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
                      <FormattedMessage id='Remember me' />
                    </SAuthFormCheckboxLabel>
                  </div>
                </div>

                <SAuthForgotPasswordA href='#'>
                  <FormattedMessage id='Forgot password?' />
                </SAuthForgotPasswordA>
              </div>

              <SAuthFormButton type='submit'>
                <FormattedMessage id='Sign in' />
              </SAuthFormButton>

              <SAuthDoesNotAccaunt>
                Don’t have an account yet?
                <Link to='/auth/register'>
                  <SAuthSignInA href='#'>
                    <FormattedMessage id='Register here' />
                  </SAuthSignInA>
                </Link>
              </SAuthDoesNotAccaunt>
            </SAuthForm>
          </SAuthFormDiv>
        </SAuthFormContainer>
      </SAuthContainer>
    </SAuthSection>
  );
}
