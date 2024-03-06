type TCardProps = {
  data: {
    id: string;
    avatar: string;
    telegram: string;
    name: string;
    surname: string;
    secondname: string;
    position: string;
    date: string;
    userStatus: 'Active' | 'Pause' | 'Clarify' | 'Not active';
    promocode: string;
    activationDate: string;
    trackingNumber: string;
  };
};

export type { TCardProps };
