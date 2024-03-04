import type { ReactNode } from 'react';

interface IFormContainer {
  title: String;
  children: ReactNode;
  defaultValues?: object;
  onSubmit: (e: Object) => void;
  submitButtonLabel: string;
  cancelButtonLabel: string;
}

export type { IFormContainer };
