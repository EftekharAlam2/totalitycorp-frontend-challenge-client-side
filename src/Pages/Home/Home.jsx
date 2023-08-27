import Banner from "./Banner";
import OurProducts from "./OurProducts";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Uniqueness | SignIn</title>
      </Helmet>
      <Banner></Banner>
      <OurProducts></OurProducts>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
