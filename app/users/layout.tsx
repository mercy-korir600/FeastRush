import Header  from "@users/components/Header";

export default function UsersLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen flex flex-col">
      

      <Header/>

      <main className="flex-1">
        {children}
      </main>
    </section>
  );
}