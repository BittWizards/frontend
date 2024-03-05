interface IBriefAmbassadorData {
  id: number;
  image: string;
  first_name: string;
  last_name: string;
  status: string;
  tg_acc: string;
  ya_programm: string;
}

interface INewContentCardData {
  id: number;
  ambassador: IBriefAmbassadorData;
  created_at: string;
}

export type { IBriefAmbassadorData, INewContentCardData };
