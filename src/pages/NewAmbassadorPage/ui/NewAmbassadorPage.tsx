import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Navbar } from 'src/widgets/NavBar';
import { QuestionnaireProfileInfo } from 'src/entities/QuestionnaireProfileInfo';
import { QuestionnaireForm } from 'src/entities/QuestionnaireForm';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { FormContainer } from 'src/shared/FormContainer';
import { ButtonComponent } from 'src/entities/Button';
import ButtonSecondaryComponent from 'src/entities/ButtonSecondary';


import { postNewAmbassador } from 'src/shared/api/ambassadors';
import { ChoiceModal, SuccessModal } from 'src/entities/Modals';
import { useAppDispatch, useAppSelector } from 'src/app/store/hooks';
import {
  setIsEdit,
  setIsEditable,
} from 'src/app/store/reducers/questionnaire/model/questionnaireSlice';
import {
  onCancelChanges,
  onCloseSecondaryModal,
  onConfirmChanges,
  selectModal,
  setIsCancelOpen,
  setIsOpen,
} from 'src/app/store/reducers/modal/model/modalSlice';

import style from './NewAmbassadorPage.module.scss';

const NewAmbassadorPage = () => {
  const methods = useForm();
  const { isOpen, isSecondaryOpen, isCancelOpen } = useAppSelector(selectModal);

  const onSubmit = (data: Object) => {
    dispatch(setIsOpen(true));
    dispatch(postNewAmbassador({body: data}))
  };

  const onCancel = () => {
    dispatch(setIsCancelOpen(true));
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setIsEdit(true));
    dispatch(setIsEditable(false));
  }, []);

  return (
    <div className={style.main}>
      <Navbar links={navbarLinks} />
      <div className={style.content}>
        <FormProvider {...methods}>
          <FormContainer title="Новый Амбассадор">
            <QuestionnaireProfileInfo />
            <QuestionnaireForm />
            <div className={style.buttons}>
              <ButtonComponent
                label={'Добавить'}
                width={244}
                height={48}
                onClick={methods.handleSubmit(onSubmit)}
              />
              <ButtonSecondaryComponent
                label={'Отменить'}
                width={244}
                height={48}
                onClick={onCancel}
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
          <ChoiceModal
            open={isCancelOpen}
            title={'Отменить действие'}
            content={`Внесённые изменения не будут сохранены.
            Выйти без сохранения данных?`}
            onCancelLabel={'Отменить'}
            onConfirmLabel={'Подтвердить'}
            onCancel={() => dispatch(setIsCancelOpen(false))}
            onConfirm={() => {}}
            onClose={() => dispatch(setIsCancelOpen(false))}
          />
          <SuccessModal
            open={isSecondaryOpen}
            onClose={() => dispatch(onCloseSecondaryModal())}
            title={'Успех'}
            content={'Все данные были успешно сохранены!'}
          />
        </FormProvider>
      </div>
    </div>
  );
};

export default NewAmbassadorPage;
