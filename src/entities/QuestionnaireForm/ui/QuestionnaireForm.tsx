import type { FC } from 'react';

import { PostalDetails } from 'src/entities/PostalDetails';
import { Textarea } from 'src/shared/Textarea';
import { DataMerch } from 'src/entities/DataMerch';
import { WorkAndEducation } from 'src/entities/WorkAndEducation';
import { Contacts } from 'src/entities/Contacts';
import { Activity } from 'src/entities/Activity';
import type { IQuestionnaireForm } from '../types/types';

import style from './QuestionnaireForm.module.scss';

const QuestionnaireForm: FC<IQuestionnaireForm> = () => {
  return (
    <div>
      <div className={style.container}>
        <div className={style.row}>
          <PostalDetails />
          <Contacts />
        </div>
        <div className={style.row}>
          <DataMerch />
        </div>
        <div className={style.row}>
          <WorkAndEducation />
          <Activity />
        </div>
      </div>
      <label className={`${style.label}`}>
        Дополнительная информация
        <fieldset className={`${style.fieldset}`}>
          <Textarea
            width={976}
            height={155}
            placeholder="Дополнительная информация об Амбассадоре"
            name="info"
          />
        </fieldset>
      </label>
    </div>
  );
};

export default QuestionnaireForm;
