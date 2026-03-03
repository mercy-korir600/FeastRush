import Link from "next/link";


export default function Hero() {
  return (
      <section className="grid md:grid-cols-2 gap-12 px-10 py-20 items-center max-w-7xl mx-auto">
        
        <div>
          <h2 className="text-5xl font-extrabold leading-tight">
            Fast, Smart & <br />
            <span className="text-primary">Delicious Meals</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-lg">
            FeatRush is a modern food ordering platform that connects you to your favorite restaurants, 
            delivering fresh, tasty meals right to your doorstep  quickly and effortlessly.
          </p>

          <div className="mt-10 flex gap-5">
            <Link href="/users">
            <button className="px-8 py-3 bg-primary text-secondary font-semibold rounded-xl hover:bg-primary transition">
              Get Started
            </button>
            </Link>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            alt="Delicious food"
            className="rounded-3xl shadow-xl"
          />
        </div>

      </section>

  );
}