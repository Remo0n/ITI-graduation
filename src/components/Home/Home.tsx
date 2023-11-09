import Articles from "../Articles/Articles";
import Hero from "../Hero/Hero";
import Services from "../OurServices/OurServices";
import Teesting from "../Teesting/teesting";
const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Articles />
      <Teesting />
    </div>
  );
};

export default Home;
