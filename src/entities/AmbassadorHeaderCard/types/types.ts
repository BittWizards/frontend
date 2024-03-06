type TAmbassadorHeaderCardProps = {
  data: {
    id: string;
    avatar: string;
    telegram: string;
    name: string;
    surname: string;
    secondname: string;
    position: string;
    date: string;
    statusActive: boolean;
    promocode: string;
    activationDate: string;
    trackingNumber: string;
    userStatus: 'Active' | 'Pause' | 'Clarify' | 'Not active';
    phone: string;
    email: string;
    city: string;
  };
};

export type { TAmbassadorHeaderCardProps };
