
import { Input } from 'src/shared/Input';
import { FieldsetContainer } from 'src/shared/FieldsetContainer';

import type { FC } from 'react';
import type { IPostalDetails } from '../types/types';

const PostalDetails: FC<IPostalDetails> = () => (
  <FieldsetContainer title="Почтовые реквизиты">
    <Input type="text" placeholder="Страна" name="country" />
    <Input type="text" placeholder="Город" name="city" />
    <Input type="text" placeholder="Адрес" name="street_home" />
    <Input type="text" placeholder="Индекс" name="post_index" />
  </FieldsetContainer>
);

export default PostalDetails;
