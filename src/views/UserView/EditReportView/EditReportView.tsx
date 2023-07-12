import {
  SUser,
  SRightInputs,
  SEditReport,
  SInput,
  SSelectDiv,
  SSelect,
  SSubmitButton,
  SForm,
  SOption,
  SDivContainer,
} from './SEditReportView.styled';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState, useEffect } from 'react';
import girlAvatar from '../../../images/girlAvatar.jpg';
import boyAvatar from '../../../images/boyAvatar.jpg';
import defaultAvatar from '../../../images/defaultAvatar.jpg';
import axios from 'axios';
import { FormattedMessage, useIntl } from 'react-intl';

enum GenderEnum {
  female = 'female',
  male = 'male',
}

interface IFormInput {
  firstName: string; // corrected the type name from String to string
  lastName: string;
  email: any;
  password: any;
  gender: GenderEnum;
}

export default function EditReportView() {
  const intl = useIntl();
  const [isInputValid, setIsInputValid] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [avatarImage, setAvatarImage] = useState();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [defaultName, setDefaultName] = useState();

  const { register, handleSubmit, setValue, reset } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setValueEmpty();
    setFirstName('');
    setLastName('');
    setSelectedValue('');

    const { firstName, lastName, email, password, gender } = data;
    axios
      .put('https://dummyjson.com/products/1', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        gender: gender,
      })
      .then((response) => {
        alert('Your Info has updated');
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setValueEmpty();
  };

  function setValueEmpty() {
    reset();
  }

  useEffect(() => {
    console.log(selectedValue);
  }, [selectedValue]);

  return (
    <SDivContainer>
      <SUser>
        {selectedValue === GenderEnum.female ? (
          <img
            className='w-[70px] h-[70px] rounded-full '
            src={girlAvatar}
            alt='girl avatar'
          />
        ) : selectedValue === GenderEnum.male ? (
          <img
            className='w-[70px] h-[70px] rounded-full'
            src={boyAvatar}
            alt='boy avatar'
          />
        ) : (
          <img
            className='w-[70px] h-[70px] rounded-full  bg-zinc-800'
            src={defaultAvatar}
          />
        )}
        <div className='pt-[15px] text-[25px] pl-[20px] flex'>
          <h1 className='pr-[17px]'>
            {firstName || <FormattedMessage id='First Name' />}
          </h1>
          <h1>{lastName || <FormattedMessage id='Last Name' />}</h1>
        </div>
      </SUser>

      <SForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            <FormattedMessage id='First Name' />
          </label>
          <SInput
            placeholder={intl.formatMessage({
              id: 'First Name',
            })}
            {...register('firstName', { required: true })}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div>
          <label>
            <FormattedMessage id='Last Name' />
          </label>
          <SInput
            placeholder={intl.formatMessage({
              id: 'Last Name',
            })}
            {...register('lastName', { required: true })}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div>
          <label>
            <FormattedMessage id='Email' />
          </label>
          <SInput
            placeholder={intl.formatMessage({
              id: 'Email',
            })}
            {...register('email', { required: true })}
          />
        </div>

        <div>
          <label>
            <FormattedMessage id='Password' />
          </label>
          <SInput
            type='password'
            id='password'
            placeholder='••••••••'
            {...register('password', { required: true })}
          />
        </div>

        <SSelectDiv>
          <label className='pl-[20px]'>
            <FormattedMessage id='Gender Selection' />
          </label>
          <SSelect
            {...(register('gender'), { required: true })}
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
          >
            <SOption></SOption>
            <SOption value={GenderEnum.female}>
              <FormattedMessage id='female' />
            </SOption>
            <SOption value={GenderEnum.male}>
              <FormattedMessage id='male' />
            </SOption>
          </SSelect>
        </SSelectDiv>

        <SSubmitButton
          className='pt-[40px] pb-[40px] cursor-pointer'
          type='submit'
          value={intl.formatMessage({
            id: 'Submit',
          })}
        />
      </SForm>
    </SDivContainer>
  );
}
