export interface FilterOption {
  options: unknown[];
  selected: unknown[];
}

export interface ITodoFiltersState {
  filters: Record<string, FilterOption>;
}
