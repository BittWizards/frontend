import type { IPromocode } from 'src/shared/api/promocodes/dtos';

const sortByDate = (users: IPromocode[]) =>
  [...users].sort(
    (a, b) =>
      new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
  );

const sortBySurname = (users: IPromocode[]) =>
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

const sortBySpecialty = (users: IPromocode[]) =>
  [...users].sort((a, b) =>
    a.ambassador.ya_programm.localeCompare(b.ambassador.ya_programm, 'ru', {
      sensitivity: 'base',
    })
  );

const sortByStatus = (users: IPromocode[]) => {
  const statusOrder = ['Active', 'Pause', 'Clarify', 'Not active'];

  return [...users].sort((a, b) => {
    const indexA = statusOrder.indexOf(a.ambassador.status || '');
    const indexB = statusOrder.indexOf(b.ambassador.status || '');

    return indexA - indexB;
  });
};

export { sortByDate, sortBySpecialty, sortByStatus, sortBySurname };
