import { useForm, SubmitHandler, Controller } from 'react-hook-form';

import { Input } from 'src/shared/Input';
import { IInput } from 'src/shared/Input/types/types';
import { Checkbox } from 'src/shared/Checkbox';
import { Textarea } from 'src/shared/Textarea';
import ButtonComponent from 'src/entities/Button';
import { TextField, TextFieldProps } from '@mui/material';

import style from './QuestionnaireForm.module.scss';

const QuestionnaireForm = () => {

  const { control, handleSubmit } = useForm<MyForm>();

  interface MyForm {
    name: string;
    age: string
  }

  const submit: SubmitHandler<MyForm> = data => {
    console.log(data);
  };

  return (
    <form className={style.form}>
      <label className={`${style.label} ${style.box1}`}>
        Почтовые реквизиты
        <fieldset className={style.fieldset}>
          <Controller
            name='name'
            control={control}
            render={({field}) => <Input field={field} />}
          />
          <ButtonComponent label='Отправить' width={200} height={200} onClick={handleSubmit(submit)} />
          {/* <Input type="text" disabled={true}/>
          <Input type="text" />
          <Input type="text" />
          <Input type="text" /> */}
        </fieldset>
      </label>
      <label className={`${style.label} ${style.box2}`}>
        Данные для мерча
        <fieldset className={style.fieldset}>
          {/* <Input type="text" />
          <Input type="text" /> */}
        </fieldset>
      </label>
      <label className={`${style.label} ${style.box3}`}>
        Учёба и работа
        <fieldset className={style.fieldset}>
          {/* <Input type="text" />
          <Input type="text" />
          <Input type="text" />
          <Input type="text" /> */}
        </fieldset>
      </label>
      <label className={style.label}>
        Контактная информация
        <fieldset className={style.fieldset}>
          {/* <Input type="url" />
          <Input type="url" />
          <Input type="url" />
          <Input type="mail" />
          <Input type="phone" /> */}
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
