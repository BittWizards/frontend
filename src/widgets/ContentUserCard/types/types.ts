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
    trackingNumber: string;
    content: {
      id: string;
      date: string;
      link: string;
      platform: string;
      fileCounter: string;
    }[]
  };
};

export type { TCardProps };
