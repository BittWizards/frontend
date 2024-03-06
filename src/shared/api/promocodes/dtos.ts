export interface IPromocode {
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
