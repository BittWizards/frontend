import { AutocompleteProps } from '@mui/material';

export interface ISelectProps
  extends AutocompleteProps<
    any,
    boolean | undefined,
    boolean | undefined,
    boolean | undefined
  > {
  width?: string | number;
  height?: string | number;
  margin?: string;
  ambassadorRender?: boolean;
}
