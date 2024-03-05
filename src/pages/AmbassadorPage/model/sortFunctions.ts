import type { TMockData } from 'src/utils/types/typeMockData';

const sortAmbassadorsByDate = (users: TMockData[]) =>
  [...users].sort((a, b) => {
    const result = new Date(a.date).getTime() - new Date(b.date).getTime();
    return result;
  });

const sortAmbassadorsBySurname = (users: TMockData[]) =>
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

const sortAmbassadorsBySpecialty = (users: TMockData[]) =>
  [...users].sort((a, b) => {
    const specialtyComparison = a.position.localeCompare(b.position, 'ru', {
      sensitivity: 'base',
    });
    return specialtyComparison;
  });

const sortAmbassadorsByStatus = (users: TMockData[]) => {
  const statusOrder = ['Active', 'OnPause', 'PendingConfirmation', 'Inactive'];

  return [...users].sort((a, b) => {
    const indexA = statusOrder.indexOf(a.userStatus || '');
    const indexB = statusOrder.indexOf(b.userStatus || '');

    const statusComparison = indexA - indexB;
    return statusComparison;
  });
};

export {
  sortAmbassadorsByDate,
  sortAmbassadorsByStatus,
  sortAmbassadorsBySurname,
  sortAmbassadorsBySpecialty,
};
