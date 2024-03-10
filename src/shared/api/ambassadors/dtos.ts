export interface IAmbassador {
  id: number;
  image: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  ya_programm: string;
  tg_acc: string;
  status: 'Active' | 'Pause' | 'Clarify' | 'Not active';
  created: string;
}

export interface IAmbassadorById {
  id: number;
  image: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  ya_programm: string;
  tg_acc: string;
  status: 'Active' | 'Pause' | 'Clarify' | 'Not active';
  created: string;
  gender: string;
  phone: string;
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
