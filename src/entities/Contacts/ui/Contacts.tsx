import type { FC } from 'react';
import { Input } from 'src/shared/Input';
import { FieldsetContainer } from 'src/shared/FieldsetContainer';
import { useAppSelector } from 'src/app/store/hooks';
import { selectQuestionnaire } from 'src/app/store/reducers/questionnaire/model/questionnaireSlice';
import type { IContacts } from '../types/types';

import telegram from 'src/shared/icons/telegramIcon.svg';
import email from 'src/shared/icons/mail.svg';
import phone from 'src/shared/icons/phone.svg';

import style from './Contacts.module.scss';

const Contacts: FC<IContacts> = () => {
  const { isEdit } = useAppSelector(selectQuestionnaire);

  return (
    <FieldsetContainer title="Контактная информация">
      <div className={`${style.inputIcons} ${isEdit && style.gap}`}>
        <img src={telegram} className={style.icon} alt="telegram" />
        <Input type="string" placeholder="@name" name="tg_acc" />
      </div>

      <div className={`${style.inputIcons} ${isEdit && style.gap}`}>
        <img src={email} className={style.icon} alt="email" />
        <Input type="email" placeholder="@mail.ru" name="email" />
      </div>
      <div className={`${style.inputIcons} ${isEdit && style.gap}`}>
        <img src={phone} className={style.icon} alt="phone" />
        <Input type="phone" placeholder="+7 " name="phone" />
      </div>
    </FieldsetContainer>
  );
};

export default Contacts;
