import type { TMockData } from 'src/utils/types/typeMockData';

const sortByDate = (users: TMockData[]) =>
  [...users].sort(
    (a, b) =>
      new Date(a.activationDate).getTime() -
      new Date(b.activationDate).getTime()
  );

const sortBySurname = (users: TMockData[]) =>
  [...users].sort((a, b) => {
    const surnameComparison = a.surname.localeCompare(b.surname, 'ru', {
      sensitivity: 'base',
    });

    if (surnameComparison === 0) {
      const nameComparison = a.name.localeCompare(b.name, 'ru', {
        sensitivity: 'base',
      });

      return nameComparison;
    }

    return surnameComparison;
  });

const sortBySpecialty = (users: TMockData[]) =>
  [...users].sort((a, b) =>
    a.position.localeCompare(b.position, 'ru', { sensitivity: 'base' })
  );

const sortByStatus = (users: TMockData[]) => {
  const statusOrder = ['Active', 'OnPause', 'PendingConfirmation', 'Inactive'];

  return [...users].sort((a, b) => {
    const indexA = statusOrder.indexOf(a.userStatus || '');
    const indexB = statusOrder.indexOf(b.userStatus || '');

    return indexA - indexB;
  });
};

export { sortByDate, sortBySpecialty, sortByStatus, sortBySurname };
