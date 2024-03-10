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
import {
  getAllAmbassadors,
  getAmbassadorById,
} from 'src/shared/api/ambassadors';
import { RootState } from 'src/app/store/store';

import style from './NewOrderPage.module.scss';
import { OrderForm } from 'src/entities/OrderForm';
import { IAmbassador, IAmbassadorById } from 'src/shared/api/ambassadors/dtos';
import Select from 'src/shared/Select/ui/Select';
import { FormProvider, useForm } from 'react-hook-form';

const NewOrderPage = () => {
  const ambassadors = useAppSelector(
    (state: RootState) => state.ambassadors.ambassadors
  );
  const [selectedOption, setSelectedOption] = useState<IAmbassador | null>(
    null
  );
  const [ambassador, setAmbassador] = useState<IAmbassadorById | null>(null);
  const dispatch = useAppDispatch();
  const methods = useForm();

  const handleSortChange = (newValue: IAmbassador | null) => {
    setSelectedOption(newValue);
    if (newValue) {
      dispatch(getAmbassadorById(newValue.id)).then(resultAction => {
        if (getAmbassadorById.fulfilled.match(resultAction)) {
          setAmbassador(resultAction.payload);
          methods.setValue('ambassador', resultAction.payload);
        }
      });
    }
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
        <FormProvider {...methods}>
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
              height="40px"
              label="Выберите амбассадора"
            />
            {selectedOption && (
              <>
                <QuestionnaireProfileInfo
                  user={selectedOption}
                  showGender={false}
                  showImage={false}
                  prefix="ambassador"
                />
                <OrderForm ambassador={ambassador ? ambassador : undefined} />
              </>
            )}
            {!selectedOption && (
              <>
                <QuestionnaireProfileInfo
                  showGender={false}
                  showImage={false}
                />
                <OrderForm ambassador={ambassador ? ambassador : undefined} />
              </>
            )}
          </FormContainer>
        </FormProvider>
      </div>
    </div>
  );
};

export default NewOrderPage;
