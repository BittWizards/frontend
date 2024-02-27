export const formatDateString = (inputDate: string): string => {
  return new Date(inputDate).toLocaleDateString('en-GB').replace(/\//g, '.');
};
