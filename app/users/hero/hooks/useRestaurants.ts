"use client";

import { useState, useMemo } from "react";
import { restaurants } from "@/users/hero/data/restaurant";
export default function useRestaurants() {
  const [active, setActive] = useState("All");
    const filtered =
        active === "All"
          ? restaurants
          : restaurants.filter((r) =>
              r.tags.some((tag) =>
                tag.toLowerCase().includes(active.toLowerCase()),
              ),
            );
            return {
                active,
                setActive,  
                filtered,
            };  }