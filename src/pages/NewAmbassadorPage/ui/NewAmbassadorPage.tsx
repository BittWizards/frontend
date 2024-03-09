import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'src/app/store/hooks';
import {
  selectQuestionnaire,
  setIsEdit,
  setIsEditable,
} from 'src/app/store/reducers/questionnaire/model/questionnaireSlice';

import { Navbar } from 'src/widgets/NavBar';
import { QuestionnaireProfileInfo } from 'src/entities/QuestionnaireProfileInfo';
import { QuestionnaireForm } from 'src/entities/QuestionnaireForm';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { FormContainer } from 'src/shared/FormContainer';

import style from './NewAmbassadorPage.module.scss';

const NewAmbassadorPage = () => {
  const submitForm = (data: Object) => {
    console.log(data);
  };

  const { isEdit } = useAppSelector(selectQuestionnaire);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setIsEdit(true));
    dispatch(setIsEditable(false));
  }, []);

  return (
    <div className={style.main}>
      <Navbar links={navbarLinks} />
      <div className={style.content}>
        <FormContainer
          title="Новый Амбассадор"
          onSubmit={submitForm}
          submitButtonLabel="Сохранить"
          cancelButtonLabel="Отменить"
        >
          <QuestionnaireProfileInfo />
          <QuestionnaireForm />
        </FormContainer>
      </div>
    </div>
  );
};

export default NewAmbassadorPage;
