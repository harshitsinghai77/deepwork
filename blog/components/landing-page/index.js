import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";
import Header from "./header";
import Footer from "./footer";
import "./landing.module.css";

const LandingPage = () => (
  <div className="lg:container lg:mx-18 sm:mx-12">
    <Header />

    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />

    <Footer />
  </div>
);

export default LandingPage;
