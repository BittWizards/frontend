import { FC } from 'react';
import { IDataMerch } from '../types/types';

import { Input } from 'src/shared/Input';
import { FieldsetContainer } from 'src/shared/FieldsetContainer';

const DataMerch: FC<IDataMerch> = ({ isEdit }) => {
  return (
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
};

export default DataMerch;
