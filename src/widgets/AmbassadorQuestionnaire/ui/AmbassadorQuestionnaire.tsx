import { FC } from 'react';
import { IAmbassadorQuestionnaire } from '../types/types';

import style from './AmbassadorQuestionnaire.module.scss';

import { QuestionnaireProfileInfo } from 'src/entities/QuestionnaireProfileInfo';
import { QuestionnaireForm } from 'src/entities/QuestionnaireForm';

const AmbassadorQuestionnaire: FC<IAmbassadorQuestionnaire> = ({ id }) => {
  return (
    <div className={style.questionnaire}>
      <h2 className={style.title}>Анкета Амбассадора</h2>
      <QuestionnaireProfileInfo />
      <QuestionnaireForm />
    </div>
  )
}

export default AmbassadorQuestionnaire
