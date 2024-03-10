import { IAmbassadorById } from 'src/shared/api/ambassadors/dtos';

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
  gender: '',
  phone: 0,
  email: '',
  purpose: '',
  education: '',
  work: '',
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
