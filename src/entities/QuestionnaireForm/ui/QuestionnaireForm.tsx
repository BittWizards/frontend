import { useForm, SubmitHandler } from 'react-hook-form';
import { FC, useState } from 'react';

import { IQuestionnaireForm } from '../types/types';

import { Input } from 'src/shared/Input';
import { Checkbox } from 'src/shared/Checkbox';
import { Textarea } from 'src/shared/Textarea';
import ButtonSecondaryComponent from 'src/entities/ButtonSecondary';
import { ButtonComponent } from 'src/entities/Button';

import telegram from '../../../shared/icons/telegramIcon.svg';
import whatsapp from '../../../shared/icons/whatsappIcon.svg';
import habr from '../../../shared/icons/habr.svg';
import email from '../../../shared/icons/mail.svg';
import phone from '../../../shared/icons/phone.svg';

import style from './QuestionnaireForm.module.scss';

const QuestionnaireForm: FC<IQuestionnaireForm> = ({ user }) => {
  const [isEdit, setIsEdit] = useState(false);
  const handleClick = () => {
    setIsEdit(!isEdit)
  }

  return (
    <div>
      <div className={style.grid}>
        <label className={`${style.label} ${style.box1}`}>
          Почтовые реквизиты
          <fieldset className={style.fieldset}>
            <Input
              type="text"
              placeholder="Страна"
              name="country"
              value={user.country}
              isEdit={isEdit}
            />
            <Input
              type="text"
              placeholder="Город"
              name="city"
              value={user.city}
              isEdit={isEdit}
            />
            <Input
              type="text"
              placeholder="Адрес"
              name="adress"
              value={user.adress}
              isEdit={isEdit}
            />
            <Input
              type="text"
              placeholder="Индекс"
              name="index"
              value={user.index}
              isEdit={isEdit}
            />
          </fieldset>
        </label>
        <label className={`${style.label} ${style.box2}`}>
          Данные для мерча
          <fieldset className={style.fieldset}>
            <Input
              type="text"
              placeholder="Размер одежды"
              name="clothingSize"
              value={user.clothingSize}
              isEdit={isEdit}
            />
            <Input
              type="text"
              placeholder="Размер обуви"
              name="shoeSize"
              value={user.shoeSize}
              isEdit={isEdit}
            />
          </fieldset>
        </label>
        <label className={`${style.label} ${style.box3}`}>
          Учёба и работа
          <fieldset className={style.fieldset}>
            <Input
              type="text"
              placeholder="Программа обучения в Практикуме"
              name="programm"
              value={user.programm}
              isEdit={isEdit}
            />
            <Input
              type="text"
              placeholder="Цель обучения в Практикуме"
              name="purpose"
              value={user.purpose}
              isEdit={isEdit}
            />
            <Input
              type="text"
              placeholder="Образование"
              name="education"
              value={user.education}
              isEdit={isEdit}
            />
            <Input
              type="text"
              placeholder="Место работы"
              name="workPlace"
              value={user.workPlace}
              isEdit={isEdit}
            />
          </fieldset>
        </label>
        <label className={style.label}>
          Контактная информация
          <fieldset className={style.fieldset}>
            <div className={style.inputIcons}>
              <img src={telegram} className={style.icon} alt="telegram" />
              <Input
                type="url"
                placeholder="https://t.me/"
                name="telegram"
                value={user.telegram}
                isEdit={isEdit}
              />
            </div>
            <div className={style.inputIcons}>
              <img src={whatsapp} className={style.icon} alt="whatsapp" />
              <Input
                type="url"
                placeholder="https://wa.me/"
                name="wa"
                value={user.wa}
                isEdit={isEdit}
              />
            </div>
            <div className={style.inputIcons}>
              <img src={habr} className={style.icon} alt="habr" />
              <Input
                type="url"
                placeholder="https://habr.com/ru/users"
                name="habr"
                value={user.habr}
                isEdit={isEdit}
              />
            </div>
            <div className={style.inputIcons}>
              <img src={email} className={style.icon} alt="email" />
              <Input
                type="email"
                placeholder="@mail.ru"
                name="email"
                value={user.email}
                isEdit={isEdit}
              />
            </div>
            <div className={style.inputIcons}>
              <img src={phone} className={style.icon} alt="phone" />
              <Input
                type="phone"
                placeholder="+7 "
                name="phone"
                value={user.phone}
                isEdit={isEdit}
              />
            </div>
          </fieldset>
        </label>
        <label className={`${style.label} ${style.box6}`}>
          Деятельность
          <fieldset className={style.fieldset}>
            <Checkbox
              label="Ведение блога"
              isEdit={isEdit}
              checked={true}
              name="blog"
            />
            <Checkbox
              label="Развитие сообщества"
              isEdit={isEdit}
              checked={true}
              name="community"
            />
            <Checkbox
              label="Написание статей"
              isEdit={isEdit}
              checked={false}
              name="article"
            />
            <Checkbox
              label="Съёмка видео"
              isEdit={isEdit}
              checked={false}
              name="video"
            />
            <Checkbox
              label="Консультации по Яндекс Практикуму"
              isEdit={isEdit}
              checked={true}
              name="advice"
            />
            <Checkbox
              label="Выступление на мероприятиях"
              isEdit={isEdit}
              checked={true}
              name="speaking"
            />
          </fieldset>
        </label>
        <label className={`${style.label} ${style.boxDown}`}>
          Дополнительная информация
          <fieldset className={`${style.fieldset} ${style.widthXL}`}>
            <Textarea
              width={976}
              height={155}
              placeholder="Дополнительная информация об Амбассадоре"
              isEdit={isEdit}
            />
          </fieldset>
        </label>
      </div>
      <div className={style.buttons}>
        <ButtonComponent
          label={'Сохранить'}
          width={244}
          height={48}
          onClick={() => {}}
        />
        <ButtonSecondaryComponent
          label={'Отменить'}
          width={244}
          height={48}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default QuestionnaireForm;
