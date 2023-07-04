import { IFormInput } from '@src/contexts/ContactContext';
import { useState } from 'react';

export type ContactModalProps = {
  open: boolean;
  onClose: () => void;
  formData: IFormInput;
  isInputValid: boolean;
};

export type TContact = {
  firstName: string;
  lastName: string;
  number: number;
};

export default function ContactModal({
  open,
  onClose,
  formData,
}: ContactModalProps) {
  if (open) {
    return (
      <>
        <div
          id='defaultModal'
          className='border border-purple-700 fixed inset-0 flex items-center justify-center  '
        >
          <div
            className=' rounded-lg shadow-lg   w-full border border-purple-700 rounded-lg h-96 max-w-2xl   font-serif
 '
          >
            <div className='relative bg-zinc-800 rounded-lg shadow dark:bg-gray-700'>
              <div className='flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600'>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white text-white font-mono pt-[6px]'>
                  Your Info Already Sent
                </h3>

                <button
                  onClick={onClose}
                  type='button'
                  className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
                  data-modal-hide='defaultModal'
                >
                  <svg
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  <span className='sr-only '>Close modal</span>
                </button>
              </div>

              <div className='p-6 space-y-4  text-[17px] grid grid-cols-2  gap-x-0.5	 items-center  text-white pb-[90px]'>
                <h1>FirstName :</h1>
                <h1>{formData.firstName}</h1>
                <h1>LastName :</h1>
                <h1>{formData.lastName}</h1>
                <h1>Phone number : </h1>
                <h1>{formData.number}</h1>
              </div>

              <div className='flex justify-end items-end p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600  '></div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
}
