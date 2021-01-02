import styles from "./landing.module.css";

export default function Section5() {
  return (
    <div className="md:flex md:flex-row justify-between items-center pb-20">
      <div className="items-baseline">
        <div>
          <h2 className="md:text-left text-5xl font-semibold sm:text-center">
            Get notified
          </h2>
        </div>
        <div>
          <p className="md:text-left mt-5 text-2xl max-w-sm font-semi-bold sm:text-center">
            Get notified about updates and be the first to get early access to
            the better and smarter way to be more productivity.
          </p>
        </div>
      </div>
      <div className="sm:mt-5">
        <div>
          <p className="text-lg font-bold">Your Email:</p>
        </div>
        <input
          type="text"
          className={styles.email_input}
          name="FirstName"
          placeholder="rishabhis@bitch.com"
        />
        <input
          type="submit"
          className={styles.email_input_btn}
          value="Join our Newsletters"
        />
      </div>
    </div>
  );
}
