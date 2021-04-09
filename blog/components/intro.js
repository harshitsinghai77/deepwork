import Link from "next/link";

export default function Intro() {
  return (
    <section className="flex-col lg:flex-row xl:flex-row flex items-center lg:justify-between xl:justify-between mt-16 mb-16 lg:mb-12 xl:mb-12">
      <h1 className="text-6xl xl:text-8xl lg:text-8xl font-bold tracking-tighter leading-tight lg:pr-8 xl:pr-8">
        Habitt Blog
      </h1>
    </section>
  );
}
