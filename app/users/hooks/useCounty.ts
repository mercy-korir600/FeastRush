"use client";

import { useEffect, useState } from "react";
import { counties } from "@users/data/counties";
import { County } from "@users/types/county";

export function useCounty() {
  const [selectedCounty, setSelectedCounty] = useState<County>(counties[10]); // Default Kakamega

  // Load saved county
  useEffect(() => {
    const saved = localStorage.getItem("county");
    if (saved) {
      const parsed: County = JSON.parse(saved);
      setSelectedCounty(parsed);
    }
  }, []);

  // Save county when changed
  useEffect(() => {
    localStorage.setItem("county", JSON.stringify(selectedCounty));
  }, [selectedCounty]);

  const handleCountyChange = (id: number) => {
    const county = counties.find((c) => c.id === id);
    if (county) setSelectedCounty(county);
  };

  return {
    counties,
    selectedCounty,
    handleCountyChange,
  };
}