import {
  SUser,
  SRightInputs,
  SEditReport,
  SInput,
  SSelect,
  SForm,
  SOption,
} from './SEditReportView.styled';
import { useForm, SubmitHandler } from 'react-hook-form';

enum GenderEnum {
  female = 'female',
  male = 'male',
  other = 'other',
}

interface IFormInput {
  firstName: String;
  gender: GenderEnum;
}

export default function EditReportView() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <SForm onSubmit={handleSubmit(onSubmit)}>
      <SUser> fullname and image </SUser>
      <div>
        <div>
          <label>First Name</label>
          <SInput {...register('firstName')} />
        </div>
      </div>
      {/* <div>
        <label>Gender Selection</label>
        <SSelect {...register('gender')}>
          <SOption value='female'>female</SOption>
          <SOption value='male'>male</SOption>
          <SOption value='other'>other</SOption>
        </SSelect>
      </div> */}

      <div>
        <label>First Name</label>
        <SInput {...register('firstName')} />
      </div>
      <div>
        <label>First Name</label>
        <SInput {...register('firstName')} />
      </div>
      <div>
        <label>First Name</label>
        <SInput {...register('firstName')} />
      </div>

      <input type='submit' />
    </SForm>
  );
}
