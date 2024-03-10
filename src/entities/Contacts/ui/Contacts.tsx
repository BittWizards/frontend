import type { FC } from 'react';
import { Input } from 'src/shared/Input';
import { FieldsetContainer } from 'src/shared/FieldsetContainer';
import type { IContacts } from '../types/types';

import style from './Contacts.module.scss';

import telegram from '../../../shared/icons/telegramIcon.svg';
import whatsapp from '../../../shared/icons/whatsappIcon.svg';
import habr from '../../../shared/icons/habr.svg';
import email from '../../../shared/icons/mail.svg';
import phone from '../../../shared/icons/phone.svg';

const Contacts: FC<IContacts> = () => (
  <FieldsetContainer title="Контактная информация">
    <div className={style.inputIcons}>
      <img src={telegram} className={style.icon} alt="telegram" />
      <Input type="url" placeholder="https://t.me/" name="tg_acc" />
    </div>

    <div className={style.inputIcons}>
      <img src={email} className={style.icon} alt="email" />
      <Input type="email" placeholder="@mail.ru" name="email" />
    </div>
    <div className={style.inputIcons}>
      <img src={phone} className={style.icon} alt="phone" />
      <Input type="phone" placeholder="+7 " name="phone" />
    </div>
  </FieldsetContainer>
);

export default Contacts;
