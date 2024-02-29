import { useForm, SubmitHandler } from 'react-hook-form';
import { FC, useState } from 'react';

import { IQuestionnaireForm } from '../types/types';

import { Input } from 'src/shared/Input';
import { Checkbox } from 'src/shared/Checkbox';
import { Textarea } from 'src/shared/Textarea';
import ButtonSecondaryComponent from 'src/entities/ButtonSecondary';
import { ButtonComponent } from 'src/entities/Button';

import style from './QuestionnaireForm.module.scss';

const QuestionnaireForm: FC<IQuestionnaireForm> = ({ user }) => {
  const [isEdit, setIsEdit] = useState(false);

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
            <Input
              type="url"
              placeholder="https://t.me/"
              name="telegram"
              value={user.telegram}
              isEdit={isEdit}
            />
            <Input
              type="url"
              placeholder="https://wa.me/"
              name="wa"
              value={user.wa}
              isEdit={isEdit}
            />
            <Input
              type="url"
              placeholder="https://habr.com/ru/users"
              name="habr"
              value={user.habr}
              isEdit={isEdit}
            />
            <Input
              type="email"
              placeholder="@mail.ru"
              name="email"
              value={user.email}
              isEdit={isEdit}
            />
            <Input
              type="phone"
              placeholder="+7 "
              name="phone"
              value={user.phone}
              isEdit={isEdit}
            />
          </fieldset>
        </label>
        <label className={`${style.label} ${style.box6}`}>
          Деятельность
          <fieldset className={style.fieldset}>
            <Checkbox label="Ведение блога" />
            <Checkbox label="Развитие сообщества" />
            <Checkbox label="Написание статей" />
            <Checkbox label="Съёмка видео" />
            <Checkbox label="Консультации по Яндекс Практикуму" />
            <Checkbox label="Выступление на мероприятиях" />
          </fieldset>
        </label>
        <label className={`${style.label} ${style.boxDown}`}>
          Дополнительная информация
          <fieldset className={`${style.fieldset} ${style.widthXL}`}>
            <Textarea
              width={976}
              height={155}
              placeholder="Дополнительная информация об Амбассадоре"
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
