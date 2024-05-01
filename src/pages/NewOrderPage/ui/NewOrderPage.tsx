import { useEffect, useState } from 'react';

import {
  setIsEdit,
  setIsEditable,
} from 'src/app/store/reducers/questionnaire/model/questionnaireSlice';

import { Navbar } from 'src/widgets/NavBar';
import { QuestionnaireProfileInfo } from 'src/entities/QuestionnaireProfileInfo';
import { navbarLinks } from 'src/utils/constants/navLinks';
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
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { ButtonComponent } from 'src/entities/Button';
import ButtonSecondaryComponent from 'src/entities/ButtonSecondary';
import { postNewOrder } from 'src/shared/api/orders';
import { TNewOrder } from 'src/shared/api/orders/dtos';
import { ChoiceModal, SuccessModal } from 'src/entities/Modals';
import { useNavigate } from 'react-router-dom';

const NewOrderPage = () => {
  const ambassadors = useAppSelector(
    (state: RootState) => state.ambassadors.ambassadors
  );
  const [ambassador, setAmbassador] = useState<IAmbassadorById | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isCancelOpen, setIsCancelOpen] = useState(false);
  const [isSecondaryOpen, setIsSecondaryOpen] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const methods = useForm<TNewOrder>({});

  const handleAmbassadorChange = (newValue: IAmbassador | null) => {
    if (newValue) {
      dispatch(getAmbassadorById(newValue.id)).then(resultAction => {
        if (getAmbassadorById.fulfilled.match(resultAction)) {
          const ambassadorById = resultAction.payload;
          setAmbassador(ambassadorById);
          methods.setValue('ambassador', ambassadorById.id);
          methods.setValue('last_name', ambassadorById.last_name);
          methods.setValue('first_name', ambassadorById.first_name);
          methods.setValue('middle_name', ambassadorById.middle_name);
          methods.setValue('country', ambassadorById.address.country);
          methods.setValue('city', ambassadorById.address.city);
          methods.setValue('street_home', ambassadorById.address.street_home);
          methods.setValue('post_index', ambassadorById.address.post_index);
          methods.setValue('phone', ambassadorById.phone);
        }
      });
    } else {
      setAmbassador(null);
    }
  };

  const onSubmit: SubmitHandler<TNewOrder> = data => {
    data.merch.forEach((item, index) => {
      if (!item) {
        data.merch.splice(index, 1);
      }
    });
    dispatch(postNewOrder({ body: data }));
    setIsOpen(false);
    navigate('/merch');
  };

  const onConfirmReject = () => {
    methods.reset();
    setIsCancelOpen(false);
    navigate('/merch');
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
          <form className={style.questionnaire}>
            <h2 className={style.title}>Создание заявки на отправку мерча</h2>
            <Select
              onChange={handleAmbassadorChange}
              options={ambassadors}
              optionLabel={option => option.first_name + ' ' + option.last_name}
              width="100%"
              height="40px"
              label="Выберите амбассадора"
              ambassadorRender={true}
            />
            {ambassador && (
              <>
                <QuestionnaireProfileInfo hideExtra={true} />
                <OrderForm ambassador={ambassador ? ambassador : undefined} />
                <div className={style.buttons}>
                  <ButtonComponent
                    label="Сохранить"
                    width={244}
                    height={48}
                    onClick={() => setIsOpen(true)}
                  />
                  <ButtonSecondaryComponent
                    label="Отменить"
                    width={244}
                    height={48}
                    onClick={() => setIsCancelOpen(true)}
                  />
                </div>
              </>
            )}
            <ChoiceModal
              open={isOpen}
              title="Создать заявку"
              content="Вы уверены, что хотите создать заявку?"
              onCancelLabel="Отменить"
              onConfirmLabel="Подтвердить"
              onCancel={() => setIsOpen(false)}
              onConfirm={methods.handleSubmit(onSubmit)}
              onClose={() => setIsOpen(false)}
            />
            <ChoiceModal
              open={isCancelOpen}
              title="Отменить действие"
              content={`Внесённые изменения не будут сохранены.
              Выйти без сохранения данных?`}
              onCancelLabel="Отменить"
              onConfirmLabel="Подтвердить"
              onCancel={() => setIsCancelOpen(false)}
              onConfirm={onConfirmReject}
              onClose={() => setIsCancelOpen(false)}
            />
            <SuccessModal
              open={isSecondaryOpen}
              onClose={() => setIsSecondaryOpen(false)}
              title="Успех"
              content="Заявка успешно создана!"
            />
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default NewOrderPage;
