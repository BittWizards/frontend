import { Noop, RefCallBack } from 'react-hook-form';

interface IInput {
  value?: string | number;
  placeholder?: string;
  type: string;
  disabled?: boolean;
}

export type { IInput };
