type TOrder = {
  id: number;
  ambassador: {
    id: number;
    image: string;
    first_name: string;
    last_name: string;
    status: 'Active' | 'Pause' | 'Clarify' | 'Not active' | '';
    tg_acc: string;
    ya_programm: string;
    achievement: string;
  };
  track_number: string | null;
  created_date: string;
  status: 'created' | 'delivered';
};

type TAmbassadorsOrders = {
  id: number;
  image: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  status: 'Active' | 'Pause' | 'Clarify' | 'Not active' | '';
  city: string;
  ya_programm: string;
  tg_acc: string;
  email: string;
  phone: string;
  merch: {
    id: number;
    name: string;
    size: string | null;
    amount: number;
    total_cost: number;
    created_date: string;
  }[];
  total_orders_cost: number;
};

export type { TOrder, TAmbassadorsOrders };
