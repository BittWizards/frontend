import { FormProvider, useForm } from 'react-hook-form';

import style from './NewAmbassadorPage.module.scss';

import { Navbar } from 'src/widgets/NavBar';
import { QuestionnaireProfileInfo } from 'src/entities/QuestionnaireProfileInfo';
import { QuestionnaireForm } from 'src/entities/QuestionnaireForm';
import { ButtonComponent } from 'src/entities/Button';
import ButtonSecondaryComponent from 'src/entities/ButtonSecondary';

import { navbarLinks } from 'src/utils/constants/navLinks';

const NewAmbassadorPage = () => {
  const methods = useForm();
  const submitForm = (data: Object) => {
    console.log(data)
  };

  return (
    <div className={style.main}>
      <Navbar links={navbarLinks} />
      <div className={style.content}>
        <FormProvider {...methods}>
          <form className={style.questionnaire}>
            <h2 className={style.title}>Анкета Амбассадора</h2>
            <QuestionnaireProfileInfo isEdit={true} />
            <QuestionnaireForm isEdit={true} />
            <div className={style.buttons}>
              <ButtonComponent
                label={'Сохранить'}
                width={244}
                height={48}
                onClick={methods.handleSubmit(submitForm)}
              />
              <ButtonSecondaryComponent
                label={'Отменить'}
                width={244}
                height={48}
                onClick={() => {}}
              />
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default NewAmbassadorPage;
