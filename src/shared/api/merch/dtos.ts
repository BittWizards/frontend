type TUserBase = {
  id: number;
  first_name: string;
  last_name: string;
  image: string;
  tg_acc: string;
};

type TAmbassadorMerchs = {
  name: string;
  count: number;
};

type TAmbassadorMerchHistory = TUserBase & {
  merch: TAmbassadorMerchs[];
  last_delivery_date: string;
  total: number;
};

type TMerchItem = {
  name: string;
  size: string | number | null;
};

export type { TAmbassadorMerchHistory, TMerchItem };
