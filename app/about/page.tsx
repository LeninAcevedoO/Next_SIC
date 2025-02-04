import { title, subtitle } from "@/components/primitives";

export default function AboutPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xxxl text-center justify-center">
        <span className={title()}>Acerca de nosotros</span>
        <br />
        <br />
        <span className={title({ color: "violet" })}>
          Comprometidos con la excelencia
        </span>
        <br />
        <div className={subtitle({ class: "mt-4" })}>
          Una empresa dedicada a incrementar el poder de los datos en los
          negocios con integridad, calidad y flexibilidad.
        </div>
      </div>
    </section>
  );
}
