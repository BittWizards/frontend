import SuccessModal from 'src/entities/Modals/SuccessModal/SuccessModal';
import ChoiceModal from 'src/entities/Modals/ChoiceModal/ChoiceModal';
import InputModal from 'src/entities/Modals/InputModal/InputModal';

export { SuccessModal, ChoiceModal, InputModal };

//TODO Здесь пример модалки об успехе

{
  /* <SuccessModal
open={openModal}
onClose={handleClose}
title="Успех"
content="Все данные были успешно сохранены!"
/> */
}

//TODO Здесь пример модалки выбора

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
