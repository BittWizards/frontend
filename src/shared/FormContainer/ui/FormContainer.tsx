import type { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import ButtonSecondaryComponent from 'src/entities/ButtonSecondary';
import { ButtonComponent } from 'src/entities/Button';
import editIcon from 'src/shared/icons/pencil.svg';
import removeBtn from 'src/shared/icons/remove-btn.svg';
import type { IFormContainer } from '../types/types';
import style from './FormContainer.module.scss';
import { useAppDispatch, useAppSelector } from 'src/app/store/hooks';

import { selectQuestionnaire } from 'src/app/store/reducers/questionnaire/model/questionnaireSlice';
import { setIsEdit } from 'src/app/store/reducers/questionnaire/model/questionnaireSlice';

const FormContainer: FC<IFormContainer> = ({
  title,
  children,
  defaultValues,
  onSubmit,
  submitButtonLabel,
  cancelButtonLabel,
}) => {
  const submitForm = (data: Object) => {
    onSubmit(data);
  };
    onSubmit(data);
  };

  const methods = useForm({
    defaultValues: defaultValues || {},
    defaultValues: defaultValues || {},
  });

  const { isEditable, isEdit } = useAppSelector(selectQuestionnaire);
  const dispatch = useAppDispatch();

  return (
    <FormProvider {...methods}>
      <form className={style.questionnaire}>
        <div className={style.titleContainer}>
          <h2 className={style.title}>{title}</h2>
          {isEditable && (
            <div className={style.editable}>
              <span className={style.line}></span>
              <div className={style.editableButtons}>
                <button type="button" className={style.editBtn} onClick={() => dispatch(setIsEdit(!isEdit))}>
                  <img src={editIcon} alt="editIcon" />
                </button>
                <button type="button" className={style.editBtn}>
                  <img src={removeBtn} alt="removeBtn" />
                </button>
              </div>
            </div>
          )}
        </div>
        {children}
        <div className={style.buttons}>
          <ButtonComponent
            label={submitButtonLabel}
            width={244}
            height={48}
            onClick={methods.handleSubmit(submitForm)}
          />
          <ButtonSecondaryComponent
            label={cancelButtonLabel}
            width={244}
            height={48}
            onClick={() => {}}
          />
        </div>
      </form>
    </FormProvider>
  );
};

export default FormContainer;
