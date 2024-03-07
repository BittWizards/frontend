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
  email: string;
  phone: string;
  orders: {
    id: number;
    created_date: string;
    merch: {
      name: string;
      size?: string | null;
    }[];
    total_cost: number;
  }[];
  total_orders_cost: number;
};

export type { TOrder, TAmbassadorsOrders };
