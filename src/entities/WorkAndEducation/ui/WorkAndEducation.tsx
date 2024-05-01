
import { FieldsetContainer } from 'src/shared/FieldsetContainer';
import { Input } from 'src/shared/Input';

import type { FC } from 'react';
import type { IWorkAndEducation } from '../types/types';

const WorkAndEducation: FC<IWorkAndEducation> = () => (
  <FieldsetContainer title="Учёба и работа">
    <Input
      type="text"
      placeholder="Программа обучения в Практикуме"
      name="ya_programm"
    />
    <Input
      type="text"
      placeholder="Цель обучения в Практикуме"
      name="purpose"
    />
    <Input type="text" placeholder="Образование" name="education" />
    <Input type="text" placeholder="Место работы" name="work" />
  </FieldsetContainer>
);

export default WorkAndEducation;
