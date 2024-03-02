type TSortingDataItem = {
  userStatus: string;
};

type TDataItem = {
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
  userStatus?: string;
};

export type TSortingData = TSortingDataItem & TDataItem;

export const sortByStatus = (sortingData: TSortingData[]): TSortingData[] => {
  const statusOrder = ['Active', 'OnPause', 'PendingConfirmation', 'Inactive'];

  sortingData.sort((a, b) => {
    const indexA = statusOrder.indexOf(a.userStatus || '');
    const indexB = statusOrder.indexOf(b.userStatus || '');

    return indexA - indexB;
  });

  return sortingData;
};
