import { type FC } from 'react';
import type { ICandidateQuestionnaire } from '../types/types';

import { FormContainer } from 'src/shared/FormContainer';
import { QuestionnaireProfileInfo } from 'src/entities/QuestionnaireProfileInfo';
import { QuestionnaireForm } from 'src/entities/QuestionnaireForm';
import { selectAmbassadors } from 'src/app/store/reducers/ambassadors/model/ambassadorsSlice';
import { useAppSelector } from 'src/app/store/hooks';

const CandidateQuestionnaire: FC<ICandidateQuestionnaire> = () => {
  const { ambassador } = useAppSelector(selectAmbassadors);

  const defaultValues = {
    gender: ambassador.gender,
    surname: ambassador.middle_name,
    name: ambassador.first_name,
    secondname: ambassador.last_name,
    country: ambassador.address.country,
    city: ambassador.address.city,
    adress: ambassador.address.street_home,
    index: ambassador.address.post_index,
    clothingSize: ambassador.size.clothes_size,
    shoeSize: ambassador.size.foot_size,
    position: ambassador.ya_programm,
    purpose: ambassador.purpose,
    education: ambassador.education,
    workPlace: ambassador.work,
    telegram: ambassador.tg_acc,
    email: ambassador.email,
    phone: ambassador.phone,
    blog: true, //
    community: false, //
    article: true, //
    video: false, //
    advice: true, //
    speaking: false, //
    info: '', //
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
      <QuestionnaireProfileInfo />
      <QuestionnaireForm />
    </FormContainer>
  );
};

export default CandidateQuestionnaire;
