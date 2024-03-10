import { type FC } from 'react';
import type { ICandidateQuestionnaire } from '../types/types';

import { FormContainer } from 'src/shared/FormContainer';
import { QuestionnaireProfileInfo } from 'src/entities/QuestionnaireProfileInfo';
import { QuestionnaireForm } from 'src/entities/QuestionnaireForm';
import { selectAmbassadors } from 'src/app/store/reducers/ambassadors/model/ambassadorsSlice';
import { useAppDispatch, useAppSelector } from 'src/app/store/hooks';
import { FormProvider, useForm } from 'react-hook-form';
import { ButtonComponent } from 'src/entities/Button';
import { ChoiceModal, InputModal, SuccessModal } from 'src/entities/Modals';
import ButtonSecondaryComponent from 'src/entities/ButtonSecondary';

import {
  onCancelChanges,
  onConfirmChanges,
  selectModal,
  onConfirm,
  onCloseSecondaryModal,
  setIsCancelOpen,
} from 'src/app/store/reducers/modal/model/modalSlice';

import style from './CandidateQuestionnaire.module.scss';

const CandidateQuestionnaire: FC<ICandidateQuestionnaire> = () => {
  const dispatch = useAppDispatch();
  const { ambassador } = useAppSelector(selectAmbassadors);
  const { isOpen, isSecondaryOpen, isCancelOpen } = useAppSelector(selectModal);

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

  const methods = useForm({
    defaultValues: defaultValues,
  });

  const onSubmit = (data: Object) => {
    dispatch(onConfirm());
    console.log(data);
  };

  const onCancel = () => {
    dispatch(setIsCancelOpen(true))
  }

  return (
    <FormProvider {...methods}>
      <FormContainer title="Анкета Кандидата">
        <QuestionnaireProfileInfo />
        <QuestionnaireForm />
        <div className={style.buttons}>
          <ButtonComponent
            label={'Принять'}
            width={244}
            height={48}
            onClick={methods.handleSubmit(onSubmit)}
          />
          <ButtonSecondaryComponent
            label={'Отклонить'}
            width={244}
            height={48}
            onClick={onCancel}
          />
        </div>
      </FormContainer>
      <ChoiceModal
        open={isOpen}
        title={'Принять кандидата'}
        content={`Вы подтверждаете принятие кандидата в базу амбассадоров?`}
        onCancelLabel={'Отменить'}
        onConfirmLabel={'Подтвердить'}
        onCancel={() => dispatch(onCancelChanges())}
        onConfirm={() => dispatch(onConfirmChanges())}
        onClose={() => dispatch(onCancelChanges())}
      />
      <SuccessModal
        open={isSecondaryOpen}
        onClose={() => dispatch(onCloseSecondaryModal())}
        title={'Успех'}
        content={'Новый Амбассадор был добавлен в базу!'}
      />
      <InputModal
        open={isCancelOpen}
        title={'Отклонить кандидата'}
        content={
          'Вы хотите отклонить анкету кандидата, если вы уверены, укажите причину в сообщении'
        }
        onCancelLabel={'Отменить'}
        onConfirmLabel={'Подтвердить'}
        onClose={() => dispatch(setIsCancelOpen(false))}
        onCancel={() => dispatch(setIsCancelOpen(false))}
        onConfirm={() => {}}
      />
    </FormProvider>
  );
};

export default CandidateQuestionnaire;
