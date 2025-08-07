import { FilterOption } from './types';

export interface ITodoFilters {
  filters: Record<string, FilterOption>;
  onFilterChange: (key: string, value: unknown) => void;
}
