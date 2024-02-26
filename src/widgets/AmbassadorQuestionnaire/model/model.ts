import { ambassadorCardData } from 'src/utils/constants/newAmbassarodCardData';

export const userInfo = (id?: string) => {
  ambassadorCardData.map((user: object) => {
    if (user.id === Number(id)) {
      return user;
    }
  });
};

// export { userInfo };
