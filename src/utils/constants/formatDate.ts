export const formatDateString = (inputDate: string): string => new Date(inputDate).toLocaleDateString('en-GB').replace(/\//g, '.');
