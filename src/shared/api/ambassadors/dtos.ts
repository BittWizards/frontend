export type IAmbassador = {
  id: number;
  first_name: string;
  last_name: string;
  middle_name: string;
  ya_programm: {
    title: string;
    description: string;
  };
  created: string;
};

export type ResultWithErrors<T> = {
  data?: T;
  error?: string
};
