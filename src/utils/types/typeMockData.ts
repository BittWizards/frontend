type TMockData = {
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
  userStatus: string;
  phone: string;
  email: string;
  city: string;
  country: string;
  adress: string;
  index: number;
  clothingSize: string;
  shoeSize: number;
  purpose: string;
  education: string;
  workPlace: string;
  wa: string;
  habr: string;
  other: string;
  merch: {
    id: string;
    merchType: string;
    merchSize: string;
    date: string;
    quantity: string;
    price: string;
  }[];
  reviews: number;
  promocodes: {
    id: string;
    promocode: string;
    date: string;
  }[];
  content: {
    id: string;
    date: string;
    link: string;
    platform: string;
    fileCounter: string;
  }[];
};

export type { TMockData };
