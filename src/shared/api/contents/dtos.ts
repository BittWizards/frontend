type TBriefAmbassadorData = {
  last_name: string;
  first_name: string;
  tg_acc: string;
  status: string;
};

type TNewContentCardData = {
  id: number;
  ambassador: TBriefAmbassadorData;
  created_at: string;
};

export type { TBriefAmbassadorData, TNewContentCardData };
