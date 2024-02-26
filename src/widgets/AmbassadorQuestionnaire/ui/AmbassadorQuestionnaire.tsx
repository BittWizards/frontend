import { FC } from 'react';
import { IAmbassadorQuestionnaire } from '../types/types';

import style from './AmbassadorQuestionnaire.module.scss';

import { QuestionnaireProfileInfo } from 'src/entities/QuestionnaireProfileInfo';

const AmbassadorQuestionnaire: FC<IAmbassadorQuestionnaire> = ({ id }) => {
  return (
    <div>
      <QuestionnaireProfileInfo />
    </div>
  )
}

export default AmbassadorQuestionnaire
