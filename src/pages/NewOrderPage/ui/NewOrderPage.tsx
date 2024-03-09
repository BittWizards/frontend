import { useEffect, useState } from 'react';

import {
  setIsEdit,
  setIsEditable,
} from 'src/app/store/reducers/questionnaire/model/questionnaireSlice';

import { Navbar } from 'src/widgets/NavBar';
import { QuestionnaireProfileInfo } from 'src/entities/QuestionnaireProfileInfo';
import { navbarLinks } from 'src/utils/constants/navLinks';
import { FormContainer } from 'src/shared/FormContainer';
import { useAppDispatch, useAppSelector } from 'src/app/store/hooks';
import { getAllAmbassadors } from 'src/shared/api/ambassadors';
import { RootState } from 'src/app/store/store';

import style from './NewOrderPage.module.scss';
import { OrderForm } from 'src/entities/OrderForm';
import { IAmbassador } from 'src/shared/api/ambassadors/dtos';
import Select from 'src/shared/Select/ui/Select';

const NewOrderPage = () => {
  const ambassadors = useAppSelector(
    (state: RootState) => state.ambassadors.ambassadors
  );
  const [selectedOption, setSelectedOption] = useState<IAmbassador | null>(
    null
  );
  const dispatch = useAppDispatch();

  console.log(selectedOption);

  const handleSortChange = (newValue: IAmbassador | null) => {
    setSelectedOption(newValue);
  };

  const submitForm = (data: Object) => {
    console.log(data);
  };

  useEffect(() => {
    dispatch(getAllAmbassadors());
    dispatch(setIsEdit(true));
    dispatch(setIsEditable(false));
  }, [dispatch]);

  return (
    <div className={style.main}>
      <Navbar links={navbarLinks} />
      <div className={style.content}>
        <FormContainer
          title="Создание заявки на отправку мерча"
          onSubmit={submitForm}
          submitButtonLabel="Сохранить"
          cancelButtonLabel="Отменить"
        >
          <Select
            onChange={handleSortChange}
            options={ambassadors}
            optionLabel={option => option.first_name + ' ' + option.last_name}
            width="100%"
            height="50px"
            label="Выберите амбассадора"
          />
          {selectedOption && (
            <>
              <QuestionnaireProfileInfo
                user={selectedOption}
                showGender={false}
                showImage={false}
              />
              <OrderForm ambassador={selectedOption} />
            </>
          )}
          {!selectedOption && (
            <>
              <QuestionnaireProfileInfo showGender={false} showImage={false} />
              <OrderForm />
            </>
          )}
        </FormContainer>
      </div>
    </div>
  );
};

export default NewOrderPage;
