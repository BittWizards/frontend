import type { TAmbassadorsOrders } from 'src/shared/api/orders/dtos';

export const initialAmbassadorOrders: TAmbassadorsOrders = {
  id: 0,
  image: '',
  first_name: '',
  last_name: '',
  middle_name: '',
  status: '',
  city: '',
  ya_programm: '',
  email: '',
  phone: '',
  orders: [],
  total_orders_cost: 0,
};
