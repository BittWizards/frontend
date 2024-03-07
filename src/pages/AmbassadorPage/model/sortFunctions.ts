import type { IAmbassador } from 'src/shared/api/ambassadors/dtos';

const sortByDate = (users: IAmbassador[]) =>
  [...users].sort(
    (a, b) => new Date(a.created).getTime() - new Date(b.created).getTime()
  );

const sortBySurname = (users: IAmbassador[]) =>
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

const sortBySpecialty = (users: IAmbassador[]) =>
  [...users].sort((a, b) =>
    a.ya_programm.localeCompare(b.ya_programm, 'ru', {
      sensitivity: 'base',
    })
  );

const sortByStatus = (users: IAmbassador[]) => {
  const statusOrder = ['Active', 'Pause', 'Clarify', 'Not active'];

  return [...users].sort((a, b) => {
    const indexA = statusOrder.indexOf(a.status || '');
    const indexB = statusOrder.indexOf(b.status || '');

    return indexA - indexB;
  });
};

export { sortByDate, sortBySpecialty, sortByStatus, sortBySurname };
