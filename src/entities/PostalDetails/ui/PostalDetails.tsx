import { FC } from 'react';
import { IPostalDetails } from '../types/types';

import { Input } from 'src/shared/Input';
import { FieldsetContainer } from 'src/shared/FieldsetContainer';

const PostalDetails: FC<IPostalDetails> = ({ isEdit }) => {
  return (
    <FieldsetContainer title="Почтовые реквизиты">
      <Input type="text" placeholder="Страна" name="country" isEdit={isEdit} />
      <Input type="text" placeholder="Город" name="city" isEdit={isEdit} />
      <Input type="text" placeholder="Адрес" name="adress" isEdit={isEdit} />
      <Input type="text" placeholder="Индекс" name="index" isEdit={isEdit} />
    </FieldsetContainer>
  );
};

export default PostalDetails;
