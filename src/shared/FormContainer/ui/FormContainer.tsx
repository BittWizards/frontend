import { useNavigate, useParams } from 'react-router-dom';

import editIcon from 'src/shared/icons/pencil.svg';
import removeBtn from 'src/shared/icons/remove-btn.svg';
import { useAppDispatch, useAppSelector } from 'src/app/store/hooks';
import { ChoiceModal } from 'src/entities/Modals';
import {
  selectModal,
  setIsRemoveOpen,
} from 'src/app/store/reducers/modal/model/modalSlice';
import { deleteAmbassador } from 'src/shared/api/ambassadors';
import {
  selectQuestionnaire,
  setIsEdit,
} from 'src/app/store/reducers/questionnaire/model/questionnaireSlice';

import style from './FormContainer.module.scss';

import type { IFormContainer } from '../types/types';

import type { FC } from 'react';

const FormContainer: FC<IFormContainer> = ({ title, children }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isEditable, isEdit } = useAppSelector(selectQuestionnaire);
  const { isRemoveOpen } = useAppSelector(selectModal);
  const dispatch = useAppDispatch();

  const onConfirm = () => {
    dispatch(setIsRemoveOpen(false));
    dispatch(deleteAmbassador(Number(id)));
    navigate('/ambassadors');
  };

  return (
    <form className={style.questionnaire}>
      <div className={style.titleContainer}>
        <h2 className={style.title}>{title}</h2>
        {isEditable && (
          <div className={style.editable}>
            <span className={style.line} />
            <div className={style.editableButtons}>
              <button
                type="button"
                className={style.editBtn}
                onClick={() => dispatch(setIsEdit(!isEdit))}
              >
                <img src={editIcon} alt="editIcon" />
              </button>
              <button
                type="button"
                className={style.editBtn}
                onClick={() => dispatch(setIsRemoveOpen(true))}
              >
                <img src={removeBtn} alt="removeBtn" />
              </button>
            </div>
          </div>
        )}
      </div>
      {children}
      <ChoiceModal
        open={isRemoveOpen}
        title="Удалить амбассадора"
        content="Это изменение необратимо. Удалить амбассадора?"
        onCancelLabel="Отменить"
        onConfirmLabel="Подтвердить"
        onCancel={() => dispatch(setIsRemoveOpen(false))}
        onConfirm={onConfirm}
        onClose={() => dispatch(setIsRemoveOpen(false))}
      />
    </form>
  );
};

export default FormContainer;
