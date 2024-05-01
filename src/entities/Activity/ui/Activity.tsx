
import { FieldsetContainer } from 'src/shared/FieldsetContainer';
import { Checkbox } from 'src/shared/Checkbox';

import type { FC } from 'react';
import type { IActivity } from '../types/types';

const Activity: FC<IActivity> = () => (
  <FieldsetContainer title="Деятельность">
    <Checkbox label="Ведение блога" name="blog" />
    <Checkbox label="Развитие сообщества" name="community" />
    <Checkbox label="Написание статей" name="article" />
    <Checkbox label="Съёмка видео" name="video" />
    <Checkbox label="Консультации по Яндекс Практикуму" name="advice" />
    <Checkbox label="Выступление на мероприятиях" name="speaking" />
  </FieldsetContainer>
);

export default Activity;
