import { RadioButton } from "@/components/atoms/RadioButton";
import { useState } from "react";

type FilterOption = {
  id: string;
  value: string;
  label: string;
};

const filterOptions: FilterOption[] = [
  { id: "filter-0", value: "all", label: "Todos" },
  { id: "filter-1", value: "male", label: "Masculino" },
  { id: "filter-2", value: "female", label: "Feminino" },
];

export function ProductFilters() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  return (
    <section className="flex justify-center items-center">
      {filterOptions.map((option, index) => (
        <RadioButton
          key={option.id}
          id={option.id}
          name="filter-selection"
          value={option.value}
          label={option.label}
          rounded={
            index === 0
              ? "left"
              : index === filterOptions.length - 1
              ? "right"
              : "none"
          }
          checked={selectedFilter === option.value}
          onChange={(e) => setSelectedFilter(e.target.value)}
        />
      ))}
    </section>
  );
}
