type TUser = {
  exp: number; // Срок действия токена
  iat: number; // Дата выдачи
  jti: string; // Идентификатор токена
  iss: string; // Хост выдавший токен
  name: string;
  display_name: string;
  real_name: string;
  login: string;
  gender: string;
  uid: number;
  psuid: string;
  avatar_id: string;
  phone: {
    id: number;
    number: string;
  };
  email: string;
};

export type { TUser };
