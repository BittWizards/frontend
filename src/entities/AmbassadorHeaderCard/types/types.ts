type TAmbassadorHeaderCardProps = {
  data: {
    id: number;
    image: string;
    last_name: string;
    first_name: string;
    middle_name: string;
    status: 'Active' | 'Pause' | 'Clarify' | 'Not active' | '';
    tg_acc?: string;
    email: string;
    phone: string;
    ya_programm: string;
    city: string;
  };
};

export type { TAmbassadorHeaderCardProps };
