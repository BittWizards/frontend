
import { Input } from 'src/shared/Input';
import { FieldsetContainer } from 'src/shared/FieldsetContainer';

import type { FC } from 'react';
import type { IDataMerch } from '../types/types';

const DataMerch: FC<IDataMerch> = () => (
  <FieldsetContainer title="Данные для мерча">
    <Input type="text" placeholder="Размер одежды" name="clothes_size" />
    <Input type="text" placeholder="Размер обуви" name="foot_size" />
  </FieldsetContainer>
);

export default DataMerch;
