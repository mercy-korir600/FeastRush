"use client";

import useRestaurants from "@/users/hero/hooks/useRestaurants";
import CategoryFilter from "@/users/hero/components/Categoryfilter";
import RestaurantGrid from "@/users/hero/components/restaurantgri";

export default function HomePage() {
  const { active, setActive, filtered } = useRestaurants();

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Nearby Restaurants</h1>
          <p className="text-muted-foreground mt-2">
            Order from the best restaurants around you
          </p>
        </div>

        <CategoryFilter active={active} setActive={setActive} />

        <RestaurantGrid restaurants={filtered} activeCategory={active} />
      </div>
    </main>
  );
}
