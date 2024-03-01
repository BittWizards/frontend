import { FC } from 'react';
import { IWorkAndEducation } from '../types/types';

import { FieldsetContainer } from 'src/shared/FieldsetContainer';
import { Input } from 'src/shared/Input';

const WorkAndEducation: FC<IWorkAndEducation> = ({ isEdit }) => {
  return (
    <FieldsetContainer title="Учёба и работа">
      <Input
        type="text"
        placeholder="Программа обучения в Практикуме"
        name="position"
        isEdit={isEdit}
      />
      <Input
        type="text"
        placeholder="Цель обучения в Практикуме"
        name="purpose"
        isEdit={isEdit}
      />
      <Input
        type="text"
        placeholder="Образование"
        name="education"
        isEdit={isEdit}
      />
      <Input
        type="text"
        placeholder="Место работы"
        name="workPlace"
        isEdit={isEdit}
      />
    </FieldsetContainer>
  );
};

export default WorkAndEducation;
