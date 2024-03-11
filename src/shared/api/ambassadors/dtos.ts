export interface IAmbassador {
  date: string | number | Date;
  id: number;
  image: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  ya_programm: string;
  tg_acc: string;
  status: 'Active' | 'Pause' | 'Clarify' | 'Not active';
  created: string;
  achievement: string;
}

export interface IAmbassadorById {
  id: number;
  image: string;
  achievement: string;
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
  address: {
    country: string;
    city: string;
    street_home: string;
    post_index: number;
  };
  size: {
    clothes_size: string;
    foot_size: number;
  };
  actions: [
    {
      title: string;
    },
    {
      title: string;
    },
  ];
}

export interface IAmbassadorChange {
  first_name?: string;
  last_name?: string;
  middle_name?: string;
  ya_programm?: string;
  tg_acc?: string;
  status?: 'Active' | 'Pause' | 'Clarify' | 'Not active';
  created?: string;
  gender?: string;
  phone?: number;
  email?: string;
  purpose?: string;
  education?: string;
  work?: string | boolean;
  country?: string;
  city?: string;
  street_home?: string;
  post_index?: number;
  clothes_size?: string;
  foot_size?: number;
}
