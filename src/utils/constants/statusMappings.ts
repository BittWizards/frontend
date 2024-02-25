type StatusMappings = {
  [key: string]: string;
};

const statusMappings: StatusMappings = {
  Active: 'Активен',
  OnPause: 'На паузе',
  PendingConfirmation: 'Уточняется',
  Inactive: 'Неактивен',
};

export { statusMappings };
