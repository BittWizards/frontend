import { FC } from 'react';
import { IAmbassadorQuestionnaire } from '../types/types';

import { QuestionnaireProfileInfo } from 'src/entities/QuestionnaireProfileInfo';
import { QuestionnaireForm } from 'src/entities/QuestionnaireForm';
import { FormContainer } from 'src/shared/FormContainer';

const AmbassadorQuestionnaire: FC<IAmbassadorQuestionnaire> = ({ user }) => {
  const defaultValues = {
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
  };

  const submitForm = (data: Object) => {
    console.log(data);
  };

  return (
    <FormContainer
      title="Анкета Амбассадора"
      defaultValues={defaultValues}
      onSubmit={submitForm}
      submitButtonLabel="Сохранить"
      cancelButtonLabel="Отменить"
    >
      <QuestionnaireProfileInfo isEdit={false} user={user} />
      <QuestionnaireForm isEdit={false} />
    </FormContainer>
  );
};

export default AmbassadorQuestionnaire;
