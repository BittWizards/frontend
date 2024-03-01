import style from './NewAmbassadorPage.module.scss';

import { Navbar } from 'src/widgets/NavBar';
import { QuestionnaireProfileInfo } from 'src/entities/QuestionnaireProfileInfo';
import { QuestionnaireForm } from 'src/entities/QuestionnaireForm';

import { navbarLinks } from 'src/utils/constants/navLinks';
import { FormContainer } from 'src/shared/FormContainer';

const NewAmbassadorPage = () => {
  const submitForm = (data: Object) => {
    console.log(data);
  };

  return (
    <div className={style.main}>
      <Navbar links={navbarLinks} />
      <div className={style.content}>
        <FormContainer
          title="Новый Амбассадор"
          onSubmit={submitForm}
          submitButtonLabel="Сохранить"
          cancelButtonLabel="Отменить"
        >
          <QuestionnaireProfileInfo isEdit={true} />
          <QuestionnaireForm isEdit={true} />
        </FormContainer>
      </div>
    </div>
  );
};

export default NewAmbassadorPage;