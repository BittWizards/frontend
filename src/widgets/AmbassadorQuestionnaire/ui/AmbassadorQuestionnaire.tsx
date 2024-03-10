import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import { QuestionnaireProfileInfo } from 'src/entities/QuestionnaireProfileInfo';
import { QuestionnaireForm } from 'src/entities/QuestionnaireForm';
import { FormContainer } from 'src/shared/FormContainer';
import { useAppDispatch, useAppSelector } from 'src/app/store/hooks';
import { selectAmbassadors } from 'src/app/store/reducers/ambassadors/model/ambassadorsSlice';
import { ChoiceModal, SuccessModal } from 'src/entities/Modals';
import { ButtonComponent } from 'src/entities/Button';
import ButtonSecondaryComponent from 'src/entities/ButtonSecondary';

import { patchChangeAmbassador } from 'src/shared/api/ambassadors';
import {
  selectQuestionnaire,
  setIsEdit,
} from 'src/app/store/reducers/questionnaire/model/questionnaireSlice';
import {
  selectModal,
  setRequestData,
  setIsOpen,
  setIsSecondaryOpen,
  setIsCancelOpen,
} from 'src/app/store/reducers/modal/model/modalSlice';

import style from './AmbassadorQuestionnaire.module.scss';

const AmbassadorQuestionnaire = () => {
  const { id } = useParams();
  const { ambassador } = useAppSelector(selectAmbassadors);
  const { isEdit } = useAppSelector(selectQuestionnaire);
  const { isOpen, isSecondaryOpen, requestData, isCancelOpen } =
    useAppSelector(selectModal);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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

  console.log(ambassador)

  const methods = useForm({
    defaultValues: defaultValues,
  });

  const onSubmit = (data: any) => {
    dispatch(setIsOpen(true));
    dispatch(setRequestData(data));
    dispatch(patchChangeAmbassador({id: Number(id), body: data}));
  };

  const onConfirm = () => {
    dispatch(setIsOpen(false));
    dispatch(setIsSecondaryOpen(true));
    console.log(requestData);
  };

  const onConfirmReject = () => {
    methods.reset(defaultValues);
    dispatch(setIsCancelOpen(false));
    dispatch(setIsEdit(false));
  };

  const onCancelChanges = () => {
    isEdit ? dispatch(setIsCancelOpen(true)) : navigate(-1);
  };

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
            onClick={onCancelChanges}
          />
        </div>
      </FormContainer>
      <ChoiceModal
        open={isOpen}
        title={'Сохранить изменения'}
        content={`Данные были изменены. Сохранить изменения?`}
        onCancelLabel={'Отменить'}
        onConfirmLabel={'Подтвердить'}
        onCancel={() => {}}
        onConfirm={onConfirm}
        onClose={() => {}}
      />
      <ChoiceModal
        open={isCancelOpen}
        title={'Сохранить изменения'}
        content={`Данные были изменены. Сохранить изменения?`}
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
  );
};

export default AmbassadorQuestionnaire;
