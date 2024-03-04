import type { FC } from 'react';

import { FieldsetContainer } from 'src/shared/FieldsetContainer';
import { Checkbox } from 'src/shared/Checkbox';
import type { IActivity } from '../types/types';

const Activity: FC<IActivity> = ({ isEdit }) => (
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

export default Activity;
