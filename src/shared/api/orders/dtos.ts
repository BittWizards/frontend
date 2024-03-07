type TOrder = {
  id: number;
  ambassador: {
    id: number;
    image: string;
    first_name: string;
    last_name: string;
    status: 'Active' | 'Pause' | 'Clarify' | 'Not active';
    tg_acc: string;
    ya_programm: string;
  };
  track_number: string | null;
  created_date: string;
  status: 'created' | 'delivered';
};

export type { TOrder };
