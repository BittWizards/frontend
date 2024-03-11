interface IAmbassadorQuestionnaire {
  first_name: string;
  last_name: string;
  middle_name: string;
  ya_programm: string;
  tg_acc: string;
  status: 'Active' | 'Pause' | 'Clarify' | 'Not active';
  created: string;
  gender: string;
  phone: number;
  email: string;
  purpose: string;
  education: string;
  work: string | boolean;
  country: string;
  city: string;
  street_home: string;
  post_index: number;
  clothes_size: string;
  foot_size: number;
}

export type { IAmbassadorQuestionnaire };
