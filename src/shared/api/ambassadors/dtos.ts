export interface IAmbassador {
  id: number;
  image: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  ya_programm: {
    title: string;
    description: string;
  };
  tg_acc: string;
  status: 'Active' | 'Pause' | 'Clarify' | 'Not active';
  created: string;
}
