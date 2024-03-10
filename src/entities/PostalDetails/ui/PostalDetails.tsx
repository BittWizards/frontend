import type { FC } from 'react';

import { Input } from 'src/shared/Input';
import { FieldsetContainer } from 'src/shared/FieldsetContainer';
import type { IPostalDetails } from '../types/types';
import { useFormContext } from 'react-hook-form';

const PostalDetails: FC<IPostalDetails> = ({ prefix }) => {
  const { register } = useFormContext();

  return (
    <FieldsetContainer title="Почтовые реквизиты">
      <Input
        type="text"
        placeholder="Страна"
        {...register(prefix ? `${prefix}.address.country` : 'address.country')}
      />
      <Input
        type="text"
        placeholder="Город"
        {...register(prefix ? `${prefix}.address.city` : 'address.city')}
      />
      <Input
        type="text"
        placeholder="Адрес"
        {...register(
          prefix ? `${prefix}.address.street_home` : 'address.street_home'
        )}
      />
      <Input
        type="text"
        placeholder="Индекс"
        {...register(
          prefix ? `${prefix}.address.post_index` : 'address.post_index'
        )}
      />
    </FieldsetContainer>
  );
};

export default PostalDetails;
