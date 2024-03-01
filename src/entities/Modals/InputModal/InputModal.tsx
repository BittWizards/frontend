import { FC } from 'react';
import { Dialog, DialogActions, TextField } from '@mui/material';
import { ButtonComponent } from 'src/entities/Button/';
import ButtonSecondaryComponent from 'src/entities/ButtonSecondary';

import style from './InputModal.module.scss';

type TInputModalModalProps = {
  open: boolean;
  title: string;
  content: string;
  tableSpan?: string;
  onCancelLabel: string;
  onConfirmLabel: string;
  heightTextArea?: number;
  placeholderTextArea?: string;
  onClose: () => void;
  onCancel: () => void;
  onConfirm: () => void;
};

const InputModal: FC<TInputModalModalProps> = ({
  open,
  onClose,
  title,
  content,
  tableSpan,
  heightTextArea,
  placeholderTextArea,
  onCancelLabel,
  onConfirmLabel,
  onCancel,
  onConfirm,
}) => {
  return (
    <div className={style.modalWrapper}>
      <Dialog open={open} onClose={onClose} maxWidth={'xs'} fullWidth={false}>
        <div className={style.modalContainer}>
          <h2 className={style.title}>{title}</h2>
          <span className={style.text}>{content}</span>
          <label className={style.textAreaWrapper}>
            {tableSpan}
            <div className={style.textArea}>
              <TextField
                id="modal-textarea"
                placeholder={placeholderTextArea}
                multiline
                sx={{
                  color: '#939393',
                  borderColor: '#474646',
                  width: '100%',
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: 1.2,
                  outline: 'none',
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                      border: '1px solid #ebeef4',
                    },
                    '& input:hover + fieldset': {
                      borderColor: '#512da8',
                    },
                    '& input:invalid + fieldset': {
                      borderColor: '#cd4e2e',
                    },
                  },
                  '& .MuiInputBase-root': {
                    minHeight: heightTextArea,
                    fontFamily: 'YSText',
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: 1.2,
                    color: '#939393',
                  },
                }}
              />
            </div>
          </label>
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
};

export default InputModal;
