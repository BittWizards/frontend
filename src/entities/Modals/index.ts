import SuccessModal from 'src/entities/Modals/SuccessModal/SuccessModal';
import ChoiceModal from 'src/entities/Modals/ChoiceModal/ChoiceModal';
import InputModal from 'src/entities/Modals/InputModal/InputModal';
import DateInputModal from 'src/entities/Modals/DateInputModal/DateInputModal';
import InputAutoCompleteModal from 'src/entities/Modals/InputAutoCompleteModal/InputAutoCompleteModal';

export {
  SuccessModal,
  ChoiceModal,
  InputModal,
  DateInputModal,
  InputAutoCompleteModal,
};

// TODO Здесь пример модалки об успехе

{
  /* <SuccessModal
open={openModal}
onClose={handleClose}
title="Успех"
content="Все данные были успешно сохранены!"
/> */
}

// TODO Здесь пример модалки выбора

{
  /* <ChoiceModal
open={openModal}
onClose={handleClose}
title="Отменить редактирование "
content="Внесённые изменения не будут сохранены.
Выйти без сохранения данных?"
onCancelLabel="Отменить"
onConfirmLabel="Сохранить"
onCancel={handleClose}
onConfirm={handleClose}
/> */
}

// TODO Здесь пример модалки с инпутом

{
  /* <InputModal
open={openModal}
onClose={handleClose}
title="Изменить промокод "
content="Введите новый промокод"
tableSpan="Текущий промокод сохранится в истории промокодов"
placeholderTextArea="Введите промокод"
heightTextArea={43}
onCancelLabel="Отменить"
onConfirmLabel="Сохранить"
onCancel={handleClose}
onConfirm={handleClose}
/> */
}
