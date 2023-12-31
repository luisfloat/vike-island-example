import { withHydration } from "~/island/react";
import Counter from "./Counter.island.tsx";

function Section() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-4">Section</h2>

      <Counter count={20} />
    </section>
  );
}

export default withHydration(Section);
