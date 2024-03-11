import type { TOrder } from 'src/shared/api/orders/dtos';
import type { TAmbassadorMerchHistory } from 'src/shared/api/merch/dtos';

const sortOrderByDate = (users: TOrder[]) =>
  [...users].sort(
    (a, b) =>
      new Date(a.created_date).getTime() - new Date(b.created_date).getTime()
  );

const sortOrderBySurname = (users: TOrder[]) =>
  [...users].sort((a, b) => {
    const surnameComparison = a.ambassador.last_name.localeCompare(
      b.ambassador.last_name,
      'ru',
      {
        sensitivity: 'base',
      }
    );

    if (surnameComparison === 0) {
      const nameComparison = a.ambassador.first_name.localeCompare(
        b.ambassador.first_name,
        'ru',
        {
          sensitivity: 'base',
        }
      );

      return nameComparison;
    }

    return surnameComparison;
  });

const sortOrderBySpecialty = (users: TOrder[]) =>
  [...users].sort((a, b) =>
    a.ambassador.ya_programm.localeCompare(b.ambassador.ya_programm, 'ru', {
      sensitivity: 'base',
    })
  );

const sortOrderByStatus = (users: TOrder[]) => {
  const statusOrder = ['Active', 'Pause', 'Clarify', 'Not active'];

  return [...users].sort((a, b) => {
    const indexA = statusOrder.indexOf(a.ambassador.status || '');
    const indexB = statusOrder.indexOf(b.ambassador.status || '');

    return indexA - indexB;
  });
};

const sortMerchByDate = (users: TAmbassadorMerchHistory[]) =>
  [...users].sort(
    (a, b) =>
      new Date(a.last_delivery_date).getTime() -
      new Date(b.last_delivery_date).getTime()
  );

const sortMerchBySurname = (users: TAmbassadorMerchHistory[]) =>
  [...users].sort((a, b) => {
    const surnameComparison = a.last_name.localeCompare(b.last_name, 'ru', {
      sensitivity: 'base',
    });

    if (surnameComparison === 0) {
      const nameComparison = a.first_name.localeCompare(b.first_name, 'ru', {
        sensitivity: 'base',
      });

      return nameComparison;
    }

    return surnameComparison;
  });

export {
  sortOrderByDate,
  sortOrderBySpecialty,
  sortOrderByStatus,
  sortOrderBySurname,
  sortMerchByDate,
  sortMerchBySurname,
};
