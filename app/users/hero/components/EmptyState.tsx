"use client";

import { motion } from "framer-motion";
export default function EmptyState({ category }: { category: string }) {
  return (
    <motion.div
      key="empty"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="col-span-full text-center py-20"
    >
      <h3 className="text-xl font-semibold mb-2">No restaurants found</h3>
      <p className="text-muted-foreground">
        There are currently no restaurants available under{" "}
        <span className="font-medium text-foreground">{category}</span> cuisine.
      </p>
    </motion.div>
  );
}
