import { useForm, Controller } from 'react-hook-form';

import { Input } from 'src/shared/Input';
import { Checkbox } from 'src/shared/Checkbox';
import { Textarea } from 'src/shared/Textarea';

import style from './QuestionnaireForm.module.scss';

const QuestionnaireForm = () => {

  const { control } = useForm();

  return (
    <form className={style.form}>
      <label className={`${style.label} ${style.box1}`}>
        Почтовые реквизиты
        <fieldset className={style.fieldset}>
          <Input type="text"/>
          <Input type="text" />
          <Input type="text" />
          <Input type="text" />
        </fieldset>
      </label>
      <label className={`${style.label} ${style.box2}`}>
        Данные для мерча
        <fieldset className={style.fieldset}>
          <Input type="text" />
          <Input type="text" />
        </fieldset>
      </label>
      <label className={`${style.label} ${style.box3}`}>
        Учёба и работа
        <fieldset className={style.fieldset}>
          <Input type="text" />
          <Input type="text" />
          <Input type="text" />
          <Input type="text" />
        </fieldset>
      </label>
      <label className={style.label}>
        Контактная информация
        <fieldset className={style.fieldset}>
          <Input type="url" />
          <Input type="url" />
          <Input type="url" />
          <Input type="mail" />
          <Input type="phone" />
        </fieldset>
      </label>
      <label className={`${style.label} ${style.box6}`}>
        Деятельность
        <fieldset className={style.fieldset}>
          <Checkbox label="Ведение блога" disabled={true}/>
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
          <Textarea width={976} height={155} />
        </fieldset>
      </label>
    </form>
  );
};

export default QuestionnaireForm;
