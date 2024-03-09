import { IAmbassador } from 'src/shared/api/ambassadors/dtos';

interface IQuestionnaireProfileInfo {
  user?: IAmbassador;
  showGender?: boolean;
  showImage?: boolean;
}

export type { IQuestionnaireProfileInfo };
