import { ReactElement } from 'react';
import { TAmbassadorsInfoCardProps } from 'src/entities/AmbassadorsInfoCard/types/types';

type TAmbassadorList = {
  ambassadorData: TAmbassadorsInfoCardProps[];
  children: ReactElement[];
};

export type { TAmbassadorList };
