import { type FC } from 'react';
import { useParams } from 'react-router-dom';
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
  selectModal,
  setIsOpen,
  setIsSecondaryOpen,
  setIsCancelOpen,
  setIsCancelSecondaryOpen,
} from 'src/app/store/reducers/modal/model/modalSlice';

import style from './CandidateQuestionnaire.module.scss';

const CandidateQuestionnaire: FC<ICandidateQuestionnaire> = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { ambassador } = useAppSelector(selectAmbassadors);
  const { isOpen, isSecondaryOpen, isCancelOpen } = useAppSelector(selectModal);

  const defaultValues = {
    gender: ambassador.gender,
    middle_name: ambassador.middle_name,
    first_name: ambassador.first_name,
    last_name: ambassador.last_name,
    country: ambassador.address.country,
    city: ambassador.address.city,
    street_home: ambassador.address.street_home,
    post_index: ambassador.address.post_index,
    clothes_size: ambassador.size.clothes_size,
    foot_size: ambassador.size.foot_size,
    ya_programm: ambassador.ya_programm,
    purpose: ambassador.purpose,
    education: ambassador.education,
    work: ambassador.work,
    tg_acc: ambassador.tg_acc,
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

  const onConfirm = () => {
    dispatch(setIsOpen(false));
    dispatch(setIsSecondaryOpen(true));
    console.log(id);
  };

  const onConfirmReject = (data: string) => {
    dispatch(setIsCancelOpen(false))
    console.log({id, data})
  }

  const onSubmit = (data: Object) => {
    dispatch(setIsOpen(true));
  };

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
            onClick={() => dispatch(setIsCancelOpen(true))}
          />
        </div>
      </FormContainer>
      <ChoiceModal
        open={isOpen}
        title={'Принять кандидата'}
        content={`Вы подтверждаете принятие кандидата в базу амбассадоров?`}
        onCancelLabel={'Отменить'}
        onConfirmLabel={'Подтвердить'}
        onConfirm={onConfirm}
        onCancel={() => dispatch(setIsOpen(false))}
        onClose={() => dispatch(setIsOpen(false))}
      />
      <SuccessModal
        open={isSecondaryOpen}
        onClose={() => dispatch(setIsSecondaryOpen(false))}
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
        onConfirm={onConfirmReject}
        onClose={() => dispatch(setIsCancelOpen(false))}
        onCancel={() => dispatch(setIsCancelOpen(false))}
      />
    </FormProvider>
  );
};

export default CandidateQuestionnaire;
