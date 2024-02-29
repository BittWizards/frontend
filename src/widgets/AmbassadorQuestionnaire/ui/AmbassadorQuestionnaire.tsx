import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { IAmbassadorQuestionnaire } from '../types/types';

import style from './AmbassadorQuestionnaire.module.scss';

import { QuestionnaireProfileInfo } from 'src/entities/QuestionnaireProfileInfo';
import { QuestionnaireForm } from 'src/entities/QuestionnaireForm';

const AmbassadorQuestionnaire: FC<IAmbassadorQuestionnaire> = ({ user }) => {

  const methods = useForm();

  const submit = (data: Object) => {
    console.log(data)
  }

  return (
    <FormProvider {...methods}>
      <form className={style.questionnaire} onSubmit={methods.handleSubmit(submit)}>
        <h2 className={style.title}>Анкета Амбассадора</h2>
        <QuestionnaireProfileInfo user={user} />
        <QuestionnaireForm user={user} />
      </form>
    </FormProvider>
  );
};

export default AmbassadorQuestionnaire;
