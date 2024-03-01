import { FC } from 'react';
import { IFormContainer } from '../types/types';
import { FormProvider, useForm } from 'react-hook-form';

import style from './FormContainer.module.scss';

import ButtonSecondaryComponent from 'src/entities/ButtonSecondary';
import { ButtonComponent } from 'src/entities/Button';

const FormContainer: FC<IFormContainer> = ({ title, children, defaultValues, onSubmit, submitButtonLabel, cancelButtonLabel }) => {

  const submitForm = (data: Object) => {
    onSubmit(data)
  }

  const methods = useForm({
    defaultValues: defaultValues ? defaultValues : {}
  });

  return (
    <FormProvider {...methods}>
      <form className={style.questionnaire}>
        <h2 className={style.title}>{title}</h2>
        {children}
        <div className={style.buttons}>
        <ButtonComponent
          label={submitButtonLabel}
          width={244}
          height={48}
          onClick={methods.handleSubmit(submitForm)}
        />
        <ButtonSecondaryComponent
          label={cancelButtonLabel}
          width={244}
          height={48}
          onClick={() => {}}
        />
      </div>
      </form>
    </FormProvider>
  );
};

export default FormContainer;
