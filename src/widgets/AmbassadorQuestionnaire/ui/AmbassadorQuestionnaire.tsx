import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { IAmbassadorQuestionnaire } from '../types/types';

import style from './AmbassadorQuestionnaire.module.scss';

import { QuestionnaireProfileInfo } from 'src/entities/QuestionnaireProfileInfo';
import { QuestionnaireForm } from 'src/entities/QuestionnaireForm';
import { ButtonComponent } from 'src/entities/Button';
import ButtonSecondaryComponent from 'src/entities/ButtonSecondary';

const AmbassadorQuestionnaire: FC<IAmbassadorQuestionnaire> = ({ user }) => {

  const methods = useForm({
    defaultValues: {
      gender: 'female',
      surname: user.surname,
      name: user.name,
      secondname: user.secondname,
      country: user.country,
      city: user.city,
      adress: user.adress,
      index: user.index,
      clothingSize: user.clothingSize,
      shoeSize: user.shoeSize,
      position: user.position,
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
      info: '',
    },
  });

  const submitForm = (user: Object) => {
    console.log('saved', {user});
  };

  return (
    <FormProvider {...methods}>
      <form className={style.questionnaire}>
        <h2 className={style.title}>Анкета Амбассадора</h2>
        <QuestionnaireProfileInfo isEdit={false} user={user} />
        <QuestionnaireForm isEdit={false} />
        <div className={style.buttons}>
          <ButtonComponent
            label={'Сохранить'}
            width={244}
            height={48}
            onClick={methods.handleSubmit(submitForm)}
          />
          <ButtonSecondaryComponent
            label={'Отменить'}
            width={244}
            height={48}
            onClick={() => {}}
          />
        </div>
      </form>
    </FormProvider>
  );
};

export default AmbassadorQuestionnaire;
