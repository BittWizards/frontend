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

interface IAllContent {
  id: number;
  image: string;
  last_name: string;
  first_name: string;
  tg_acc: string;
  rating: number | null;
  review_count: number | null;
  habr_count: number | null;
  vc_count: number | null;
  youtube_count: number | null;
  tg_count: number | null;
  instagram_count: number | null;
  linkedin_count: number | null;
  other_count: number | null;
  last_date: string;
}

export type { IBriefAmbassadorData, INewContentCardData, IAllContent };
