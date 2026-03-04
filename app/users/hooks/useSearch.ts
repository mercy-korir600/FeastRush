"use client";

import { useMemo, useState } from "react";
import { restaurants } from "@users/data/restaurants";

export function useSearch(selectedCounty: string) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return [];

    return restaurants.filter((restaurant) => {
      const matchesCounty = restaurant.county === selectedCounty;

      const matchesName = restaurant.name
        .toLowerCase()
        .includes(query.toLowerCase());

      const matchesMenu = restaurant.menu.some((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );

      return matchesCounty && (matchesName || matchesMenu);
    });
  }, [query, selectedCounty]);

  return { query, setQuery, results };
}