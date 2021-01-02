import styles from "./landing.module.css";

export default function Section3() {
  return (
    <section className="pb-16 lg:flex lg:flex-row justify-between">
      <div>
        <img
          src="https://nextjs-multi-language-site.vercel.app/images/top-icon.png"
          alt="Checkbox icon"
        />
        <div>
          <h2 className="max-w-sm	my-10 text-5xl font-semibold">
            The future of Todo application
          </h2>
        </div>
        <div>
          <p className="max-w-5xl text-lg ">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat <a href="">mttis eroas</a>. Nullam malesuada
            erat ut turpis. Suspendisse urna nibh, viverra non.
          </p>
        </div>
      </div>
      <div className="lg:ml-16 sm:mt-10">
        <div>
          <h3 className="text-2xl font-semibold">
            Never worry about forgetting things again
          </h3>
          <p className={styles.info_text_right_paragraph}>
            Let Todoist remember it all for you. You can get tasks out of your
            head and onto your to-do list anytime, anywhere, on any device –
            even offline.
          </p>
          <h3 className="text-2xl font-semibold">
            Todoist helps millions of people feel more in control of their lives
          </h3>
          <p className={styles.info_text_right_paragraph}>
            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
            mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in
            sem quis dui placerat ornare.
          </p>
          <h3 className="text-2xl font-semibold">
            Focus your energy on the right things
          </h3>
          <p className={styles.info_text_right_paragraph}>
            Praesent dapibus, neque id cursus faucibus, tortor neque egestas
            auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam
            dui mi, tincidunt quis.
          </p>
        </div>
      </div>
    </section>
  );
}
