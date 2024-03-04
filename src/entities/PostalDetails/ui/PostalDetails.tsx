import type { FC } from 'react';

import { Input } from 'src/shared/Input';
import { FieldsetContainer } from 'src/shared/FieldsetContainer';
import type { IPostalDetails } from '../types/types';

const PostalDetails: FC<IPostalDetails> = ({ isEdit }) => (
  <FieldsetContainer title="Почтовые реквизиты">
    <Input type="text" placeholder="Страна" name="country" isEdit={isEdit} />
    <Input type="text" placeholder="Город" name="city" isEdit={isEdit} />
    <Input type="text" placeholder="Адрес" name="adress" isEdit={isEdit} />
    <Input type="text" placeholder="Индекс" name="index" isEdit={isEdit} />
  </FieldsetContainer>
);

export default PostalDetails;
