import type { ReactElement } from 'react';
import type { TAmbassadorsInfoCardProps } from 'src/entities/AmbassadorsInfoCard/types/types';

type TAmbassadorList = {
  ambassadorData: TAmbassadorsInfoCardProps[];
  children: ReactElement[];
};

export type { TAmbassadorList };
