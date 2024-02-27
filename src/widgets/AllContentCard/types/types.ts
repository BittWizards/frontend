type TAllContentCardProps = {
  data: {
    id: string;
    avatar: string;
    telegram: string;
    name: string;
    surname: string;
    date: string;
    statusActive: boolean,
    reviews: number,
    content: {
      platform: string,
      fileCounter: string,
    },
  }
};

export type { TAllContentCardProps };