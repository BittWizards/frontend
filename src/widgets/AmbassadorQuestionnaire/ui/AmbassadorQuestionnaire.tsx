import type { FC } from 'react';
import type { IAmbassadorQuestionnaire } from '../types/types';

import { QuestionnaireProfileInfo } from 'src/entities/QuestionnaireProfileInfo';
import { QuestionnaireForm } from 'src/entities/QuestionnaireForm';
import { FormContainer } from 'src/shared/FormContainer';

import { useAppDispatch, useAppSelector } from 'src/app/store/hooks';
import { selectAmbassadors } from 'src/app/store/reducers/ambassadors/model/ambassadorsSlice';
import { ChoiceModal, SuccessModal } from 'src/entities/Modals';
import { ButtonComponent } from 'src/entities/Button';
import ButtonSecondaryComponent from 'src/entities/ButtonSecondary';
import { FormProvider, useForm } from 'react-hook-form';

import style from './AmbassadorQuestionnaire.module.scss';
import { selectQuestionnaire } from 'src/app/store/reducers/questionnaire/model/questionnaireSlice';
import {
  selectModal,
  onConfirm,
  onCancelChanges,
  onConfirmChanges,
  onCloseSecondaryModal,
  setRequestData,
} from 'src/app/store/reducers/modal/model/modalSlice';

const AmbassadorQuestionnaire: FC<IAmbassadorQuestionnaire> = () => {
  const { ambassador } = useAppSelector(selectAmbassadors);
  const { isEdit } = useAppSelector(selectQuestionnaire);
  const { isOpen, isSecondaryOpen, requestData } = useAppSelector(selectModal);

  const dispatch = useAppDispatch();

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
    dispatch(setRequestData(data));
  };

  console.log({avatar: ambassador.image, ...requestData})

  return (
    <FormProvider {...methods}>
      <FormContainer title="Анкета Амбассадора">
        <QuestionnaireProfileInfo />
        <QuestionnaireForm />

        <div className={style.buttons}>
          {isEdit && (
            <ButtonComponent
              label={'Сохранить'}
              width={244}
              height={48}
              onClick={methods.handleSubmit(onSubmit)}
            />
          )}
          <ButtonSecondaryComponent
            label={isEdit ? 'Отменить' : 'Закрыть'}
            width={244}
            height={48}
            onClick={() => {}}
          />
        </div>
        </FormContainer>
        <ChoiceModal
          open={isOpen}
          title={'Сохранить изменения'}
          content={`Данные были изменены. Сохранить изменения?`}
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
          content={'Все данные были успешно сохранены!'}
        />
    </FormProvider>
  );
};

export default AmbassadorQuestionnaire;
