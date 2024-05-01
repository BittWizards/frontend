import { useState } from 'react';

import {
  Dialog,
  DialogActions,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';

import { ButtonComponent } from 'src/entities/Button/';
import ButtonSecondaryComponent from 'src/entities/ButtonSecondary';

import closeBtnIcon from 'src/shared/icons/closeButton.svg';

import style from './InputAutoCompleteModal.module.scss';

import type { SelectChangeEvent } from '@mui/material';
import type { FC } from 'react';

type TInputModalModalProps = {
  open: boolean;
  title: string;
  tableSpan: string;
  onCancelLabel: string;
  onConfirmLabel: string;
  heightTextArea?: number;
  onClose: () => void;
  onCancel: () => void;
  onConfirm: (idAmbasador?: string, promocode?: string) => void;
};

const InputAutoCompleteModal: FC<TInputModalModalProps> = ({
  open,
  onClose,
  title,
  tableSpan,
  heightTextArea,
  onCancelLabel,
  onConfirmLabel,
  onCancel,
  onConfirm,
}) => {
  const [promocode, setPromocode] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleOptionChange = (event: SelectChangeEvent<string>) => {
    setSelectedOption(event.target.value);
  };

  return (
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
          <label className={style.textAreaWrapper}>
            <FormControl
              id="modal-input-auto"
              fullWidth
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
                  '&:hover fieldset': {
                    borderColor: '#512da8',
                  },
                  '&:invalid fieldset': {
                    borderColor: '#cd4e2e',
                  },
                  '& fieldset': {
                    borderColor: '#474646',
                  },
                },
                '& .MuiInputBase-root': {
                  minHeight: heightTextArea,
                  fontFamily: 'YSText',
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: 1.2,
                  color: '#939393',
                  '&::placeholder': {
                    color: '#939393', // Цвет текста плейсхолдера
                  },
                },
                '& .MuiInputLabel-root': {
                  color: '#474646', // Цвет текста лейбла
                  '&.Mui-focused': {
                    color: '#ebeef4', // Цвет текста лейбла при фокусе
                  },
                },
                '& .MuiSelect-icon': {
                  color: '#939393', // Цвет стрелки
                },
              }}
            >
              <InputLabel id="select-label">Выберите амбассадора</InputLabel>
              <Select
                labelId="select-label"
                value={selectedOption}
                onChange={handleOptionChange}
                label="Выберите амбассадора"
                sx={{}}
              >
                <MenuItem value="Пономарева  Ангелина">
                  Пономарева Ангелина
                </MenuItem>
                <MenuItem value="Кристинина Анна">Кристинина Анна</MenuItem>
                <MenuItem value="Очагова Алина">Очагова Алина</MenuItem>
              </Select>
            </FormControl>
          </label>
          <label className={style.textAreaWrapper} htmlFor="modal-input-text">
            {tableSpan}
            <div className={style.textArea}>
              <TextField
                id="modal-input-text"
                fullWidth
                label="Промокод"
                variant="outlined"
                value={promocode}
                onChange={e => setPromocode(e.target.value)}
                InputLabelProps={{
                  shrink: false,
                }}
                sx={{
                  '& .MuiInputLabel-root': {
                    color: '#474646', // Цвет текста лейбла
                    '&.Mui-focused': {
                      color: 'transparent', // Цвет текста лейбла при фокусе
                    },
                  },
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
                    '&:hover fieldset': {
                      borderColor: '#512da8',
                    },
                    '&:invalid fieldset': {
                      borderColor: '#cd4e2e',
                    },
                    '& fieldset': {
                      borderColor: '#474646',
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
                onClick={() => onConfirm(promocode)}
              />
            </DialogActions>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default InputAutoCompleteModal;
