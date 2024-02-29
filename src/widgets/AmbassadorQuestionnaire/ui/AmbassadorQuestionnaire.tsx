import { FC, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { IAmbassadorQuestionnaire } from '../types/types';

import style from './AmbassadorQuestionnaire.module.scss';

import { QuestionnaireProfileInfo } from 'src/entities/QuestionnaireProfileInfo';
import { QuestionnaireForm } from 'src/entities/QuestionnaireForm';

const AmbassadorQuestionnaire: FC<IAmbassadorQuestionnaire> = ({ user }) => {
  const methods = useForm({
    defaultValues: {
      gender: 'female',
      country: user.country,
      city: user.city,
      adress: user.adress,
      index: user.index,
      clothingSize: user.clothingSize,
      shoeSize: user.shoeSize,
      programm: user.programm,
      purpose: user.purpose,
      education: user.education,
      workPlace: user.workPlace,
      telegram: user.telegram,
      wa: user.wa,
      habr: user.habr,
      email: user.email,
      phone: user.phone,
      blog: true,
      community: false,
      article: true,
      video: false,
      advice: true,
      speaking: false,
      info: ''
    },
  });

  const submit = (data: Object) => {
    console.log(data);
  };

  // useEffect(() => {
  //   setValue('gender', 'female')
  // }, [])

  return (
    <FormProvider {...methods}>
      <form
        className={style.questionnaire}
        onSubmit={methods.handleSubmit(submit)}
      >
        <h2 className={style.title}>Анкета Амбассадора</h2>
        <QuestionnaireProfileInfo user={user} />
        <QuestionnaireForm user={user} />
      </form>
    </FormProvider>
  );
};

export default AmbassadorQuestionnaire;
