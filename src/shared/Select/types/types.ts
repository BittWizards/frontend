type TSelectProps = {
  onChange: Function;
  options: readonly any[];
  optionLabel: (option: any) => string;
  label: string;
  width: string;
  height: string;
  defaultValue?: object;
  ambassadorRender?: boolean;
};

export type { TSelectProps };
