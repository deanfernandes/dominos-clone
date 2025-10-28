import classes from "./FilterBar.module.css";
import FilterButton from "./FilterButton";
import type { MenuItemType } from "../../types/MenuItem";
import { useState } from "react";

export type SortBy = "popularity" | "ascending" | "descending" | null;
type ActivePanel = "filters" | "sorting" | null;

interface FilterBarProps {
  selectedFilters: MenuItemType[];
  onToggleFilter: (filter: MenuItemType) => void;
  numberOfDeals: number;
  sortBy: SortBy;
  onSortChange: (sort: SortBy) => void;
}

export default function FilterBar({
  selectedFilters,
  onToggleFilter,
  numberOfDeals,
  sortBy,
  onSortChange,
}: FilterBarProps) {
  const [activePanel, setActivePanel] = useState<ActivePanel>(null);

  const togglePanel = (panel: ActivePanel) => {
    setActivePanel((prev) => (prev === panel ? null : panel));
  };

  const handleSortClick = (sort: SortBy) => {
    onSortChange(sort);
  };

  const filterOptions: MenuItemType[] = ["pizza", "side", "dessert", "drink"];

  return (
    <div className={classes.container}>
      <div className={classes.buttons_container}>
        <button
          onClick={() => togglePanel("filters")}
          className={activePanel === "filters" ? classes.active : ""}
          data-cy="filters-button"
        >
          Filters
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path d="M297.4 169.4C309.9 156.9 330.2 156.9 342.7 169.4L534.7 361.4C547.2 373.9 547.2 394.2 534.7 406.7C522.2 419.2 501.9 419.2 489.4 406.7L320 237.3L150.6 406.6C138.1 419.1 117.8 419.1 105.3 406.6C92.8 394.1 92.8 373.8 105.3 361.3L297.3 169.3z" />
          </svg>
        </button>

        <span>
          {numberOfDeals > 0
            ? selectedFilters.length > 0
              ? `Showing ${numberOfDeals} deals`
              : "Showing all deals"
            : "0 deals found"}
        </span>

        <button
          onClick={() => togglePanel("sorting")}
          className={activePanel === "sorting" ? classes.active : ""}
          data-cy="sorting-button"
        >
          {sortBy === "ascending"
            ? "A - Z"
            : sortBy === "descending"
            ? "Z - A"
            : sortBy === "popularity"
            ? "Popularity"
            : "Sorting"}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path d="M297.4 169.4C309.9 156.9 330.2 156.9 342.7 169.4L534.7 361.4C547.2 373.9 547.2 394.2 534.7 406.7C522.2 419.2 501.9 419.2 489.4 406.7L320 237.3L150.6 406.6C138.1 419.1 117.8 419.1 105.3 406.6C92.8 394.1 92.8 373.8 105.3 361.3L297.3 169.3z" />
          </svg>
        </button>
      </div>

      {activePanel === "filters" && (
        <div className={classes.filters_panel_container}>
          <span>Must have</span>
          <div className={classes.filters_panel_buttons_container}>
            {filterOptions.map((type) => (
              <FilterButton
                key={type}
                text={type}
                active={selectedFilters.includes(type)}
                onClick={() => onToggleFilter(type)}
              />
            ))}
          </div>
        </div>
      )}

      {activePanel === "sorting" && (
        <div className={classes.sorting_container}>
          <button
            onClick={() => handleSortClick("popularity")}
            className={sortBy === "popularity" ? classes.active : ""}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
            </svg>
            Popularity
          </button>
          <button
            onClick={() => handleSortClick("ascending")}
            className={sortBy === "ascending" ? classes.active : ""}
            data-cy="sort-asc-button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <path d="M294.6 454.6L214.6 534.6C202.1 547.1 181.8 547.1 169.3 534.6L89.3 454.6C76.8 442.1 76.8 421.8 89.3 409.3C101.8 396.8 122.1 396.8 134.6 409.3L160 434.7L160 128C160 110.3 174.3 96 192 96C209.7 96 224 110.3 224 128L224 434.7L249.4 409.3C261.9 396.8 282.2 396.8 294.7 409.3C307.2 421.8 307.2 442.1 294.7 454.6z" />
            </svg>
            A - Z
          </button>
          <button
            onClick={() => handleSortClick("descending")}
            className={sortBy === "descending" ? classes.active : ""}
            data-cy="sort-desc-button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <path d="M294.6 454.6L214.6 534.6C202.1 547.1 181.8 547.1 169.3 534.6L89.3 454.6C76.8 442.1 76.8 421.8 89.3 409.3C101.8 396.8 122.1 396.8 134.6 409.3L160 434.7L160 128C160 110.3 174.3 96 192 96C209.7 96 224 110.3 224 128L224 434.7L249.4 409.3C261.9 396.8 282.2 396.8 294.7 409.3C307.2 421.8 307.2 442.1 294.7 454.6z" />
            </svg>
            Z - A
          </button>
        </div>
      )}
    </div>
  );
}
