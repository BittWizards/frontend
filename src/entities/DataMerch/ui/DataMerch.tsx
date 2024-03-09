import type { FC } from 'react';

import { Input } from 'src/shared/Input';
import { FieldsetContainer } from 'src/shared/FieldsetContainer';
import type { IDataMerch } from '../types/types';

const DataMerch: FC<IDataMerch> = () => (
  <FieldsetContainer title="Данные для мерча">
    <Input type="text" placeholder="Размер одежды" name="clothingSize" />
    <Input type="text" placeholder="Размер обуви" name="shoeSize" />
  </FieldsetContainer>
);

export default DataMerch;
