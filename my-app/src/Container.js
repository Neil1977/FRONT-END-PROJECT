export default function Container({ children }) {
  return (
    <section className="grid gap-4 px-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-content-center">
      {children}
    </section>
  );
}
