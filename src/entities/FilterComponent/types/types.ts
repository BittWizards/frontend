type FilterProps = {
    onSearch: React.MouseEventHandler<HTMLButtonElement>,
    searchTerm: string,
    handleChange: React.ChangeEventHandler<HTMLInputElement>,
    sortingOptions: string[];
};

export type { FilterProps };

