import type { TMockData } from 'src/utils/types/typeMockData';

export const sortPromocodesByDate = (promocodes: TMockData[]) =>
  [...promocodes].sort(
    (a, b) =>
      new Date(a.activationDate).getTime() -
      new Date(b.activationDate).getTime()
  );

export const sortPromocodesBySurname = (promocodes: TMockData[]) =>
  [...promocodes].sort((a, b) => {
    const surnameComparison = a.surname.localeCompare(b.surname, 'ru', {
      sensitivity: 'base',
    });
    if (surnameComparison === 0) {
      return a.name.localeCompare(b.name, 'ru', { sensitivity: 'base' });
    }
    return surnameComparison;
  });

export const sortPromocodesBySpecialty = (promocodes: TMockData[]) =>
  [...promocodes].sort((a, b) =>
    a.position.localeCompare(b.position, 'ru', { sensitivity: 'base' })
  );

export const sortPromocodesByStatus = (promocodes: TMockData[]) => {
  const statusOrder = ['Active', 'OnPause', 'PendingConfirmation', 'Inactive'];

  return [...promocodes].sort((a, b) => {
    const indexA = statusOrder.indexOf(a.userStatus || '');
    const indexB = statusOrder.indexOf(b.userStatus || '');

    return indexA - indexB;
  });
};
