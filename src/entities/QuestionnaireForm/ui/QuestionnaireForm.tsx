import { FC, useState } from 'react';
import { IQuestionnaireForm } from '../types/types';

import style from './QuestionnaireForm.module.scss';

import { PostalDetails } from 'src/entities/PostalDetails';
import { Textarea } from 'src/shared/Textarea';
import { DataMerch } from 'src/entities/DataMerch';
import { WorkAndEducation } from 'src/entities/WorkAndEducation';
import { Contacts } from 'src/entities/Contacts';
import { Activity } from 'src/entities/Activity';

const QuestionnaireForm: FC<IQuestionnaireForm> = () => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div>
      <div className={style.container}>
        <div className={`${style.column} ${style.left}`}>
          <PostalDetails isEdit={isEdit} />
          <DataMerch isEdit={isEdit} />
          <WorkAndEducation isEdit={isEdit} />
        </div>
        <div className={`${style.column} ${style.right}`}>
          <Contacts isEdit={isEdit} />
          <Activity isEdit={isEdit} />
        </div>
      </div>
      <label className={`${style.label}`}>
        Дополнительная информация
        <fieldset className={`${style.fieldset}`}>
          <Textarea
            width={976}
            height={155}
            placeholder="Дополнительная информация об Амбассадоре"
            isEdit={isEdit}
            name="info"
          />
        </fieldset>
      </label>
    </div>
  );
};

export default QuestionnaireForm;
