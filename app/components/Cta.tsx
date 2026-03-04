import Link from "next/link";

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 px-6 md:px-0 md:min-h-[70vh] flex items-center">
      <div className="md:absolute md:inset-y-0 md:left-0 md:w-1/2 flex justify-center mb-12 md:mb-0">
        <div className="relative w-full h-full">
          <img
            src="del.png"
            alt="FeastRush busy delivery network illustration"
            className="w-full h-full object-cover rounded-3xl md:rounded-r-3xl md:rounded-l-none shadow-2xl"
          />
          <div className="absolute inset-0 bg-primary/20 md:hidden rounded-3xl"></div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 items-center gap-12">
        <div className="hidden md:block"></div>

        {/* Text Content */}
        <div className="w-full text-center md:text-left text-secondary px-0 md:px-12">
          <h3 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Hungry? Let FeastRush <br /> Handle It 😋
          </h3>
          <p className="mt-6 text-lg md:text-xl text-orange-50 font-medium max-w-lg mx-auto md:mx-0">
            Join thousands of happy customers enjoying fast and delicious meals
            every day.
          </p>

          <div className="mt-10">
            <Link href="/users">
              <button className="px-10 py-4 bg-secondary text-primary text-lg font-bold rounded-2xl shadow-xl hover:bg-orange-50 hover:-translate-y-1 transition-all active:scale-95">
                Order Your First Meal
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
