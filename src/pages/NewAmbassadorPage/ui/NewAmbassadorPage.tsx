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
  selectModal,
  setIsCancelOpen,
  setIsOpen,
  setIsSecondaryOpen,
  setRequestData,
} from 'src/app/store/reducers/modal/model/modalSlice';

import style from './NewAmbassadorPage.module.scss';

const NewAmbassadorPage = () => {
  const methods = useForm();
  const { isOpen, isSecondaryOpen, isCancelOpen, requestData } =
    useAppSelector(selectModal);
  const dispatch = useAppDispatch();

  const onSubmit = (data: Object) => {
    dispatch(setIsOpen(true));
    dispatch(setRequestData(data));
  };

  const onConfirm = () => {
    dispatch(postNewAmbassador({ body: requestData }));
    dispatch(setIsOpen(false));
    dispatch(setIsSecondaryOpen(true));
  };

  const onConfirmReject = () => {
    methods.reset();
    dispatch(setIsCancelOpen(false));
  };

  const onCancel = () => {
    dispatch(setIsCancelOpen(true));
  };

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
            onCancel={() => dispatch(setIsOpen(false))}
            onConfirm={onConfirm}
            onClose={() => dispatch(setIsOpen(false))}
          />
          <ChoiceModal
            open={isCancelOpen}
            title={'Отменить действие'}
            content={`Внесённые изменения не будут сохранены.
            Выйти без сохранения данных?`}
            onCancelLabel={'Отменить'}
            onConfirmLabel={'Подтвердить'}
            onCancel={() => dispatch(setIsCancelOpen(false))}
            onConfirm={onConfirmReject}
            onClose={() => dispatch(setIsCancelOpen(false))}
          />
          <SuccessModal
            open={isSecondaryOpen}
            onClose={() => dispatch(setIsSecondaryOpen(false))}
            title={'Успех'}
            content={'Все данные были успешно сохранены!'}
          />
        </FormProvider>
      </div>
    </div>
  );
};

export default NewAmbassadorPage;
