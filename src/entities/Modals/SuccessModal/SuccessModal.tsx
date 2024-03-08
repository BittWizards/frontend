import type { FC } from 'react';
import { Dialog, DialogActions } from '@mui/material';

import { ButtonComponent } from 'src/entities/Button/';

import closeBtnIcon from 'src/shared/icons/closeButton.svg';

import style from './SuccessModal.module.scss';

type TSuccessModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  content: string;
};

const SuccessModal: FC<TSuccessModalProps> = ({
  open,
  onClose,
  title,
  content,
}) => (
  <div className={style.modalWrapper}>
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiPaper-root': {
          backgroundColor: '#1b1c1e',
        },
      }}
    >
      <div className={style.modalContainer}>
        <button
          aria-label="закрыть"
          type="button"
          className={style.closeBtn}
          onClick={onClose}
        >
          <img src={closeBtnIcon} alt="закрыть" />
        </button>
        <h2 className={style.title}>{title}</h2>
        <span className={style.text}>{content}</span>
        <div className={style.btnWrapper}>
          <DialogActions>
            <ButtonComponent
              label="ОК"
              width={124}
              height={48}
              onClick={onClose}
            />
          </DialogActions>
        </div>
      </div>
    </Dialog>
  </div>
);

export default SuccessModal;
