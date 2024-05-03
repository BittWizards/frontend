import type { IAmbassadorById } from 'src/shared/api/ambassadors/dtos';

const initialAmbassador: IAmbassadorById = {
  id: 0,
  image: '',
  first_name: '',
  last_name: '',
  middle_name: '',
  ya_programm: '',
  tg_acc: '',
  status: 'Active',
  created: '',
  gender: 'Male',
  phone: '',
  email: '',
  purpose: '',
  education: '',
  work: '',
  achievement: 'new',
  address: {
    country: '',
    city: '',
    street_home: '',
    post_index: 0,
  },
  size: {
    clothes_size: '',
    foot_size: 0,
  },
  actions: [
    {
      title: '',
    },
    {
      title: '',
    },
  ],
};

export { initialAmbassador };
