import { Noop, RefCallBack } from 'react-hook-form';

interface IInput {
  // value?: string | number;
  // placeholder?: string;
  // type: string;
  // disabled?: boolean;
  field: {
    onChange: (...event: any[]) => void;
    onBlur: Noop;
    value: any;
    disabled?: boolean | undefined;
    name: 'name';
    ref: RefCallBack;
  };
}

export type { IInput };
