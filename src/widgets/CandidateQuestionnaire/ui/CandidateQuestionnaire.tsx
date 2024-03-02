import { FC } from 'react';
import { ICandidateQuestionnaire } from '../types/types';

import { FormContainer } from 'src/shared/FormContainer';
import { QuestionnaireProfileInfo } from 'src/entities/QuestionnaireProfileInfo';
import { QuestionnaireForm } from 'src/entities/QuestionnaireForm';

const CandidateQuestionnaire: FC<ICandidateQuestionnaire> = ({ user }) => {
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
      title="Анкета Кандидата"
      defaultValues={defaultValues}
      onSubmit={submitForm}
      submitButtonLabel="Принять"
      cancelButtonLabel="Отклонить"
    >
      <QuestionnaireProfileInfo isEdit={false} user={user} />
      <QuestionnaireForm isEdit={false} />
    </FormContainer>
  );
};

export default CandidateQuestionnaire;
