"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Bike, Star, Clock } from "lucide-react";
import { Restaurant } from "@/users/hero/interface/restaurants";


export default function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35 }}
      className="bg-card rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl transition-all group"
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute top-3 right-3 flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/30 backdrop-blur-md text-white shadow-md">
          <Star size={14} className="fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{restaurant.rating}</span>
          <span className="text-xs opacity-80">({restaurant.reviews})</span>
        </div>
      </div>

      <div className="p-5 space-y-2">
        <h3 className="text-lg font-semibold truncate">{restaurant.name}</h3>

        <p className="text-muted-foreground text-sm">
          {restaurant.cuisine} · {restaurant.price}
        </p>

        <div className="flex justify-between items-center text-sm text-muted-foreground pt-2">
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{restaurant.time}</span>
          </div>

          <div className="flex items-center gap-1">
            <Bike size={14} />
            <span>{restaurant.delivery}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
