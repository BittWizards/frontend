import { FC } from 'react';
import { IContacts } from '../types/types';

import style from './Contacts.module.scss';

import { Input } from 'src/shared/Input';

import telegram from '../../../shared/icons/telegramIcon.svg';
import whatsapp from '../../../shared/icons/whatsappIcon.svg';
import habr from '../../../shared/icons/habr.svg';
import email from '../../../shared/icons/mail.svg';
import phone from '../../../shared/icons/phone.svg';
import { FieldsetContainer } from 'src/shared/FieldsetContainer';

const Contacts: FC<IContacts> = ({ isEdit }) => {
  return (
    <FieldsetContainer title='Контактная информация'>
      <div className={style.inputIcons}>
        <img src={telegram} className={style.icon} alt="telegram" />
        <Input
          type="url"
          placeholder="https://t.me/"
          name="telegram"
          isEdit={isEdit}
        />
      </div>
      <div className={style.inputIcons}>
        <img src={whatsapp} className={style.icon} alt="whatsapp" />
        <Input
          type="url"
          placeholder="https://wa.me/"
          name="wa"
          isEdit={isEdit}
        />
      </div>
      <div className={style.inputIcons}>
        <img src={habr} className={style.icon} alt="habr" />
        <Input
          type="url"
          placeholder="https://habr.com/ru/users"
          name="habr"
          isEdit={isEdit}
        />
      </div>
      <div className={style.inputIcons}>
        <img src={email} className={style.icon} alt="email" />
        <Input
          type="email"
          placeholder="@mail.ru"
          name="email"
          isEdit={isEdit}
        />
      </div>
      <div className={style.inputIcons}>
        <img src={phone} className={style.icon} alt="phone" />
        <Input type="phone" placeholder="+7 " name="phone" isEdit={isEdit} />
      </div>
    </FieldsetContainer>
  );
};

export default Contacts;
