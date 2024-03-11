interface SortProps {
  width: number;
  height: number;
  options: string[];
  onSortChange: (selectedOption: string | null) => void;
}

export type { SortProps };
