import { RadioButton } from "@/components/atoms/RadioButton";

interface ProductFiltersProps {
  searchParams: URLSearchParams;
  setSearchParams: (params: URLSearchParams) => void;
}

type FilterOption = {
  id: string;
  value: string | null;
  label: string;
};

const FILTER_OPTIONS: FilterOption[] = [
  {
    id: "filter-0",
    value: null,
    label: "Todos",
  },
  {
    id: "filter-1",
    value: "masc",
    label: "Masculino",
  },
  {
    id: "filter-2",
    value: "fem",
    label: "Feminino",
  },
];

export function ProductFilters({
  searchParams,
  setSearchParams,
}: ProductFiltersProps) {
  const currentFilter = searchParams.get("filterby");

  const handleFilterChange = (value: string | null) => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (value) {
      newSearchParams.set("filterby", value);
    } else {
      newSearchParams.delete("filterby");
    }

    setSearchParams(newSearchParams);
  };

  return (
    <section className="flex justify-center items-center">
      {FILTER_OPTIONS.map((option, index) => (
        <RadioButton
          key={option.id}
          id={option.id}
          name="filter-selection"
          label={option.label}
          value={option.value}
          rounded={
            index === 0
              ? "left"
              : index === FILTER_OPTIONS.length - 1
              ? "right"
              : "none"
          }
          checked={currentFilter === option.value}
          onClick={() => handleFilterChange(option.value)}
        />
      ))}
    </section>
  );
}
