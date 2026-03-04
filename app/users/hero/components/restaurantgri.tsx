"use client";

import { motion, AnimatePresence } from "framer-motion";
import RestaurantCard from "@users/hero/components/RestaurantCard";
import EmptyState from "@users/hero/components/EmptyState";

interface RestaurantGridProps {
  restaurants: any[];
  activeCategory: string;
}

export default function RestaurantGrid({
  restaurants,
  activeCategory,
}: RestaurantGridProps) {
  return (
    <motion.div
      layout
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <AnimatePresence mode="wait">
        {restaurants.length > 0 ? (
          restaurants.map((r) => <RestaurantCard key={r.name} restaurant={r} />)
        ) : (
          <EmptyState category={activeCategory} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
