import type {
  TAmbassadorContentData,
  TContentDetail,
} from 'src/shared/api/content/dtos';

const initialAmbassadorContentData: TAmbassadorContentData = {
  id: 0,
  image: '',
  last_name: '',
  first_name: '',
  middle_name: '',
  status: '',
  tg_acc: '',
  email: '',
  phone: '',
  ya_programm: '',
  city: '',
  my_content: [],
};

const initialAmbassadorContentDetail: TContentDetail = {
  id: 0,
  created_at: '',
  link: '',
  start_guide: false,
  type: '',
  platform: '',
  comment: '',
  accepted: false,
  ambassador: {
    id: 0,
    image: '',
    last_name: '',
    first_name: '',
    middle_name: '',
    status: '',
    tg_acc: '',
    email: '',
    phone: '',
    ya_programm: '',
    city: '',
  },
  documents: [],
};

export { initialAmbassadorContentDetail, initialAmbassadorContentData };
