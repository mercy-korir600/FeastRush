"use client";

import { motion } from "framer-motion";
import { categories } from "@/users/hero/data/restaurant";

export default function CategoryFilter({ active, setActive }: { active: string; setActive: (category: string) => void }) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-3 mb-8">
      {categories.map((cat) => (
        <div key={cat} className="relative shrink-0">
          <button
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              active === cat
                ? "bg-primary text-white"
                : "bg-muted text-foreground hover:bg-primary/10"
            }`}
          >
            {cat}
          </button>

          {active === cat && (
            <motion.div
              layoutId="active-pill"
              className="absolute inset-0 bg-primary rounded-full -z-10"
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
