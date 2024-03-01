import { FC } from 'react';
import { IActivity } from '../types/types';

import { FieldsetContainer } from 'src/shared/FieldsetContainer';
import { Checkbox } from 'src/shared/Checkbox';

const Activity: FC<IActivity> = ({ isEdit }) => {
  return (
    <FieldsetContainer title="Деятельность">
      <Checkbox label="Ведение блога" isEdit={isEdit} name="blog" />
      <Checkbox label="Развитие сообщества" isEdit={isEdit} name="community" />
      <Checkbox label="Написание статей" isEdit={isEdit} name="article" />
      <Checkbox label="Съёмка видео" isEdit={isEdit} name="video" />
      <Checkbox
        label="Консультации по Яндекс Практикуму"
        isEdit={isEdit}
        name="advice"
      />
      <Checkbox
        label="Выступление на мероприятиях"
        isEdit={isEdit}
        name="speaking"
      />
    </FieldsetContainer>
  );
};

export default Activity;
