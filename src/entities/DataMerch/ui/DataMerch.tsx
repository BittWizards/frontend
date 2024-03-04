import type { FC } from 'react';

import { Input } from 'src/shared/Input';
import { FieldsetContainer } from 'src/shared/FieldsetContainer';
import type { IDataMerch } from '../types/types';

const DataMerch: FC<IDataMerch> = ({ isEdit }) => (
  <FieldsetContainer title="Данные для мерча">
    <Input
      type="text"
      placeholder="Размер одежды"
      name="clothingSize"
      isEdit={isEdit}
    />
    <Input
      type="text"
      placeholder="Размер обуви"
      name="shoeSize"
      isEdit={isEdit}
    />
  </FieldsetContainer>
);

export default DataMerch;
