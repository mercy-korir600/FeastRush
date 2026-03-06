"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-screen h-screen overflow-hidden">
      
      <Image
        src="/hero-food.jpg"
        alt="Delicious food"
        fill
        priority
        className="object-cover"
      />

      
      <div className="absolute inset-0 bg-black/50" />

      
      <div className="absolute inset-0 flex items-center">
        <div className="px-10 md:px-20 max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Delicious food, <br />
            <span className="text-gradient">delivered fast</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/90">
            Order from the best local restaurants with easy, contactless
            delivery.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-8 py-3 rounded-full bg-primary text-white font-semibold">
              Order Now
            </button>

            <button className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold">
              View Restaurants
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
