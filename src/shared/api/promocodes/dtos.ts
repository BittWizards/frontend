interface IPromocode {
  id: number;
  promocode: string;
  is_active: boolean;
  created_at: string;
  ambassador: {
    id: number;
    image: string;
    first_name: string;
    last_name: string;
    status: 'Active' | 'Pause' | 'Clarify' | 'Not active';
    tg_acc: string;
    ya_programm: string;
  };
}

type TAmbassadorPromocode = {
  id: number;
  promocode: string;
  is_active: boolean;
  created_at: string;
};

type TAmbassadorPromocodesData = {
  id: number;
  image: string;
  last_name: string;
  first_name: string;
  middle_name: string;
  status: 'Active' | 'Pause' | 'Clarify' | 'Not active';
  tg_acc: string;
  email: string;
  phone: string;
  ya_programm: string;
  city: string;
  my_promocode: TAmbassadorPromocode[];
};

export type { IPromocode, TAmbassadorPromocodesData };
