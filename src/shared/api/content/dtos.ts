interface IBriefAmbassadorData {
  id: number;
  image: string;
  first_name: string;
  last_name: string;
  status: string;
  tg_acc: string;
  ya_programm: string;
  achievement: string;
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
  status: 'Active' | 'Pause' | 'Clarify' | 'Not active' | '';
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
  achievement: string;
}

type TAmbassadorContentData = {
  id: number;
  image: string;
  last_name: string;
  first_name: string;
  middle_name: string;
  status: 'Active' | 'Pause' | 'Clarify' | 'Not active' | '';
  tg_acc: string;
  email: string;
  phone: string;
  ya_programm: string;
  city: string;
  my_content: {
    id: number;
    created_at: string;
    platform: string;
    link: string;
    documents: number;
  }[];
};

type TContentDetail = {
  id: number;
  created_at: string;
  link: string;
  start_guide: boolean;
  type: string;
  platform: string;
  comment: string;
  accepted: boolean;
  ambassador: {
    id: number;
    image: string;
    last_name: string;
    first_name: string;
    middle_name: string;
    status: 'Active' | 'Pause' | 'Clarify' | 'Not active' | '';
    tg_acc: string;
    email: string;
    phone: string;
    ya_programm: string;
    city: string;
  };
  documents: {
    document: string;
  }[];
};

export type {
  IBriefAmbassadorData,
  INewContentCardData,
  IAllContent,
  TAmbassadorContentData,
  TContentDetail,
};
