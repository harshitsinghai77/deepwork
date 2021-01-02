export default function Section2() {
  return (
    <section className="relative pb-20 auto-grid">
      <div className="z-10 relative w-full">
        <img
          src="https://images.prismic.io/multi-language-example/10cc9671-43f6-4ac5-8320-3f9bc2314d2f_app-screen-dark.jpeg?auto=compress,format&amp;rect=1,0,1225,658&amp;w=1080&amp;h=580"
          alt=""
        />
      </div>
      <div className="absolute sm:hidden md:inline -top-20 -left-32 flex justify-self-start z-0">
        <img
          src="https://nextjs-multi-language-site.vercel.app/images/full-width-image-background.png"
          alt="Background pattern"
          width="790px"
          height="608px"
        />
      </div>
    </section>
  );
}
