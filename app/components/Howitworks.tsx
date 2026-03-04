export default function HowItWorks() {
  return (
    <section className="py-20 px-10">
      <h3 className="text-4xl font-bold text-center mb-16">
        How It <span className="text-primary">Works</span>
      </h3>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
        {[
          { step: "1", title: "Choose Meals", desc: "Browse menus from multiple restaurants." },
          { step: "2", title: "Place Order", desc: "Order with one click using secure payments." },
          { step: "3", title: "Enjoy Food", desc: "Sit back while we deliver happiness." }
        ].map((item, i) => (
          <div key={i}>
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-primary text-secondary text-xl font-bold">
              {item.step}
            </div>
            <h4 className="mt-6 text-xl font-semibold">{item.title}</h4>
            <p className="mt-3 text-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}