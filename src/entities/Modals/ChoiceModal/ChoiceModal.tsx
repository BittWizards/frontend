import { Dialog, DialogActions } from '@mui/material';

import { ButtonComponent } from 'src/entities/Button/';
import ButtonSecondaryComponent from 'src/entities/ButtonSecondary';

import closeBtnIcon from 'src/shared/icons/closeButton.svg';

import style from './ChoiceModal.module.scss';

import type { FC } from 'react';

type TChoiceModalModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  content: string;
  onCancelLabel: string;
  onConfirmLabel: string;
  onCancel: () => void;
  onConfirm: () => void;
};

const ChoiceModal: FC<TChoiceModalModalProps> = ({
  open,
  onClose,
  title,
  content,
  onCancelLabel,
  onConfirmLabel,
  onCancel,
  onConfirm,
}) => (
  <div className={style.modalWrapper}>
    <Dialog
      open={open}
      sx={{
        '& .MuiPaper-root': {
          backgroundColor: '#1b1c1e',
        },
      }}
      onClose={onClose}
      maxWidth="xs"
      fullWidth={false}
    >
      <div className={style.modalContainer}>
        <button type="button" className={style.closeBtn} onClick={onClose}>
          <img src={closeBtnIcon} alt="closeBtn" />
        </button>
        <h2 className={style.title}>{title}</h2>
        <span className={style.text}>{content}</span>
        <div className={style.btnWrapper}>
          <DialogActions>
            <ButtonSecondaryComponent
              label={onCancelLabel}
              width={124}
              height={48}
              onClick={onCancel}
            />
            <ButtonComponent
              label={onConfirmLabel}
              width={124}
              height={48}
              onClick={onConfirm}
            />
          </DialogActions>
        </div>
      </div>
    </Dialog>
  </div>
);

export default ChoiceModal;
