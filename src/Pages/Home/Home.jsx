import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import OurProducts from "./OurProducts";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Uniqueness | Home</title>
      </Helmet>
      <Banner></Banner>
      <OurProducts></OurProducts>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
