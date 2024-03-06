type StatusMappings = {
  [key: string]: string;
};

const statusMappings: StatusMappings = {
  Active: 'Активен',
  Pause: 'На паузе',
  Clarify: 'Уточняется',
  'Not active': 'Неактивен',
};

export { statusMappings };
